import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar1 = () => {
  const [checkbox, setCheckboxState] = useState(false);

  const handlechange = () => {
    if (checkbox === false) {
      setCheckboxState(true);
    } else {
      setCheckboxState(false);
    }
  };

  AOS.init();

  return (
    <>
      <nav>
        <h3  > American Web Express</h3>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/Dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/team">
            Our Team
          </Link>
          {/* <Link className='nav-link' to='/contact-us'>Contact Us</Link> */}
          {/* <Link className='nav-link' to='/review-us'>Review Us</Link> */}
        </div>

        <div className="nav-toggle">
          <input
            type="checkbox"
            name=""
            id="checkbox"
            checked={checkbox}
            onChange={handlechange}
          />

          <label htmlFor="checkbox">
            {checkbox ? (
              <IoCloseSharp className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          </label>

          {checkbox && (
            <div
              className="nav-links-responsive"
               
              style={{
                right:'0px' , 
                transition: `all 0.5s ease-in-out `, // Add transition for smooth movement
                 
              }}
            >
           
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/Dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/team">
                Our Team
              </Link>
              {/* <Link className='nav-link' to='/contact-us'>Contact Us</Link> */}
              {/* <Link className='nav-link' to='/review-us'>Review Us</Link> */}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
