import React, { Component } from "react";

import './taskinput.scss'

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }
    
    // .trim()

    onSubmit = (e) => {
        if(this.state.title) {
            e.preventDefault();
            this.props.onAdd(this.state.title.replace (/ +/g, ' '));
            this.setState({title: ''})
        } 
        else{e.preventDefault()}
    }  

    inputChange = e => {this.setState({title: e.target.value})}
    
    render() {
        const {title} = this.state;
        const {allCompleated, data} = this.props;

        let classArrow = data.length ? "to-do__list-btn-arrow to-do__list-btn-arrow-active" : " to-do__list-btn-arrow";
        let classCheck = data.length ? "to-do__list-btn to-do__list-btn-active" : "to-do__list-btn"

        if(data.every(item => item.done)) {classArrow += " to-do__fading"}

        return (
            <div className="to-do__task-input">
                <input className={classCheck}  
                    onClick={allCompleated} 
                    type="checkbox">    
                </input>
                <img className={classArrow} 
                    src="/img/arrow.svg" 
                    alt="arrow"/>
                <form className="add" 
                    onSubmit={this.onSubmit}>                
                    <input className="to-do__task"
                        type="text" 
                        value={title} 
                        onChange={this.inputChange} 
                        placeholder="What needs to be done?">                   
                    </input>
                </form>
            </div>  
        )
    }  
}




export default TaskInput;

