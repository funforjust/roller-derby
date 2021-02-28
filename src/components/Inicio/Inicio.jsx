import React, { useState } from 'react';
import SectionItem from '../SectionItem/SectionItem';
import Header from '../Header/Header';

const Inicio = () => {
    
    const webDataInit = [
        {
            id: 0,
            title: '¿Qué es Roller Derby?',
            subtitle: '',
            description: <div><p>El roller derby es un deporte de contacto, velocidad y 
            estrategia originario de EE. UU. La mecánica del juego se basa en una 
            carrera sobre patines tradicionales alrededor de una pista ovalada en 
            sentido contrario a las agujas del reloj, donde 2 equipos, de 5 jugadores 
            cada uno en pista, 1 anotador (jammer, fácilmente identificable por la estrella 
                del cover de su casco) y 4 bloqueadores, compiten entre sí con el objetivo 
                de acumular la mayor cantidad de puntos posibles a medida que el anotador va 
                rebasando a los jugadores defensores que tienen permitido impedir y 
                obstaculizar su paso mediante el contacto físico reglamentado. El objetivo
                 del juego es anotar más puntos que el equipo contrario, siendo el ganador 
                 el equipo con más puntos al final del partido.
                 </p>
                 <p>
            La gran mayoría de los equipos juegan una variante del roller derby llamada 
            Flat Track Roller Derby (Roller Derby de Pista Plana), bajo reglamentación 
            de WFTDA, pero existen otras variantes: USARS, MADE, Renegade, WORLD SKATE
            </p>
            </div>,
            mediaContent: 'src/image'
        },
        {
            id: 1,
            title: '¿Quienes somos?',
            subtitle: '',
            description: <p>MadRiders Roller Derby es un club deportivo elemental, autogestionado, formado por patinadores-as, árbitros y otros colaboradores, en el que el trabajo voluntario de todos hace que crezcamos y mejoremos cada día.
            Entrenamos en el polideportivo de Los Rosales (Villaverde Bajo) los Martes y Jueves (20:30 - 22:00) y Domingos (10:00-14:00). El Roller Derby tiene dos variantes de juego el que se rige por el reglamento WFTDA y el reglamento World Skate. Puedes descargar las reglas aqui:
            
            <p><a href="https://static.wftda.com/rules/wftda-rules-spanish-femenino.pdf">WFTDA Rules Spanish Femenino</a></p>
            <p><a href="http://www.worldskate.org/roller-derby/about/regulations.html">Regulations</a></p>
            
            Si quieres venir a probar ponte en contacto con nosotros. Puedes encontrar diversas formas de contacto <a href="./contacto">aquí</a></p>,
            mediaContent: 'src/image'

        }
    ];
    const [webData, setWebData] =  useState(webDataInit);

    
    return (
        <>
            
            <SectionItem webDataItem={webData[0]} key={webData.id} ></SectionItem>
            <SectionItem webDataItem={webData[1]} key={webData.id}></SectionItem>
        </>
    )
}

export default Inicio
