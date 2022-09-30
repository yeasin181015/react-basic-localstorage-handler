import React from "react";
import "./Member.css";
import { addtodb, removePlayer } from "../../utilities/common/function.js";

const Member = (props) => {
  const { _id, name, email, phone } = props.member;

  const addToTeam = (id) => {
    addtodb(id);
  };

  const deleteFromTeam = (id) => {
    removePlayer(id);
  };

  return (
    <div className="member-div">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Contact: {phone}</p>
      <p className="btn-div">
        <button onClick={() => addToTeam(_id)}>Add to team</button>
        <button onClick={() => deleteFromTeam(_id)}>Remove player</button>
      </p>
    </div>
  );
};

export default Member;
