
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Naturalezas } from './naturalezas';
import { Dominios } from './dominios';
import { Carta } from './carta';
import { useState,useEffect } from 'react';
import 'animate.css';





export const App=()=> {

  const [checkDominio,setCheckDominio]=useState(null)
  const [checkNatura,setCheckNatura]=useState(null)
  const msg="Bienvenido a ZNK!! Combina una naturaleza y un dominio antiguo y descubrirás qué tipo de personaje puede existir en Recuerdos del Zepiro."
  const [mensajeApertura,setMensajeApertura]=useState(msg)
/*
  useEffect(()=>{
    console.log(checkDominio)
  },[checkDominio])
*/
 
  /*
  useEffect(()=>{
    console.log(checkNatura)
  },[checkNatura])
*/

  return (
    
    <>
    <div style={{display:"grid", gridAutoColumns:"1fr",placeItems:"center"}}>
    <div>
      {checkNatura && checkDominio? (<Carta dominio={checkDominio} naturaleza={checkNatura}></Carta>): 
      <p className='mensajeAp animate__animated animate__fadeInTopLeft'>{mensajeApertura}</p>
    }
    </div>
    
    <div style={{margin:"1.5em"}} className='animate__animated animate__fadeInTopLeft'>
     
      <div style={{ display: "flex", placeItems: "center" }}>
        <Naturalezas checkNatura={checkNatura} setCheckNatura={setCheckNatura}></Naturalezas>
      </div>
      <p style={{ color: "aliceblue"}}>Naturaleza</p>
    </div>

    <div style={{margin:"1em"}} className='animate__animated animate__fadeInTopRight'>
      
      <div style={{ display: "flex", placeItems: "center" }}>
        <Dominios checkDominio={checkDominio} setCheckDominio={setCheckDominio}></Dominios>
      </div>
      <p style={{ color: "aliceblue" }}>Dominio antiguo</p>
    </div>
    </div>
   
  </>
     
    
  )
}


