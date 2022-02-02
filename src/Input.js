import InputBox from "./InputBox";
import React, {useEffect} from "react";

export default function Input(props) {
  const {forwardedRef} = props;
  
  useEffect(() => {
    forwardedRef.current.addEventListener("keydown", event => {
      console.log('native event triggered')
    })
  }, [])

  useEffect(() => {
    setInterval(() => {
      forwardedRef.current.dispatchEvent(new KeyboardEvent('keydown', {
        'keyCode': 40
      }));
    }, 1000)
  }, [forwardedRef])

  return (
    <InputBox>
      <input
        onKeyDown={() => {console.log('keyDown triggered')}}
        ref={forwardedRef}
        type="text"
        value="some text here"
      />
    </InputBox>
  )
}