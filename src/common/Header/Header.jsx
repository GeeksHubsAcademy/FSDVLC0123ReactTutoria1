import React, { useEffect, useState } from "react";
import "./Header.css";

//Método de conexión en modo lectura a RDX.
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { InputText } from "../InputText/InputText";
import { bringMoviesByTitle } from "../../services/apiCalls";

export const Header = () => {
  //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
  const datosCredencialesRedux = useSelector(userData);

  const navigate = useNavigate();
  
  const [criteria, setCriteria] = useState("");

  useEffect(() => {

    if(criteria !== ""){

      //Búsqueda con sistema DEBOUNCE

      const bring = setTimeout(()=>{

        bringMoviesByTitle(criteria)
        .then(
          moviesByTitleResult => {
            console.log(moviesByTitleResult);
          }
        )
        .catch(error => console.log(error))
      },500);
      
      
      return () => clearTimeout(bring);
    }
    
  },[criteria]);

  const checkError = () => {
    
  }

  const inputHandler = (e) => {
    setCriteria(e.target.value);
  }

  return (
    <div className="">
      {datosCredencialesRedux.credentials.token ? (
        <div>
          <div>{datosCredencialesRedux?.credentials?.usuario?.name}</div>
          <div>logout</div>
          <div onClick={() => navigate("/users")}>users</div>
          <InputText
            className={"inputFeoLogin"}
            type={"text"}
            name={"criteria"}
            placeholder={""}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
        </div>
      ) : (
        <div>
          <div>login</div>
          <div>register</div>
          <InputText
            className={"inputFeoLogin"}
            type={"text"}
            name={"criteria"}
            placeholder={""}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
        </div>
      )}
    </div>
  );
};
