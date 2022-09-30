import React from "react";
import { useEffect, useState } from "react";
import Member from "../Member/Member";
import "./Team.css";
const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="team-container">
      {members.map((member) => (
        <Member key={member._id} member={member}></Member>
      ))}
    </div>
  );
};

export default Team;
