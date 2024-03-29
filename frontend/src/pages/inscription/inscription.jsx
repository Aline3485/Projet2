/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-restricted-syntax */

import { SaveContext } from "@components/context/SaveContext";
import React, { useContext } from "react";
import { FormContext } from "../../components/context/FormContext";
import Navbar from "../../Nav-Bar/Navbar";
import "./inscription.css";

// créer un state initial pour le réutiliser
const initialState = {
  lastName: "",
  firstName: "",
  email: "",
  nameEvent: "",
  ville: "",
  codePostal: "",
  rue: "",
  numRue: "",
  latitude: "",
  longitude: "",
  price: "",
  nbrVisiteur: "",
  date: "",
  horaire: "",
  description: "",
};

function Inscription() {
  // utilisation du contexte
  const { form, setForm } = useContext(FormContext);
  console.log(form);
  const { save, setSave } = useContext(SaveContext);
  console.log("reset", save);

  function handleChange(event) {
    // destructuration de event.target.value + event.target.name
    const { value, name } = event.target;
    setForm({
      ...form,
      // [name] correspond au champ <input  name="lastname"/>
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Votre formulaire a bien été envoyé !");
    setSave(form);
    setForm(initialState);
  };

  return (
    <div>
      <div className=" barbody">
        <Navbar />
        <div className="entete">
          <h1>Crée ton propre événement !</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formulaire">
          <div className="case">
            <label>Nom</label>
            <input
              className="inputInscription"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Prénom</label>
            <input
              className="inputInscription"
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Votre email</label>
            <input
              className="inputInscription"
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Nom de votre événement</label>
            <input
              className="inputInscription"
              type="text"
              name="nameEvent"
              value={form.nameEvent}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Ville</label>
            <input
              className="inputInscription"
              type="text"
              name="ville"
              value={form.ville}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Code postal</label>
            <input
              className="inputInscription"
              type="text"
              name="codePostal"
              value={form.codePostal}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Rue</label>
            <input
              className="inputInscription"
              type="text"
              name="rue"
              value={form.rue}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Numero de rue</label>
            <input
              className="inputInscription"
              type="text"
              name="numRue"
              value={form.numRue}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="formulaire">
          <div className="case">
            <label>Latitude</label>
            <input
              className="inputInscription"
              type="text"
              name="latitude"
              value={form.latitude}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Longitude</label>
            <input
              className="inputInscription"
              type="text"
              name="longitude"
              value={form.longitude}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="formulaire">
          <div className="case">
            <label>Prix</label>
            <input
              className="inputInscription"
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Nbr de visiteurs Max</label>
            <input
              className="inputInscription"
              type="number"
              name="nbrVisiteur"
              value={form.nbrVisiteur}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Date</label>
            <input
              className="inputInscription"
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className="case">
            <label>Horaire</label>
            <input
              className="inputInscription"
              type="text"
              name="horaire"
              value={form.horaire}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="case2">
          <label>Description (Max 500 caractères)</label>
          <textarea
            id="description"
            maxLength={500}
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Inscription;
