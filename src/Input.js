import InputBox from "./InputBox";
import React from "react";

export default function Input(props) {
  const {forwardedRef} = props;

  return (
    <InputBox>
      <input ref={forwardedRef} type="text" value="some text here"/>
    </InputBox>
  )
}