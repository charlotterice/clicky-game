import React from "react";
import "./Header.css";
const Header = props => (
    <div className = "header">
        <div className = "title">{props.children} </div>
        <div className = "score">Score: {props.score} Highest Score: {props.highestscore}</div>
    </div>
);

export default Header;