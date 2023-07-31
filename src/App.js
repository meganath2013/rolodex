import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state=
    {monsters:[]
    };
  }

  render(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => 
      this.setState(
        ()=>{
          return {monsters:data};
        },
        ()=>{
          console.log(this.state.monsters)
        }
      )
      )

    
  return (
    <div className="App">
      {
        this.state.monsters.map((data)=> 
        {  
          return(      
          <div key={data.id}>
          <h1> {data.name} </h1>
          </div>)
        }
        )

      }
      </div>
      );
    }
  }

export default App;
