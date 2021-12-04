import "./SearchBar.scss"
function SearchBar(){
  return(
<form className="search-form" action="action_page.php">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="search-input"
        />
        <button className="search-button" type="submit">
          <i className=" fa fa-search"></i>
        </button>
      </form>
  )
}


  
  export default SearchBar;