import styled from "styled-components";

export const ResumeWrapper = styled.div`
  display: flex;
  margin: 1.2em;
  align-items: start;
  flex-direction: column;
  margin-top: 20%;
  @media ${(props) => props.theme.device.tablet} {
    margin: 10% 15%;
  }
  @media ${(props) => props.theme.deviceMax.mobileM} {
    padding-top: 5%;
  }
`;
