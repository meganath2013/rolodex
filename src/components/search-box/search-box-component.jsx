import { Component } from "react";

class SearchBox extends Component
{

render()
{
    return(
        <input className={this.props.classNamepro} 
        type='search' 
        placeholder={this.props.placeholderpro} 
        onChange = {this.props.onchangefunction}
        />
    )
}
}

export default SearchBox