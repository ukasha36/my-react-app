 
import   { useState } from 'react'
import { Link } from 'react-router-dom'
 

export default function NavBar() {

  const [checkboxState, setCheckboxState] = useState(false)

  const handleCheckboxState = () => {

    if(checkboxState == false){
      setCheckboxState(true)
    } else {
      setCheckboxState(false);
    }

  }

  return (
    <nav>
        <h3 className='brand-name'>FOODnFOODS</h3>
        <div className='nav-links'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/Dashboard'>Dashboard</Link>
            <Link className='nav-link' to='/team'>Our Team</Link>
            {/* <Link className='nav-link' to='/contact-us'>Contact Us</Link> */}
            {/* <Link className='nav-link' to='/review-us'>Review Us</Link> */}
        </div>

        <div className='nav-toogle'>

          <input type="checkbox" id="checkbox" checked={checkboxState} onChange={handleCheckboxState} />
          
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1" />
            
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
          </label> 
          
          <div className='nav-links-responsive' onClick={handleCheckboxState} >
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/Dashboard'>Dashboard</Link>
            <Link className='nav-link' to='/team'>Our Team</Link>
            {/* <Link className='nav-link' to='/contact-us'>Contact Us</Link> */}
            {/* <Link className='nav-link' to='/review-us'>Review Us</Link> */}
          </div> 
        

        </div>

    </nav>
  )
}