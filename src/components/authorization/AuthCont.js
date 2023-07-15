import React from "react";

import { Box, styled } from "@mui/material";
import loginImage from "../../images/Rectangle 86.png";
import { Text } from "../../helpers";
import { LogInForm } from "./LogInForm";
import back from "../../images/back (1).png";
import close from "../../images/close.png";

const StyledBox = styled(Box)(() => ({
  background:
    "linear-gradient(180deg, #DB9756 0%, rgba(231, 184, 132, 0.9) 52.08%, rgba(247, 230, 196, 0.76) 100%)",
  width: "750px",
  height: "482px",
  boxShadow: "0px 14px 27px 0px #00000040",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // flexDirection: "column",
  borderRadius: "20px",
  padding: "10px",
  "@media only screen and (max-width: 900px)": {
    width: "85%",
  },
}));

const StyledImageBox = styled(Box)(() => ({
  width: "340px",
  height: "340px",
  alignSelf: "flex-start",
  paddingTop: "35px",
  overflow: "hidden",
  // border: "2px solid red",
  "@media only screen and (max-width: 900px)": {
    width: "48%",
    height: "48%",
    paddingTop: "80px",
  },
  "@media only screen and (max-width: 700px)": {
    paddingTop: "100px",
  },
  "@media only screen and (max-width: 700px)": {
    paddingTop: "150px",
  },
  "@media only screen and (max-width: 600px)": {
    display: "none",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
  height: "100%",
}));

const StyledAuthWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  marginRight: "50px",
  "@media only screen and (max-width: 600px)": {
    justifyContent: "center",
    marginRight: "0",
  },
}));

export const AuthCont = () => {
  return (
    <StyledBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // border: "2px solid red",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <img src={back} />
        <img src={close} />
      </Box>
      <Text
        size={"24px"}
        color={"#2F372D"}
        weight={"700"}
        textAlign="center"
        marginBottom="15px"
      >
        გაიარე ავტორიზაცია
      </Text>
      <StyledAuthWrapper>
        <StyledImageBox>
          <StyledImg src={loginImage} />
        </StyledImageBox>
        <Box>
          <LogInForm />
        </Box>
      </StyledAuthWrapper>
    </StyledBox>
  );
};
