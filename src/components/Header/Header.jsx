import react, { Component } from "react";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import "./Header.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    console.log("headers", this.props);
    return (
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header__search-avatar-container">
          <InputField placeholder="search" />

          <div className="header__avatar">
            <Avatar src={AvatarImage} alt={""} />
          </div>

          <Button
            name={"UPLOAD"}
            type="input"
            onClick={this.props.onUploadClick}
          />
        </div>
      </header>
    );
  }
}

export default Header;
