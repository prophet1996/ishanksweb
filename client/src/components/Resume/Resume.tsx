import React from "react";
import BackButton from "../shared/BackButton";
import { ResumeWrapper } from "./_style";
import { ResumeHeading } from "../shared";
export default (props: ResumeProps) => {
  return (
    <ResumeWrapper>
      <BackButton />
      <ResumeHeading
        heading={"Ishank Sharma"}
        underline
        bold
        size={5}
      ></ResumeHeading>
      <ResumeHeading
        heading={"Full Stack Developer"}
        underline={false}
        bold={false}
        size={2}
      ></ResumeHeading>
    </ResumeWrapper>
  );
};

type ResumeProps = {};
