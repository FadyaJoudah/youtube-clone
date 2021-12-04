import "./Logo.scss"

function Logo ({href}){
 return(
   <div className="logo-container">
     <a href={href} className="logo-container__logo">
  </a>
   </div>
 )
}

export default Logo;