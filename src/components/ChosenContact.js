import React from "react";
import contactsArr from "../dataFiles/contactsArr";
import { useParams } from 'react-router-dom'

export default function ChosenContact(props) {
  const { num } = useParams();
  const user = contactsArr.find((c) => {
    if (c.phone.toString() === num.slice(1)) return true;
  });
  console.log(user);
  return (
    <div className="wrapper-info">
      <div className="info">
        <p>
          <span>first name</span>
          <span className="info-text">{user.firstName}</span>
        </p>
        <p>
          <span>last name</span>
          <span className="info-text">{user.lastName}</span>
        </p>
        <p>
          <span>phone number</span>
          <span className="info-text">{user.phone}</span>
        </p>
        <p>
          <span>gender</span>
          <span className="info-text">{user?.gender || "not said"}</span>
        </p>
      </div>
    </div>
  );
}
