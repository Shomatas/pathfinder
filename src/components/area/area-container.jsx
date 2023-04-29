// import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import Area from "./area";
import { useSelector } from "react-redux";
import Cell from "./cell/cell";

const AreaContainer = props => {
    // const dispatch = useDispatch();
    const rows = useSelector(state => state.area.rows);
    const columns = useSelector(state => state.area.columns);

    const [cells, setCells] = useState(new Array(rows * columns).fill(<Cell />));
    console.log(cells);

    const clickCorrectCell = () => {
        const newCells = new Array(rows * columns).fill(<Cell />);
        const i = Math.floor(Math.random() * rows * columns);
        newCells[i] = <Cell
            active
            onClick={clickCorrectCell}
        />;
        setCells(newCells);
    }

    useEffect(() => {
        const i = Math.floor(Math.random() * rows * columns);
        const newCells = [...cells];
        newCells[i] = <Cell
            active
            onClick={clickCorrectCell}
        />;
        setCells(newCells);

    }, []);



    return <Area cells={cells} />
}

export default AreaContainer;