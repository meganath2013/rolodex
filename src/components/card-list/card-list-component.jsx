import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'
import CardContainer from "./card-list container";
const Cardlist =(props)=>{

        const { monstersprops} = props;
        console.log('render');
        //console.log(monstersprops)

      return(
        <div className='card-list'>
        {
        monstersprops.map((data)=>{ 
          return( <CardContainer key={data.id} monstersprops1={data}/>
          );
        })}
        </div>
      )

        
    }
  

export default Cardlist