import { changeHandler } from "./Home";

const SearchBar = () => {

    return (  
        <>
            Search by author :<input id='search-bar' onChange={ (e) => changeHandler(e) } type="search" />
        </>
    );
}
 
export default SearchBar;
