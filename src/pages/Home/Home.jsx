import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { validate } from "../../helpers/useful";
import "./Home.css";

export const Home = () => {
  // 1 - Primero siempre se comprueba el valor de los hooks
  const [credenciales, setCredenciales] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    nameVali: false,
    surnameVali: false,
    emailVali: false
  })

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
      [e.target.name]: e.target.value,
      //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
      //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
      //EN ESE MOMENTO a la parte correspondiente del Hook.
    }));
  };

  //Funciones de ciclo de vida del componente, conocidas como useEffect

  // 3 - Ejecutamos los useEffect

  useEffect(() => {
 

    for(let error in credencialesError){
      if(credencialesError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    
    for(let validated in valiCredenciales){
      if(valiCredenciales[validated] === false){
        setRegisterAct(false);
        return;
      }
    }
    //si llegamos a este punto es porque no hemos encontrado ningún error en el for in que recorre el hook de errores
    setRegisterAct(true);
  });

  //Funcion de validacion

  const checkError = (e) => {


    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;

    //Aqui seteamos el hook de las validaciones
    console.log("asdfasdf",valiCredenciales)

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

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
