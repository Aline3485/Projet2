/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import { createContext, useState } from "react";

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
export const FormContext = createContext({ initialState });
export default function MyProvider({ children }) {
  const [form, setForm] = useState(initialState);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}
