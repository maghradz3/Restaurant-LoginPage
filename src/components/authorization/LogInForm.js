import React, { useState } from "react";
import { Input, Text } from "../../helpers";
import { Button, FormControl, styled } from "@mui/material";
import fbVector from "../../images/Vector.png";
import gmailVector from "../../images/Ellipse 1 (1).png";
import eye from "../../images/eye.png";
const StyledFormControl = styled(FormControl)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
  height: "334px",
  // border: "2px solid red ",
  // border: "2px solid red",
  "@media only screen and (max-width: 900px)": {
    width: "100%",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "77.5px",
  height: "29.25px",
  borderRadius: "32px",
  backgroundColor: "#2F372D",
  color: "#EDD0AA",
}));

const StyledSocialButtons = styled(Button)(() => ({
  width: "212px",
  height: "41px",
  backgroundColor: "#F7E6C4",
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "15px",
}));

export const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordHideShow = showPassword ? "text" : "password";

  return (
    <StyledFormControl>
      <Input type="text" name="number||mail" label="მობილური/ელ-ფოსტა" />
      <Input type={passwordHideShow} name="password" label="პაროლი"></Input>
      <img
        onClick={() => setShowPassword((prev) => !prev)}
        style={{
          cursor: "pointer",
          alignSelf: "flex-end",
          position: "relative",
          top: "-35px",
          right: "20px",
        }}
        src={eye}
      />
      <Text
        cursor="pointer"
        marginLeft="10px"
        alignSelf="flex-start"
        size="10px"
        weight="500"
        color="#606C5D"
      >
        დაგავიწყდა პაროლი?
      </Text>
      <StyledButton sx={{ alignSelf: "flex-end" }}>შესვლა</StyledButton>
      <Text size="12px" weight={"600"} color="#2F372D">
        ან
      </Text>
      <StyledSocialButtons>
        <img src={fbVector} />
        <Text size="12px" color="#2F372D" weight="600">
          განაგრძე Facebook-ით
        </Text>
      </StyledSocialButtons>
      <StyledSocialButtons>
        <img src={gmailVector} />
        <Text size="12px" color="#2F372D" weight="600">
          განაგრძე Google-ით
        </Text>
      </StyledSocialButtons>
    </StyledFormControl>
  );
};
