import { useEffect, useState } from 'react';
import "animate.css"





export const Dominios=({checkDominio,setCheckDominio})=> {
     

    const selecionado=()=>{

        setCheckDominio(event.target.value)
    }

 
 
    return (
        <>
        <button className={`btnNatura guerrero ${checkDominio === 'guerrero' ? 'selected animate__animated animate__flip' : ''}`} value="guerrero" onClick={selecionado}>Guerrero</button>
        <button className={`btnNatura mArmas ${checkDominio === 'mArmas' ? 'selected animate__animated animate__flip' : ''}`} value="mArmas" onClick={selecionado}>Maestro de armas</button>
        <button className={`btnNatura mSombras ${checkDominio === 'mSombras' ? 'selected animate__animated animate__flip' : ''}`} value="mSombras" onClick={selecionado}>Maestro de sombras</button>
        <button className={`btnNatura mEspiritual ${checkDominio === 'mEspiritual' ? 'selected animate__animated animate__flip' : ''}`} value="mEspiritual" onClick={selecionado}>Maestro espiritual</button>
        <button className={`btnNatura hechicero ${checkDominio === 'hechicero' ? 'selected animate__animated animate__flip' : ''}`} value="hechicero" onClick={selecionado}>Hehcicero</button>
        <button className={`btnNatura cBakemono ${checkDominio === 'cBakemono' ? 'selected animate__animated animate__flip' : ''}`} value="cBakemono" onClick={selecionado}>Criador Bakemono</button>
        </>
  )
}

