import React, { useEffect } from 'react'
import McqOptionCreatorGroup from "./components/McqOptionCreatorGroup/McqOptionCreatorGroup";

interface Options {
  id: string | number;
  value: string;
}
function App() {
  const [options, setOptions] = React.useState<Options[]>([]);

  useEffect(()=>{
    console.log(options)
  },[options])

  return (
    <>
      <McqOptionCreatorGroup options={options} setOptions={setOptions} />
    </>
  );
}

export default App;
