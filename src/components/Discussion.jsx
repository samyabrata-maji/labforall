import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../assets/css/Discussion.css";

const rooms = [
  { id: "general", title: "๐ฌ General ๐ฌ" },
  { id: "biology", title: "๐ฆ  Biology ๐ฆ " },
  { id: "chemistry", title: "๐งช Chemistry ๐งช" },
  { id: "physics", title: "๐ Physics ๐" },
];

const Discussion = () => {
  const navigate = useNavigate();

  return (
    <div className="discussion">
      <h2>Choose a Room</h2>
      <ul className="room-list">
        {rooms.map((room) => (
          <li
            key={room.id}
            onClick={() => {
              navigate(room.id);
            }}
          >
            <span to={`/discussion/${room.id}`}>{room.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discussion;
