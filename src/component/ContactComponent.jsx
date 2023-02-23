import React from "react";
import ContactList from "./ContactList";
import { useNavigate } from 'react-router-dom';

const ContactComponent = ({ movieInfo }) => {
  const navigate = useNavigate()

  const logout = () => {
    alert("Logout successful")
    navigate("/")
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="listname" >Contact List</h1>
        <button className="button" onClick={logout}>LogOut</button>
      </div>
      <div className="grid grid-three-column">
        {movieInfo.map((curVal, id) => {
          return <ContactList key={id} myData={curVal} />;
        })}
      </div>
    </div>
  );
};

export default ContactComponent;