import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { logMe } from "../../services/apiCalls";
import "./Login.css";

//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  //Instancio Redux en modo escritura y lectura

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      //Si No token...home redirect
      navigate("/");
    }
  }, []);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {};

  const logeame = () => {
    logMe(credenciales)
      .then((respuesta) => {
        let datosBackend = {
          token: respuesta.data.token,
          usuario: respuesta.data.data.user,
        };

        //Este es el momento en el que guardo en REDUX
        dispatch(login({ credentials: datosBackend }));

        //Una vez nos hemos logeado...mostramos mensaje de bienvenida...
        setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);

        //Redirección a Home

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="loginDesign">
      {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div>
          <InputText
            // className={
            //   credencialesError.nameError === ""
            //     ? "inputBasicDesign"
            //     : "inputBasicDesign inputErrorDesign"
            // }
            className={"inputFeoLogin"}
            type={"email"}
            name={"email"}
            placeholder={"email..."}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
          <InputText
            // className={
            //   credencialesError.nameError === ""
            //     ? "inputBasicDesign"
            //     : "inputBasicDesign inputErrorDesign"
            // }
            className={"inputFeoLogin"}
            type={"password"}
            name={"password"}
            placeholder={""}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />

          <div onClick={() => logeame()}>LOG ME!</div>
        </div>
      )}
    </div>
  );
};
