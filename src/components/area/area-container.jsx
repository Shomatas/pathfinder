import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import Area from "./area";
import { useSelector } from "react-redux";
import Cell from "./cell/cell";
import { incrementScore } from "../../redux/slices/area-slice";

const AreaContainer = props => {
    const dispatch = useDispatch();

    const rows = useSelector(state => state.area.rows);
    const columns = useSelector(state => state.area.columns);
    const len = useSelector(state => state.area.len);
    const score = useSelector(state => state.area.score);

    const [cells, setCells] = useState(new Array(rows * columns).fill(<Cell />));
    const path = [];

    const clickCorrectCell = () => {
        const newCells = new Array(rows * columns).fill(<Cell />);
        let i = Math.floor(Math.random() * rows * columns);
        while (path.includes(i)) i = Math.floor(Math.random() * rows * columns);
        path.shift();
        path.push(i);
        newCells[path[0]] = <Cell
            onClick={clickCorrectCell}
        />;
        newCells[i] = <Cell
            active
        />;
        setCells(newCells);
        dispatch({type: incrementScore});
    }

    useEffect(() => {
        let i = Math.floor(Math.random() * rows * columns);

        while (path.length < len) {
            while (path.includes(i)) i = Math.floor(Math.random() * rows * columns);
            path.push(i);
        }


        for (let j = 0; j < len; j++) {
            setTimeout(() => {
                const newCells = new Array(rows * columns).fill(<Cell />);
                newCells[path[0]] = <Cell
                    onClick={clickCorrectCell}
                />;
                newCells[path[j]] = <Cell
                    active
                />;
                setCells(newCells);

            }, (j + 1) * 500);
        }

    }, []);



    return <Area cells={cells} score={score}/>
}

export default AreaContainer;