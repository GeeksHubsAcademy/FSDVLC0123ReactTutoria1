
import React, {useState, useEffect} from 'react'
import './Users.css';

import { bringUsers } from '../../services/apiCalls';

//Conexion a REDUX
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
 
export const Users = () => {

    const [users, setUsers] = useState([]);

    const ReduxCredentials = useSelector(userData);

    useEffect(()=>{

        if(users.length === 0){

            bringUsers(ReduxCredentials.credentials.token)
                .then(
                    result => {

                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setUsers(result.data.data)
                    }
                )
                .catch(error => console.log(error));
        }

    },[users])

    const selected = (persona) => {
        console.log(persona);
    }

     return (
         <div className='usersDesign'>

            {  users.length > 0 ? 

                (<div>

                    {
                        users.map(
                            persona => {
                                return (
                                    <div 
                                        onClick={()=>selected(persona)} 
                                        key={persona.id}>

                                        {persona.name}
                                        
                                    </div>
                                )
                            }
                        )
                    }


                </div>)

                : 

                (<div>ESTAN VINIENDO</div>)

            }

         </div>
     )
}