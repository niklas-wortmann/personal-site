import { Code, Deck, Slide } from '@personal/reveal-react';

import type { InputStep } from 'react-revealjs-with-code-surfer';
import tsExample from './code/test?raw';
import tsExample2 from './code/test2?raw';

export const steps: InputStep[] = [
  {
    code: tsExample,
    lang: 'ts',
    showNumbers: false,
    focus: '10,13:23',
  },
  {
    code: tsExample2,
    lang: 'ts',
    showNumbers: false,
    focus: '8,11:15',
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
