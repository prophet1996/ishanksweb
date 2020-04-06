import React from "react";
import styled from "styled-components";

const ResumeHeadingWrapper = styled.div`
  position: relative;
`;
const Heading: any = styled.h2`
  margin: auto;
  font-size: ${(props: ResumeHeadingProps) => props.size}em;
  font-weight: ${(props: ResumeHeadingProps) =>
    props.bold ? "bolder" : "normal"};
  &:before {
    background-color: ${(props: any) => props.theme.highLight};
    content: "";
    left: 0;
    right: 0;
    bottom: -12px;
    width: inherit;
    position: absolute;
    height: 0.5em;
    z-index: 0;
  }
`;
const Span: any = styled.span`
  color: ${(props) => props.theme.body};
  z-index: 1;
  position: relative;
`;

export default ({ heading, size, bold, underline }: ResumeHeadingProps) => {
  return (
    <ResumeHeadingWrapper>
      <Heading size={size} bold={bold}>
        <Span>{heading}</Span>
      </Heading>
    </ResumeHeadingWrapper>
  );
};

type ResumeHeadingProps = {
  heading: string;
  size: number;
  bold: boolean;
  underline: boolean;
};
