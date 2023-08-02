import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'
import CardContainer from "./card-list container";
class Cardlist extends Component{

    render()
    {
        const { monstersprops} = this.props;
        console.log('render');
        //console.log(monstersprops)

      return(
        <div className='card-list'>
        {
        monstersprops.map((data)=>{ 
          return( <CardContainer monstersprops1={data}/>
          );
        })}
        </div>
      )

        
    }
  }

export default Cardlist