import { useSelector } from "react-redux";

const Display = () => {
  const result = useSelector((store) => store.counter);
  console.log(result);

  return <div>{result}</div>;
}

export default Display;
