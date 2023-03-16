import React, {useState, useEffect} from "react";
import { InputText } from "../../common/InputText/InputText";
import { logMe } from "../../services/apiCalls";
import "./Login.css";

//Importo métodos de Redux
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export const Login = () => {

    //Instancio Redux en modo escritura

    const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  })

  const inputHandler = (e) => {

    setCredenciales((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

  }

  const checkError = (e) => {

  }

  const logeame = () => {

    logMe(credenciales)
        .then(
            respuesta => {
                let datosBackend = {
                    token: respuesta.data.token,
                    usuario: respuesta.data.data.user
                }

                console.log(datosBackend);
                //Este es el momento en el que guardo en REDUX
                dispatch(login({credentials: datosBackend}));
            }
        )
        .catch(error => console.log(error))

  }
  return (
    <div className="loginDesign">
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

      <div onClick={()=> logeame()}>LOG ME!</div>
    </div>
  );
};