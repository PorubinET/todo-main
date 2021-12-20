import React, {Component} from "react";

import TaskInput from "./components/taskInput/taskInput";
import TaskList from "./components/taskList/taskList";
import Board from "./components/board/board"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        // {id:"1", title: "Задача", done: false},
        // {id:"2", title: "Todo", done: false},
        // {id:"3", title: "Сделать", done: false},
        // {id:"4", title: "Срочно", done: false},
      ],
      filter: 'all'
    }
    this.maxId = this.state.data.length +1;  
  }
  

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    })
  }

  deleteAll = () => {
    this.setState(() => {
        return {data: this.state.data.filter(item => item.done === false)}  
    })
  }

  addTask = (title) => {
    const newItem = {
      title,
      done: false,
      id: this.maxId++,
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  
  updateData = (id, value) => {
    const newList = this.state.data.map(task => {
      if (id === task.id) {
        return {...task, title: value}
      } else {
        return task
      }
    })
    this.setState({ data: newList })
  }

  allCompleated = () => {
    const doneCount = this.state.data.filter(item => item.done === false).length
    this.setState(({data}) => ({
      data: data.map(item => {
        if (doneCount === 0)
          return {...item, done: !item.done}
        else
          return {...item, done: item.done = true}
      })
    }))
  }
  

  doneTasks = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, done: !item.done}
        }
        return item;
      })
    }))
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case "compleated":
        return items.filter(items => items.done);
      case "active":
        return items.filter(items => items.done === false);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  

  render(){
    const {data, filter} = this.state;
    const activeTask = this.state.data.filter(item => item.done === false).length
    const doneTask = this.state.data.filter(item => item.done === true).length
    const countTask = this.state.data.filter(item => item).length
    const visibleData = this.filterPost((data), filter);
    const dataValue = this.state.data;

    return (
      <div className="App">   
          <div className="wrapper">
            <div className="to-do">
              <h1 className="to-do__title">todos</h1>
              
              <div className="to-do__block">
                <TaskInput 
                countTask={countTask}
                activeTask={activeTask}
                onAdd={this.addTask}
                allCompleated={this.allCompleated}
                />
                <TaskList 
                data={visibleData}
                dataValue={dataValue}
                doneTasks={this.doneTasks}
                onDelete={this.deleteItem}
                updateData={this.updateData}
                allCompleated={this.allCompleated}
                />
                <Board 
                filter={filter}
                countTask={countTask}
                activeTask={activeTask}
                doneTask={doneTask}
                allDelete={this.deleteAll}
                onFilterSelect={this.onFilterSelect}              
                />  
              </div>
            </div>   
          </div>
      </div> 
    )
  }
}



export default App;
