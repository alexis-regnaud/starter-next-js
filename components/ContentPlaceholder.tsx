import * as React from "react";
import { mix } from "@popmotion/popcorn";

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(10, 40);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(40)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

const Word = ({ width }) => <div className="word" style={{ width }} />;

const Paragraph = ({ words }) => (
  <div className="paragraph">
    {words.map((width, key) => (
      <Word key={key} width={width} />
    ))}
  </div>
);

export default function ContentPlaceholde() {
  return (
    <div className="content-placeholder">
      <div className="header">
        <Word width={75} />
        <Word width={245} />
        <Word width={120} />
      </div>
      {paragraphs.map((words, key) => (
        <Paragraph key={key} words={words} />
      ))}
    </div>
  );
}
