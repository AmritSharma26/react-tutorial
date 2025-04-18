import React from "react";
import "./UserCard.css";

const placeholderImage =
    "https://placehold.co/400x400/8b5cf6/FFFFFF?text=Test+Image";

const UserCard = function (props) {
    console.log(props);
    return (
        <div className="user-container" style={props.style}>
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={props.image} alt={props.name} />
            <p id="user-desc">{props.desc}</p>
        </div>
    );
};
export default UserCard;
