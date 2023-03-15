import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { validate } from "../../helpers/useful";
import "./Home.css";

export const Home = () => {
  // 1 - Primero siempre se comprueba el valor de los hooks
  const [credenciales, setCredenciales] = useState({
    name: {
      value: "",
      validated: false,
    },
    surname: {
      value: "",
      validated: false,
    },
    email: {
      value: "",
      validated: false,
    },
  });

  //Este hook consistirá en el lugar de guardado de mensajes de error, a priori estarán en comillas vacías
  const [credencialesError, setCredencialesError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  const inputHandler = (e) => {
    //inputHandler será la función adecuada para controlar el contenido que estamos introduciendo
    //en los inputs, su forma de manejarlo será actualizar las partes correspondientes del hook según el input
    //en el que estemos escribiendo

    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name.value]: e.target.value,
      //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
      //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
      //EN ESE MOMENTO a la parte correspondiente del Hook.
    }));
  };

  //Funciones de ciclo de vida del componente, conocidas como useEffect

  // 3 - Ejecutamos los useEffect

  useEffect(() => {
    //Este useEffect se va a ejecutar SIEMPRE que hayan cambios en el hook credenciales
    // console.log("Credenciales ahora vale......", credenciales);

    console.log(credenciales);

    for (let errorFound in credenciales) {
      console.log(credenciales[errorFound].validated);
      if (credenciales[errorFound].validated === false) {
        return;
      }
    }

    setRegisterAct(true);
  }, [credenciales]);

  //Funcion de validacion

  const checkError = (e) => {
    //La función checkError es la función que valida principalmente todo, primero
    //declaramos error como comillas vacías, presuponiendo que cada vez que esto se compruebe, 
    //no va a haber un error


    let error = "";

    //llamamos a la función validate pasándole 3 parámetros, el nombre del campo a evaluar, su contenido y si es requerido o no
    const validation = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    //guardamos en la variable error el mensaje de vuelta que pueden ser comillas vacías si no hay un error o un string largo si 
    //hemos encontrado un error
    error = validation.message;

    //PARTE QUE NO FUNCIONA//

    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: validation.validated,
    }));

    ///////////////////////////

    //Aqui seteamos el hook de los errores

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const fakeRegister = () => {
    console.log("victoria");
  };

  // 2 - Se mira en la zona de renderizado...
  return (
    <div className="homeDesign">
      <InputText
        className={
          credencialesError.nameError === ""
            ? "inputBasicDesign"
            : "inputBasicDesign inputErrorDesign"
        }
        type={"text"}
        name={"name"}
        placeholder={"nombre..."}
        required={true}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e) => checkError(e)}
      />
      <div>{credencialesError.nameError}</div>
      <InputText
        // Cada input escoge su diseño en base a si hay un error o no en el hook de errores

        className={
          credencialesError.surnameError === ""
            ? "inputBasicDesign"
            : "inputBasicDesign inputErrorDesign"
        }
        type={"text"}
        name={"surname"}
        placeholder={"apellido..."}
        required={false}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e) => checkError(e)}
      />
      <div>{credencialesError.surnameError}</div>
      <InputText
        // Cada input escoge su diseño en base a si hay un error o no en el hook de errores
        className={
          credencialesError.emailError === ""
            ? "inputBasicDesign"
            : "inputBasicDesign inputErrorDesign"
        }
        type={"email"}
        name={"email"}
        placeholder={"email..."}
        required={true}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e) => checkError(e)}
      />
      <div>{credencialesError.emailError}</div>

      <div
        className={
          registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
        }
        onClick={
          registerAct
            ? () => {
                fakeRegister();
              }
            : () => {}
        }
      >
        Register me!
      </div>
    </div>
  );
};
