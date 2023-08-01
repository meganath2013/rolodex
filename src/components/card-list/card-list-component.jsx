import { Component } from "react";

class Cardlist extends Component{

    render()
    {
        const { monstersprops} = this.props;
        console.log('render');
        //console.log(monstersprops)
      return(
        <div>
          {
          monstersprops.map((data)=> (      
          <div key={data.id}>
          <h1> {data.name} </h1>
          </div>
          ))
        }
          </div>
);
        
    }
  }

export default Cardlist