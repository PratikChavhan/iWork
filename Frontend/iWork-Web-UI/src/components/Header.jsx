import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import logobgnotag from "../assests/logo-bg-no-tag.png";
import dummyImage from "../assests/dummyUser.png";
import "./css/Header.css";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const fullName = useSelector((state) => state.auth.fullName);
  const userImage = useSelector((state) => state.auth.userImage);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    navigate("/");
    dispatch(authActions.logout());
  };

  const login = () => {
    navigate("/login");
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <nav className="navbar sticky-header">
      <div className="container-header">
        <button
          className="menu-button"
          type="button"
          onClick={toggleDropdown}
          aria-label="Toggle sidebar"
          ref={menuButtonRef}
        >
          <span className="menu-icon"></span>
        </button>
        {!isLoggedIn && (
          <Link to="/">
            <img
              src={logobgnotag}
              className="navbar-logo"
              draggable="false"
              height="70"
              width="150"
              alt="iWork"
            />
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/login">
            <img
              src={logobgnotag}
              className="navbar-logo"
              draggable="false"
              height="70"
              width="150"
              alt="iWork"
            />
          </Link>
        )}
        <div className="navbar-links">
          {isLoggedIn && (
            <>
              <div className="nav-item">
                {userImage ? (
                  <img
                    src={userImage}
                    alt="User Profile"
                    className="user-profile"
                    draggable="false"
                    onClick={() => navigate("/profile")}
                  />
                ) : (
                  <img
                    src={dummyImage}
                    alt="User Profile"
                    className="user-profile"
                    draggable="false"
                    onClick={() => navigate("/profile")}
                  />
                )}
              </div>
              <div className="nav-item">
                <span className="navbar-text">{fullName}</span>
              </div>
              <div className="nav-item">
                <button className="btn-header" onClick={logout}>
                  Logout
                </button>
              </div>
            </>
          )}
          {!isLoggedIn && (
            <>
              <div className="nav-item">
                <button className="btn-header" onClick={login}>
                  Login
                </button>
              </div>
              <div className="nav-item">
                <button className="btn-header" onClick={signup}>
                  SignUp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {dropdownVisible && (
        <>
          <div className="dropdown-menu show" ref={dropdownRef}>
            <Link
              className="dropdown-item"
              to="/about"
              onClick={() => setDropdownVisible(false)}
            >
              About
            </Link>
            <Link
              className="dropdown-item"
              to="/contact"
              onClick={() => setDropdownVisible(false)}
            >
              Contact
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;
