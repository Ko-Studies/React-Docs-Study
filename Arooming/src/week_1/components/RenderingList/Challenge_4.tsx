// 4. List with a separator
// <p> 태그 중간에 line 넣기 (시작과 끝에는 line이 들어가면 안됨)
import React from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Challenge_4() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        return (
          <React.Fragment key={index}>
            <p key={index}>{line}</p>
            {(index === 0 || index === 1) && <hr />}
          </React.Fragment>
        );
      })}
    </article>
  );
}
