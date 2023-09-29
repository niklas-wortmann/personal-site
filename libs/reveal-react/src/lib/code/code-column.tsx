import { ReactNode, useEffect, useState } from 'react';
import {
  SurferSlide,
  SurferSlideIDProvider,
  type InputStep,
  useRevealJSInstance,
  useCodeSurferSlideID,
} from 'react-revealjs-with-code-surfer';
import { CodeSurfer as CodeSurferStandalone } from '@code-surfer/standalone';
import { CodeSurferTheme, vsDark } from '@code-surfer/themes';
import { useSpring } from 'use-spring';
import { wsDarkTheme } from './themes/webstorm.dark.theme';

export type Props = {
  steps: InputStep[];
  /*
   * only pass notes
   */
  children?: ReactNode;
};

export function Code(props: Props) {
  return (
    <SurferSlideIDProvider>
      <SurferSlide>
        <div className="r-stretch">
          <SurferCode
            steps={props.steps}
            nav={{ next: 'ArrowRight', previous: 'ArrowLeft' }}
            theme={wsDarkTheme}
          />
        </div>
        {props.children}
      </SurferSlide>
    </SurferSlideIDProvider>
  );
}

export default Code;

export type SurferCodeProps = {
  steps: InputStep[];
  theme?: CodeSurferTheme;
  nav?: {
    next: KeyboardEvent['code'];
    previous: KeyboardEvent['code'];
  };
};

export function SurferCode(props: SurferCodeProps) {
  const {
    steps,
    theme = vsDark,
    nav = { next: 'ArrowRight', previous: 'ArrowLeft' },
  } = props;

  const revealInstance = useRevealJSInstance();
  const slideID = useCodeSurferSlideID();

  const [{ progress, teleport }, setProgress] = useState({
    progress: 0,
    teleport: true,
  });

  const [smoothProgress] = useSpring(progress, {
    decimals: 3,
    stiffness: 80,
    damping: 48,
    mass: 8,
    teleport,
  });

  const max = steps.length - 1;

  useEffect(() => {
    // @ts-ignore
    revealInstance?.configure({
      keyboardCondition: (e) => {
        const slide = revealInstance?.getCurrentSlide();
        const currentSlideID = slide?.dataset.codeSurfer;
        console.log({ currentSlideID, slideID, slide });
        if (currentSlideID !== slideID) {
          return true;
        }
        console.log({ progress, max });
        if (e.code === nav.next && progress === max) {
          return true;
        } else if (e.code === nav.previous && progress === 0) {
          return true;
        }
        return false;
      },
    });
  }, [revealInstance, progress]);

  useEffect(() => {
    console.log({ progress });
  }, [progress]);

  useEffect(() => {
    function handleKeyboard(e: KeyboardEvent) {
      function navigate() {
        if (progress !== max && e.code === nav.next) {
          setProgress(({ progress }) => ({
            progress: Math.min(Math.floor(progress) + 1, max),
            teleport: false,
          }));
        }

        if (progress !== 0 && e.code === nav.previous) {
          setProgress(({ progress }) => ({
            progress: Math.max(Math.ceil(progress) - 1, 0),
            teleport: false,
          }));
        }
      }

      if (!revealInstance) {
        return;
      }

      if (slideID === '') {
        navigate();
      } else {
        const slide = revealInstance.getCurrentSlide();
        const currentSlideID = slide.dataset.codeSurfer;

        if (currentSlideID === slideID) {
          navigate();
        }
      }
    }

    window.addEventListener('keydown', handleKeyboard);

    return function () {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [max, nav.next, nav.previous, progress, revealInstance, slideID]);

  return (
    <CodeSurferStandalone
      progress={smoothProgress}
      steps={steps}
      theme={theme}
    />
  );
}
