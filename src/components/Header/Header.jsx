import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Logo href={""}/>
      <Avatar src={"../../assets/Images/Mohan-muruge.jpg" } alt={''}/>
    </header>
  );
};

export default Header;
