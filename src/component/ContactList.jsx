import React from "react";

const ContactList = ({ myData }) => {
  const { id, name, image } = myData;

  return (
    <div className="contact">
      <div className="contact-info">
        <p className="contact-id">{id}</p>
        <p className="contact-name">{name}</p>
        <img className="profile" src={image} alt="profile" />
      </div>
    </div>
  );
};

export default ContactList;