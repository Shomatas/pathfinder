import { useEffect } from 'react';
import s from './cell.module.css'

const Cell = props => {
    console.log(props.active);
    return <div
        className={`${s.cell} ${props.active ? s.active : ''}`}
        onClick={props.onClick}
    >

    </div>
}

export default Cell;