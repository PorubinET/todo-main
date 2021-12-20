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

    inputChange = e => {
        this.setState({ 
            title: e.target.value      
        })
    }

    onFocus(e) {
        e.currentTarget.classList.add("to-do__text-active");
    }
    onBlur(e) {
        e.currentTarget.classList.remove("to-do__text-active");
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

    handleKeyDown = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            // e.setAttribute
            e.currentTarget.classList.remove("to-do__text-active");
            this.props.updateData(
                this.state.id,
                this.state.title,
            );
        }
    }
      

    render() {
        const {title} = this.state;
        const {done, onDelete, doneTasks, index} = this.props;
 

        let classDone = "to-do__text" 
        if  (done) {
            classDone += ' to-do__done'
        }
        let classCheck = "to-do__checkbox" 
        if  (done) {
            classCheck += ' to-do__checkbox-actve'
        }
        let classActive = "to-do__checkbox-check" 
        if  (done) {
            classActive += ' to-do__checkbox-check-active'
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
                            onChange={this.inputChange}
                            onKeyDown={this.handleKeyDown}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            // readOnly value={this.value}
                            // onSubmit={this.onSubmit}
                            value={title}
                            id={index} 
                            type="text" 
                            
                        />    
                    <button className="to-do__checkbox-btn" onClick={onDelete}>
                        <img className="to-do__checkbox-cross" src="/img/cross.svg" alt="delete"/>
                    </button>       
            </li>           
        );
    }    
}







export default TaskItem;



