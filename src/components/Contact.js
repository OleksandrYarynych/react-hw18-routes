import React from "react";

export default function Contact({ firstName, lastName, phone }) {
  return (
    <div className="contact">
      <span className="contact-name">{firstName}</span>
      <span className="contact-name">{lastName}</span>
      <p className="contact-number">{phone}</p>
    </div>
  );
}
