import React, { Component } from "react";
import './taskinput.scss'

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }
    

    onSubmit = (e) => {
        if(this.state.title.trim()) {
            e.preventDefault();
            this.props.onAdd(
                this.state.title.replace (/ +/g, ' '),
            );
            this.setState({
                title: '',
            })
        } 
        else{
            e.preventDefault();
        }
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
                <form className="add" onSubmit={this.onSubmit}>                
                    <input className="to-do__task"
                        value={title} 
                        type="text" 
                        onChange={this.inputChange} 
                        placeholder="What needs to be done?">                   
                    </input>
                </form>
            </div>
            
        )
    }  
}




export default TaskInput;

