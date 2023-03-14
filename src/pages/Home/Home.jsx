
import React, {useState, useEffect} from 'react';
import { InputText } from '../../common/InputText/InputText';
import "./Home.css";

export const Home = () => {

    // 1 - Primero siempre se comprueba el valor de los hooks
    const [credenciales, setCredenciales] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const inputHandler = (e) => {

        //inputHandler será la función adecuada para controlar el contenido que estamos introduciendo
        //en los inputs, su forma de manejarlo será actualizar las partes correspondientes del hook según el input
        //en el que estemos escribiendo

        setCredenciales((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
            //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
            //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
            //EN ESE MOMENTO a la parte correspondiente del Hook.
        }));

    }

    //Funciones de ciclo de vida del componente, conocidas como useEffect

    // 3 - Ejecutamos los useEffect

    useEffect(()=>{
        //Este useEffect se va a ejecutar SIEMPRE que hayan cambios en el hook credenciales
        console.log("Credenciales ahora vale......", credenciales);
    }, [credenciales]);

    // 2 - Se mira en la zona de renderizado...
    return (
        <div className="homeDesign">
            <InputText
                className = {"inputBasicDesign"}
                type = {"text"}
                name = {"name"}
                placeholder = {"nombre..."}
                changeFunction = {(e)=> inputHandler(e)}
                // blurFunction = {}
            />
            <InputText
                className = {"inputBasicDesign"}
                type = {"text"}
                name = {"surname"}
                placeholder = {"apellido..."}
                changeFunction = {(e)=> inputHandler(e)}
                // blurFunction = {}
            />
            <InputText
                className = {"inputBasicDesign"}
                type = {"email"}
                name = {"email"}
                placeholder = {"email..."}
                changeFunction = {(e)=> inputHandler(e)}
                // blurFunction = {}
            />
        </div>
    )
}