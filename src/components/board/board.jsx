import React from "react";
import './board.scss'


const Board = (props) => {
    const {allDelete, data, countTask} = props;
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'compleated', label: 'Completed'}
        ];

        const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;

        return (
            <button 
                className={active ? "to-do__btn-active" : "to-do__board-btn"}
                type="button"
                onClick={() => props.onFilterSelect(name)}
                key={name}>
                {label}
            </button>
        )
    })

    if  (countTask > 0) { 
        return (
            <div className="to-do__board">
                <p className="to-do__board-list-items">{data.filter(item => !item.done).length} item left</p>
                <ul className="to-do__board-check">
                    <li className="to-do__board-li">
                        {buttons}
                    </li>
                </ul>
                <div className="to-do__board-list-btn">
                    <button className={data.filter(item => item.done).length ? 
                        "to-do__board-btn-clear to-do__board-btn-active" : 
                        "to-do__board-btn-clear"}  
                        onClick={allDelete}
                    >
                        Clear completed
                    </button>
                </div>
            </div>   
        ) 
    } 
    else{
        return (
            <></>
        )
    }  
}



export default Board;