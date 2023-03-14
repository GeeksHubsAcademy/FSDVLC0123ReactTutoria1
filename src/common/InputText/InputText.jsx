
import React from 'react';
import './InputText.css';

//Las props (propiedades), se heredan de padres a hijos y siempre se obtienen en los paréntesis de la función, son
//argumentos de la función, en este caso de InputText
export const InputText = ({className, type, name, placeholder, changeFunction, /*blurFunction*/}) => {
     return (
         <>
            <input
                className={className} 
                type={type}
                name={name}
                placeholder={placeholder}

                // La función onChange se ejecutará mientras se vaya escribiendo contenido dentro del input....
                onChange={(e)=>changeFunction(e)}

                // La funcion onBlur se ejecutará cuando nosotros abandonemos ese input haciendo click fuera de él....
                // onBlur={()=>blurFunction()}            
            />
         </>
     )
}
