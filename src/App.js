import React, {Component} from "react";

import TaskInput from "./components/taskInput/taskInput";
import TaskList from "./components/taskList/taskList";
import Board from "./components/board/board"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id:"1", title: "a", done: false},
        {id:"2", title: "b", done: false},
        {id:"3", title: "c", done: false},
        {id:"4", title: "d", done: false},
      ],
      filter: 'all'
    }
    this.maxId = this.state.data.length +1;  
  }
  
  deleteItem = (id) => {
    this.setState({data: this.state.data.filter(item => item.id !== id)})
  }

  deleteAll = () => {
    this.setState({data: this.state.data.filter(item => !item.done)})
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

  
  // updateData = (id, value) => {
  //   const newList = this.state.data.map(task => {
  //     if (id === task.id) {
  //       return {...task, title: value}
  //     } else {
  //       return task
  //     }
  //   })
  //   this.setState({ data: newList })
  // }


  updateData = (id, value) => {
    const newList = this.state.data.map(task => {
      if (id === task.id) 
        return {...task, title: value}
      else 
        return task
    })
    this.setState({ data: newList })
  }

  // allCompleated = () => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (this.state.data.every(item => item.done === true))
  //         return {...item, done: !item.done}
  //       else
  //         return {...item, done: true}
  //     })
  //   }))
  // }

  allCompleated = () => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(this.state.data.every(item => item.done)) 
          return  {...item, done: !item.done}
        else
          return {...item, done: true}
      })
    }))
  }
  

  // doneTasks = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, done: !item.done}
  //       }
  //       return item;
  //     })
  //   }))
  // }

  doneTasks = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) 
          return {...item, done: !item.done}
        return item;
      })
    }))
  }

  // filterPost = (items, filter) => {
  //   switch (filter) {
  //     case "compleated":
  //       return items.filter(items => items.done);
  //     case "active":
  //       return items.filter(items => !items.done);
  //     default:
  //       return items;
  //   }
  // }

  filterPost = (items, filter) => {
    switch (filter) {
      case "compleated":
        return items.filter(items => items.done);
      case "active":
        return items.filter(items => !items.done);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => { this.setState({filter}) }

  render(){
    const {data, filter} = this.state;
    const visibleData = this.filterPost((data), filter);
    const countTask = data.length
    // const activeTask = this.state.data.filter(item => item.done === false).length
    // const doneTask = this.state.data.filter(item => item.done === true).length
    // console.log((this.state.data.done === true));
    // const dataValue = data;

    return (
      <div className="App">   
          <div className="wrapper">
            <div className="to-do">
              <h1 className="to-do__title">todos</h1>     
              <div className="to-do__block">
                <TaskInput 
                data={visibleData}
                // activeTask={activeTask}
                onAdd={this.addTask}
                allCompleated={this.allCompleated}
                />
                <TaskList 
                data={visibleData}
                doneTasks={this.doneTasks}
                onDelete={this.deleteItem}
                updateData={this.updateData}
                allCompleated={this.allCompleated}
                />
                <Board 
                data={visibleData}
                filter={filter}
                // activeTask={activeTask}
                // doneTask={doneTask}
                countTask={countTask}
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
