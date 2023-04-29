import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeArea } from "./redux/slices/area-slice";

const App = () => {
  const dispatch = useDispatch();

  return <div>
    <Link to="/area" onClick={() => {
      
      dispatch({
        type: changeArea,
        rows: 1,
        columns: 1,
      })
    }}>District championship</Link>
    <Link to="/area" onClick={() => {
      
      dispatch({
        type: changeArea,
        rows: 2,
        columns: 1,
      })
    }}>City championship</Link>
    <Link to="/area" onClick={() => {
      
      dispatch({
        type: changeArea,
        rows: 3,
        columns: 1,
      })
    }}>Regional championship</Link>
    <Link to="/area" onClick={() => {
      
      dispatch({
        type: changeArea,
        rows: 4,
        columns: 1,
      })
    }}>National championship</Link>
    <Link to="/area" onClick={() => {
      
      dispatch({
        type: changeArea,
        rows: 5,
        columns: 1,
      })
    }}>World championship</Link>
  </div>
}

export default App;
