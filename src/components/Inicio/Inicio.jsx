import React, { useState } from 'react';
import SectionItem from '../SectionItem/SectionItem';
import Header from '../Header/Header';

const Inicio = () => {
    
    const webDataInit = [
        {
            id: 0,
            title: '¿Qué es Roller Derby?',
            subtitle: '',
            description: `El roller derby es un deporte de contacto, velocidad y 
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
            La gran mayoría de los equipos juegan una variante del roller derby llamada 
            Flat Track Roller Derby (Roller Derby de Pista Plana), bajo reglamentación 
            de WFTDA, pero existen otras variantes: USARS, MADE, Renegade, WORLD SKATE`,
            mediaContent: 'src/image'
        },
        {
            id: 1,
            title: '¿Quienes somos?',
            subtitle: '',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam interdum ipsum at est hendrerit molestie. Donec quam lorem, 
            ullamcorper sed hendrerit id, cursus non lacus. Sed turpis nisl, ornare in 
            egestas condimentum, mattis nec nisl. In placerat tincidunt augue eget pellentesque.
             Donec id dignissim mauris, sed tristique ante. Vivamus ipsum urna, fringilla in 
             lorem sed, consectetur vehicula nisl. Phasellus vitae dolor libero. Fusce pharetra 
             convallis ex, pulvinar suscipit diam viverra nec.`,
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
