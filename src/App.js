import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Cardlist from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

class App extends Component {

  constructor(){
    super();
    this.state=
    {
      monsters:[],
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

  onChangeSearchBox = (event) =>
  {
    const searchdata = event.target.value.toLocaleLowerCase();
     this.setState(
       ()=>{
         return {searchField:searchdata};
       });
 }



  render(){   
    const {monsters, searchField} =this.state
    const {onChangeSearchBox} =this
    const filteredMonsters=monsters.filter(data=>
      {
        return data.name.toLocaleLowerCase().includes(searchField);
      });

  return (
    <div className="App">
      <SearchBox classNamepro='search-box-app'  placeholderpro = 'search monsters' onchangefunction={onChangeSearchBox}/>
      <Cardlist monstersprops={filteredMonsters}/>
      </div>
      );
    }
  }

export default App;
