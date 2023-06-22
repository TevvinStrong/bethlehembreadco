import styled from "styled-components";
import { Button } from "@mui/material";

export const MidSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const MidSizeImage = styled.img`
  height: 78vh;
  width: 34%;
  margin-left: 15%;
  margin-top: 7%;
  padding-right: 1%;
`;
export const MidSizeAboutSection = styled.div`
  padding-top: 32px;
  height: 74vh;
  width: 34%;
  margin-top: 7%;
  margin-right: 15%;
  background-color: #b5a280;
`;
export const MidSizeAboutSectionText = styled.span`
  font-size: 28px;
  font-family: sans-serif;
  line-height: 83px;
`;

export const MidSizeAboutSectionButtonContainer = styled.div`
  padding-top: 72px;
`;

export const MidSizeAboutSectionButton = styled(Button)`
  padding-top: 5px;
`;
