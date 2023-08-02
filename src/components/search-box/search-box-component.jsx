import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component
{

render()
{
    return(
        <input className={ `search-box ${this.props.classNamepro}`} 
        type='search' 
        placeholder={this.props.placeholderpro} 
        onChange = {this.props.onchangefunction}
        />
    )
}
}

export default SearchBox