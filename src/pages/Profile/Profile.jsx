import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  //Importo la parte de Redux correspondiente a las credenciales de usuario, en modo lectura
  const credentialsRdx = useSelector(userData);

  //Instancio el método useNavigate en la constante navigate para poder moverme
  let navigate = useNavigate();

  useEffect(() => {
    //Este useEffect equivale a componentDidMount() en los componentes de clase, es el primero
    //en ejecutarse..., es el que tiene unos corchetes de array vacios como argumento

    if (!credentialsRdx.credentials.token) {
      //No token...home redirect
      navigate("/");
    }
  }, []);

  return <div className="">I am profile</div>;
};
