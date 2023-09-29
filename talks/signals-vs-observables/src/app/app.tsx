import { Code, Deck, Slide } from '@personal/reveal-react';

import type { InputStep } from 'react-revealjs-with-code-surfer';
import tsExample from './code/test?raw';
import tsExample2 from './code/test2?raw';

export const steps: InputStep[] = [
  {
    code: tsExample,
    title: 'First function',
    lang: 'js',
    showNumbers: true,
    focus: '1:5',
  },
  {
    code: tsExample2,
    title: 'Second function',
    lang: 'js',
    showNumbers: true,
  },
  {
    code: tsExample2,
    title: 'Third function',
    lang: 'js',
    showNumbers: true,
    focus: '16:33',
  },
  {
    code: tsExample2,
    title: 'All functions',
    lang: 'js',
    showNumbers: true,
  },
  {
    code: tsExample2,
    title: 'Adipiscing?',
    lang: 'js',
    showNumbers: true,
    focus: '7[10:19]',
  },
];
export function App() {
  console.log('in app 12');
  return (
    <Deck>
      <Code steps={steps} />
      <section className="relative text-7xl" data-transition="slide">
        Slide 2
      </section>
      <Slide>Slide 3</Slide>
    </Deck>
  );
}

export default App;
