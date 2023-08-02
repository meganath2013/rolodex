import { Component } from "react"

class CardContainer extends Component{
    render()
    {
    const {id, name } =this.props.monstersprops1
return(
            <div key={id} className="card-container">
            <img src={`https://robohash.org/${id}}?set=set2`} alt={`monster ${name}`} />
            <h1> {name} </h1>
            </div>
        )
    
    }   

    
}


export default CardContainer