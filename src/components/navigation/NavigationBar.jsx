import { Link } from "react-router-dom"


function NavigationBar() {
  return (
   <nav>
  
      <li><Link to="/">Home</Link></li>
      <li><Link to="#about">About</Link></li>
  
   </nav>
  )
}

export default NavigationBar