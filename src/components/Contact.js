// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({data}) => {
    const { name, email, phone, photo } = data;
    return (
        <div className="Contact">
            <div className="Photo">
                <img key={photo} src={photo} alt={name} />
            </div>
            <div className="Data">
                    <h2 key={name} className="Data">{name}</h2>
                    <p key={phone} className="Data">{phone}</p>
                    <p key={email} className="Data">{email}</p>
            </div>
        </div>
    )
}

export default Contact;
