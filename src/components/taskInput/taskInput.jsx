import React, { Component } from "react";


// import TaskItem from "../taskItem/taskItem";
import './taskinput.scss'

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(
            this.state.title,
        );
        this.setState({
            title: '',
        })
    }  

    inputChange = e => {
        this.setState({ 
            title: e.target.value
        })
    }
    

    render() {
        const {title} = this.state;
        const {allCompleated, countTask, activeTask} = this.props;

        let classCheck = "to-do__list-btn"
        let classArrow = "to-do__list-btn-arrow";

        if(countTask > 0){
            classCheck += " to-do__list-btn-active"
            classArrow += " to-do__list-btn-arrow-active"
        }
        if(activeTask === 0){
            classArrow += " to-do__fading"
        }

        return (
            <div className="to-do__task-input">
                <input 
                    className={classCheck}  
                    onClick={allCompleated} 
                    type="checkbox">
                </input>
                <img className={classArrow} src="/img/arrow.svg" alt="arrow" />
                <form className="to-do__form-add" onSubmit={this.onSubmit}>                
                    <input className="to-do__task"
                        type="text" 
                        value={title} 
                        onChange={this.inputChange} 
                        placeholder="What needs to be done?">                   
                    </input>
                    {/* <TaskItem/> */}
                </form>
            </div>
            
        )
    }  
}




export default TaskInput;

