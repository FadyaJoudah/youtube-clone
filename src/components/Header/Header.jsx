import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";
import UploadButton from "../UploadButton/UploadButton";


const Header = (props) => {
  return (
    <header className="header">
      <Logo href={""}/>
      <div className="search-avatar-container"> 
      <SearchBar/>
      <Avatar src={"../../assets/Images/Mohan-muruge.jpg" } alt={''}/>
      </div>
      <UploadButton/>
    </header>
  );
};

export default Header;
