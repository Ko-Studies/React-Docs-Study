import React from "react";
import FirstComponent from "./FirstComponent";
import ImportingAndExporting from "./ImportingAndExporting";
import WritingMarkup from "../components/WritingMarkup";
import JSXwithCurlyBraces from "./JSXwithCurlyBraces";
import ConditionalRendering from "./ConditionalRendering";

const Week_1 = () => {
  return (
    <React.Fragment>
      <FirstComponent />
      <ImportingAndExporting />
      <WritingMarkup />
      <JSXwithCurlyBraces />
      <ConditionalRendering />
    </React.Fragment>
  );
};

export default Week_1;
