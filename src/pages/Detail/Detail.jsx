
import React, {useEffect} from 'react';

import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
 
export const Detail = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    useEffect(()=>{
        console.log(detailRedux,"patata")
    },[])


     return (
         <div className=''>
            {detailRedux?.choosenObject?.name}
         </div>
     )
}