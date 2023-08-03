import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Cardlist from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

import { useState } from 'react';
const App =()=>  {

const [monsters,setMonsters]=useState([]);
const [searchField, setSearchField] = useState('');
const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => setMonsters(data))
  },[])

 
  console.log(searchField)

  const onChangeSearchBox = (event) =>
  {
    const searchdata = event.target.value.toLocaleLowerCase();
  setSearchField(searchdata);
 }

 useEffect(()=>{
  console.log('2nd effect fired')
  const newfilteredMonsters=monsters.filter(data=>
    {
      return data.name.toLocaleLowerCase().includes(searchField);
    });
    setfilteredMonsters(newfilteredMonsters);

 },[monsters,searchField])


  return (
    <div className="App">
      <SearchBox classNamepro='search-box-app'  placeholderpro = 'search monsters' onchangefunction={onChangeSearchBox}/>
      <Cardlist monstersprops={filteredMonsters}/>
      </div>
      );
    
    
}

export default App;
