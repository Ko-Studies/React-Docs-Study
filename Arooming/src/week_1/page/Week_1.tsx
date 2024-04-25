import React from "react";
import FirstComponent from "./FirstComponent";
import ImportingAndExporting from "./ImportingAndExporting";
import WritingMarkup from "../components/WritingMarkup";

const Week_1 = () => {
  return (
    <React.Fragment>
      <FirstComponent />
      <ImportingAndExporting />
      <WritingMarkup />
    </React.Fragment>
  );
};

export default Week_1;
