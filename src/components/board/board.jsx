import React from "react";
import './board.scss'


const Board = (props) => {
    const {activeTask, allDelete, countTask, doneTask} = props;
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'compleated', label: 'Completed'}
    ];

        const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "to-do__btn-active" : "to-do__board-btn"

        return (
            <button 
                className={`to-do__board-btn ${clazz}`}
                type="button"
                onClick={() => props.onFilterSelect(name)}
                key={name}>
                {label}
            </button>
        )
    })
    let classClear = "to-do__board-btn-clear"
    if (doneTask > 0){
        classClear += " to-do__board-btn-active"
    }

    if  (countTask > 0) {
        return (
            <div className="to-do__board">
                <p className="to-do__board-list-items">{activeTask} item left</p>
                <ul className="to-do__board-check">
                    <li>
                        {buttons}
                    </li>
                </ul>
                <div className="to-do__board-list-btn">
                    <button className={classClear}  
                        onClick={allDelete}>
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