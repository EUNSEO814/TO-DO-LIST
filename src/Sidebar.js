// import { faCircle, faComment } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import {
  MdRestoreFromTrash,
  MdLabelImportant,
  MdOutlineFormatListBulleted,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Profile />
      <Search />
      <div className="linkList">
        <div className="iconAndName">
          <Link to="/All" className="a">
            <MdOutlineFormatListBulleted size="25" color="#E7F6F2" />
            <span className="pageName">All</span>
          </Link>
        </div>
        <div className="iconAndName">
          <Link to="/Important" className="a">
            <MdLabelImportant size="25" color="#E7F6F2" />
            <span className="pageName">Important</span>
          </Link>
        </div>
        <div className="iconAndName">
          <Link to="/Completed" className="a">
            <MdOutlineCheckCircleOutline size="25" color="#E7F6F2" />
            <span className="pageName">Completed</span>
          </Link>
        </div>
        <div className="iconAndName">
          <Link to="/Trash" className="a">
            <MdRestoreFromTrash size="25" color="#E7F6F2" />
            <span className="pageName">Trash</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
