
import './search-box.styles.css'
const SearchBox =({classNamepro, placeholderpro , onchangefunction })=> 
{
    //const {classNamepro, placeholderpro , onchangefunction } =props;
    return(
        <input className={ `search-box ${classNamepro}`} 
        type='search' 
        placeholder={placeholderpro} 
        onChange = {onchangefunction}
        />
    )
}
export default SearchBox