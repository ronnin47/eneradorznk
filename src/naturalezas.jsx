import { useEffect, useState } from 'react';
import "animate.css"






export const Naturalezas=({checkNatura,setCheckNatura})=> {
    
     

    const selecionado=()=>{
        setCheckNatura(event.target.value)
    }
   
    return (
        <>
        <button className={`btnNatura bueno ${checkNatura === 'bueno' ? 'selected animate__animated animate__flip' : ''}`} value="bueno" onClick={selecionado}>Bueno</button>
        <button className={`btnNatura neutral ${checkNatura === 'neutral' ? 'selected animate__animated animate__flip' : ''}`} value="neutral" onClick={selecionado}>Neutral</button>
        <button className={`btnNatura caotico ${checkNatura === 'caotico' ? 'selected animate__animated animate__flip' : ''}`} value="caotico" onClick={selecionado}>Caotico</button>
        <button className={`btnNatura oscuro ${checkNatura === 'oscuro' ? 'selected animate__animated animate__flip' : ''}`} value="oscuro" onClick={selecionado}>Oscuro</button>
        </>
  )
}

