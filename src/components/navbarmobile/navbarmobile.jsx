/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbarmobile.css";
export const NavBarMobile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="logo">
        <img src="assets/images/logo.jpg" alt="" />
      </div>
      <div onClick={() => handleOpen()} className=" menubar">
        <span className="menu"> </span>
        <span className="menu"> </span>
        <span className="menu"> </span>
      </div>
      <div className={`menu-drawer ${open && "open"}`}>
        <div className="menu-items">
          <div onClick={() => handleOpen()} className="header-nav-mobile">
            <span className="cross-button">x</span>
          </div>
          <div
            className="nav-menubar
          "
          >
            <li>
              <a class="a1" href="#">
                HOME
              </a>
            </li>
            <li>
              <a class="a1" href="#">
                ABOUT
              </a>
            </li>
            <li>
              <a class="a2" href="#">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a class="a2" href="#">
                HIRE ME
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
