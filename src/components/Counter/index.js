import "./style.css";
import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Counter = () => {
    const dispatch = useDispatch();
  return (
    <>
      <button className="btn-grad" onClick={() => dispatch(addNumber(1))}>+</button>
      <button className="btn-grad" onClick={() => dispatch(subNumber(1))}>-</button>
    </>
  );
};

export default Counter;
