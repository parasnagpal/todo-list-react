// initialize react here
import React from 'react';
import { render } from 'react-dom';
import $ from 'jQuery';

import './styles/main.scss';
import List from './components/List'

class App extends React.Component {
  
  state={
    list:[],
    newitem:''
  }

  addtask=()=>
  {
    let {list,newitem}=this.state
    list.push(
      {
        title:$('#task').val(),
        done:false
      }
    );
    newitem=''
    this.setState({list,newitem})
    
  }

  setstate=()=>{
    this.setState({
      newitem:$('#task').val()
    })

  }

  updateItem = (index, done) => {
    const { list } = this.state;

    list[index].done = done;
    this.setState({ list });
  };


 

  render(){
    const {list}=this.state

    return(
      <React.Fragment>
        <div id="floatin">
        <div id="bottom" className="container">
         <div className="row">
          <input type="text" placeholder="New Task.." id="task" className="mx-4 rounded col" onChange={this.setstate}/>
            <button onClick={this.addtask} className="p-2 col-2">Add</button>    
          </div>
         </div>
        </div>
         <List items={list} updateItem={this.updateItem}/>
      
      </React.Fragment>
    )
  }

}

render(<App />, document.getElementById('app'));
