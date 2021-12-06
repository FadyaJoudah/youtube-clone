import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import "./Header.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <Logo href={""} />

      <div className="header__search-avatar-container">
        <InputField placeholder="search" />

        <div className="header__avatar">
          <Avatar src={AvatarImage} alt={""} />
        </div>
        <Button name={"UPLOAD"} type="input" />
      </div>
    </header>
  );
};

export default Header;
