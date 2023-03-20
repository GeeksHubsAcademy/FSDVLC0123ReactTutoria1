
import React, {useState, useEffect} from 'react'
import './Users.css';

import { bringUsers } from '../../services/apiCalls';

//Conexion a REDUX
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';

import { useNavigate } from 'react-router-dom';
 
export const Users = () => {

    const [users, setUsers] = useState([]);

    const ReduxCredentials = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(users.length === 0){

            console.log(ReduxCredentials.credentials?.token)

            bringUsers(ReduxCredentials.credentials?.token)
                .then(
                    result => {
                        console.log("xe viraaaaaa", result);
                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setUsers(result.data.data)
                    }
                )
                .catch(error => console.log(error));
        }

    },[users])

    const selected = (persona) => {
        
        //Primero guardo en RDX los datos escogidos...

        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/detail");
        },500)
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
                                        key={persona._id}>

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