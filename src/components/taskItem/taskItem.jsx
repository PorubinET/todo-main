import React, { Component } from "react";

import './taskItem.scss';

 class TaskItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            id: this.props.index
        }
    }

    inputChange = e => {this.setState({title: e.target.value.replace (/ +/g, ' ')})}

    onFocus(e) {e.currentTarget.classList.add("to-do__text-active")}

    onBlur = (e) => {
        e.currentTarget.classList.remove("to-do__text-active"); 
        this.setState({ 
            title: this.props.title      
        })      
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            e.currentTarget.setAttribute("readonly", "true")
            e.currentTarget.classList.remove("to-do__text-active");
            this.props.updateData(
                this.state.id,
                this.state.title,
            );
            if(!this.state.title.length) {
                this.setState({ 
                    title: this.props.title      
                })
            } 
        } 
          
    }
      
    removeAttribute = (e) => {
        e.currentTarget.classList.add("to-do__text-active");
        e.currentTarget.removeAttribute("readonly", "true")
    }

    render() {
        const {title} = this.state;
        const {done, onDelete, doneTasks, index} = this.props;
        let classDone, classCheck, classActive;

        if(done){
          classDone = "to-do__text to-do__done";
          classCheck = "to-do__checkbox to-do__checkbox-actve";
          classActive = "to-do__checkbox-check to-do__checkbox-check-active";
        } else {
            classDone = "to-do__text";
            classCheck = "to-do__checkbox";
            classActive = "to-do__checkbox-check";
        }          

        return (
            <li className="to-do__list-li">
                <label className={classCheck} htmlFor="checkItem"></label>
                    <input id="checkItem"
                        className="to-do__checkbox-input" 
                        onClick={doneTasks} 
                        type="checkbox"
                    />
                    <img className={classActive} src="/img/check.svg" alt="check" />
                    <input            
                        className={classDone}
                        type="text" 
                        onClick={this.removeAttribute}
                        onChange={this.inputChange}
                        onKeyDown={this.handleKeyDown}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        value={title}
                        id={index} 
                    />    
                <button className="to-do__checkbox-btn" onClick={onDelete}>
                    <img className="to-do__checkbox-cross" src="/img/cross.svg" alt="delete"/>
                </button>
            </li>           
        );
    }    
}







export default TaskItem;



