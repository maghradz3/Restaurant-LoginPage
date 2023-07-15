import React from "react";
import { styled, Typography } from "@mui/material";

const StyledTypography = styled(Typography)(() => ({
  fontFamily: "Noto Serif Georgian",
}));

export const Text = ({
  children,
  size,
  color,
  weight,
  variant = "body1",
  ...rest
}) => {
  return (
    <Typography
      style={{
        fontSize: size,
        color: `${color}`,
        fontWeight: weight,
        cursor: rest.cursor,
        margin: rest.margin,
      }}
      variant={variant}
      {...rest}
    >
      {children}
    </Typography>
  );
};
