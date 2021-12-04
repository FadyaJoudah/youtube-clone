import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import "./Header.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const Header = (props) => {
  return (
    <header className="header">
      <Logo href={""} />

      <div className="header__search-avatar-container">
        <InputField placeholder="search" />

        <div className="header__avatar">
          <Avatar src={".../../assets/Images/Mohan-muruge.jpg"} alt={""} />
        </div>
        <Button name={"UPLOAD"} />
      </div>
    </header>
  );
};

export default Header;
