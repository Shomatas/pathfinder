import Cell from "./cell/cell"

const Area = props => {
    return <div>
        {props.cells}
        Score: {props.score}
    </div>
}

export default Area;