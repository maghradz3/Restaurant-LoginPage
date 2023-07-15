import React from "react";
import { TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "#F7E6C4",
  borderRadius: "10px",
  width: "95%",
  //   height: "100%",
}));

export const Input = ({
  type = "text",
  name,
  label,
  onChange,
  error,
  value,
}) => {
  return (
    <StyledTextField
      //   id="filled-basic"
      //   variant="filled"
      type={type}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
      error={Boolean(error)}
      helperText={error}
      InputLabelProps={{
        style: { color: "black" },
      }}
      sx={{
        marginTop: 2,
        "& fieldset": { borderRadius: "10px" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ecb846",
          },
          "&:hover fieldset": {
            borderColor: "#ecb846",
          },
          "&:not(:hover) fieldset": {
            borderColor: "#ecb846",
          },
        },
      }}
    />
  );
};
