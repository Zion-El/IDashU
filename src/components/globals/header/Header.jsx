import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.css"
import Logo from "../../../assests/Logo.png"


const Header = () => {

  const [clicked, setClicked] = useState(false)
  const [isActive, setActive] = useState(false)
  // const HandleActive = ({isActive}) =>{
  //   return({
  //           borderBottom: isActive ? "3px solid #FF9D0B" : "none",
  //           borderRight: isActive ? "3px solid #FF9D0B" : "none",
  //           borderRadius: "5px",
  //           backgroundColor: isActive ? '#097659' : 'transparent',
  //           color: isActive ? "white" : "#535457",
  //           transition: ".2s ease-in",
  //           fontWeight: "500",

  //       }
        
  //       )
  //   }
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
      setClicked(false)
      setIsVisible(true);
    };
    const nav =[
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'About',
        url: '/about'
      },
      {
        text: 'Events',
        url: '/events'
      },
      {
        text: 'Donations',
        url: '/donation'
      },
      {
        text: 'Contact Us',
        url: '/contact'
      },
    ]

  return (
    <div className='header container'>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className='nav' style={{ display: isVisible ? 'block' : 'none'}}> 
                <ul className={clicked ? 'small' : 'flex'}>
                    {nav.map((item, index)=> (
                        <li onClick={toggleVisibility} key={index}>
                            <NavLink  className={isActive ? 'nav-Link active': 'nav-link'}  onClick={()=> setActive(!isActive)} to={item.url}>{item.text}</NavLink>
                        </li>
                    ))}
                    <li>
                    <div className="navBtn aux-navBtn">
                      <Link onClick={toggleVisibility} className='linkBtn' to='/signin'>Sign In</Link>
                      <Link onClick={toggleVisibility} className='linkBtn' to='/signup'>Sign Up</Link>
                  </div>
                    </li>
                </ul>
                
            </div>

            <div className="navBtn">
                <Link className='linkBtn signIn' to='/signin'>Sign In</Link>
                <Link className='linkBtn signUp' to='/signup'>Sign Up</Link>
            </div>
            <div className="toggle">
              <button onClick={() => 
                setClicked(!clicked)}>
                  <i className={!clicked ? 'fa fa-bars' : 'fa fa-times'}></i>
              </button>
          </div>
    </div>
  )
}

export default Header