import styles from './deck.module.css';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import { ReactNode, useEffect } from 'react';
import { useRevealJSInstance } from 'react-revealjs-with-code-surfer';

/* eslint-disable-next-line */
export type DeckProps = { children: ReactNode; config?: Reveal.Options };

export function Deck(props: DeckProps) {
  return (
    <main className="reveal transition-opacity delay-500">
      <div className="slides">{props.children}</div>
    </main>
  );
}

export default Deck;
