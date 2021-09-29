import "./style.css";
import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";
import { Button } from "@material-ui/core";

const Counter = () => {
    const dispatch = useDispatch();
  return (
    <>
      <Button variant="contained" onClick={() => dispatch(addNumber(1))}>+</Button>
      <Button variant="contained" onClick={() => dispatch(subNumber(1))}>-</Button>
    </>
  );
};

export default Counter;
