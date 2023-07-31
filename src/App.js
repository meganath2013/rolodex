import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state=
    {monsters:[],
      searchField:''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => 
      this.setState(
        ()=>{
          return {monsters:data};
        },
        ()=>{
          //console.log(this.state.monsters)
        }
      )
      )
  }


  render(){   
    const filteredMonsters=this.state.monsters.filter(data=>
      {
        return data.name.toLocaleLowerCase().includes(this.state.searchField);
      });

  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search here' onChange={(event)=>{
         const searchBox= event.target.value.toLocaleLowerCase();

          this.setState(
            ()=>{
              return {searchField:searchBox};
            });
      }}
      />
      {
        filteredMonsters.map((data)=> 
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
