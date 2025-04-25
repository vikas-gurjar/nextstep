import navlogo from "../assets/navlogo.svg"; {/* logo*/}
import { FaSearch } from "react-icons/fa";   {/* search icon*/}
import { CiSettings } from "react-icons/ci"; {/* settings icon*/}
import { RiAccountCircleFill } from "react-icons/ri"; {/* account icon*/}
import { AiOutlineBell } from "react-icons/ai"; {/* notification icon*/}
import "./Navbar.css"; {/* CSS file for styling */}

function Navbar() {

    return(
        <header>
            <h1>Navigation Bar</h1>
            <nav className="navbar">
                <div className="logo">
                    <img
                        src={navlogo}
                        alt="Your Company Logo"
                        width="30"
                        height="30"
                        className="logo-image"
                    />
                    <span className="white">Next<span className="blue">Step</span></span>
                </div>
                <div className="search-bar">
                    <input type="text" />
                    <button type="button"><FaSearch 
                            alt="search icon"
                        />
                    </button>
                </div>
                <div className="nav-right-icons">
                    <a className="setting-icon"><CiSettings color="#00D8DD" /></a>
                    <a className="notification-icon"><AiOutlineBell color="#00FFFF"/></a>
                    <a className="profile-icon"><RiAccountCircleFill color="#00FFFF"/></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar