/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <img className="logo" src="assets/images/log.jpg" alt="" />

        <div className="nav">
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
      </ul>
    </div>
  );
};
