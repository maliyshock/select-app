import Select from "./Select";
import React, {useEffect} from "react";

function App() {

  const selectRef = React.createRef(null);

  useEffect(() => {

    setTimeout(() => {
      selectRef.current.click();
    }, 5000)
  }, [selectRef])
  return (
    <div>
      <Select forwardedRef={selectRef}/>
    </div>
  )
}

export default App;
