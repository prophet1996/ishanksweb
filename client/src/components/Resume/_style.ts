import styled from "styled-components";

export const ResumeWrapper = styled.div`
  display: flex;
  margin: 1.2em;
  margin-top: 20%;
  @media ${(props) => props.theme.device.tablet} {
    margin-top: 8%;
  }
`;
