import List from "./List";
import Input from "./Input";
import React, {useEffect, useRef, useState} from "react";
import {PortableElement} from "./PortableElement";

function handleClickOutside(event, ref, callback) {
  if (ref.current && !ref.current.contains(event.target)) {
    callback();
  }
}

export default function Select(props) {
  const {forwardedRef} = props;
  const [isOpened, setIsOpened] = useState(false);
  const triggerElementRef = useRef(null);

  const onClick = () => {
    setIsOpened(true);
    triggerElementRef.current.focus();
  }

  const onBlur = () => {
    setIsOpened(false);
    triggerElementRef.current.blur();
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => handleClickOutside(e, forwardedRef, onBlur));
   
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [forwardedRef])

  useEffect(() => {
    console.log("forwardedRef.current", triggerElementRef.current);
  }, [])
  
  return (
    <div
      ref={forwardedRef}
      onClick={() => onClick()}
      className="wrapper"
    >
      <Input forwardedRef={triggerElementRef}/>
      {
        isOpened && (
          <PortableElement id="portals">
            <List elements={["Elem 1", "Elem 2", "Elem 3"]}/>
          </PortableElement>
        )
      }
    </div>
  )
}
