import styles from './slide.module.css';

/* eslint-disable-next-line */
export interface SlideProps {
  children: React.ReactNode;
}

export function Slide(props: SlideProps) {
  return (
    <section className="relative text-7xl" data-transition="slide">
      {props.children}
    </section>
  );
}

export default Slide;
