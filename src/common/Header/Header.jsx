import React, {useEffect} from "react";
import "./Header.css";

//Método de conexión en modo lectura a RDX.
import { useSelector } from "react-redux";
import { userData } from '../../pages/userSlice';

export const Header = () => {
  //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
  const datosCredencialesRedux = useSelector(userData);

  useEffect(()=>{
    console.log(datosCredencialesRedux);
  })

  return (
    <div className="">
      {datosCredencialesRedux.credentials.token ? (
        <div>
            <div>{datosCredencialesRedux?.credentials?.usuario?.name}</div>
            <div>logout</div>
        </div>
      ) : (
        <div>
            <div>login</div>
            <div>register</div>
        </div>
      )}
    </div>
  );
};
