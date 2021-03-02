import React, { useState } from 'react';
import SectionItem from '../SectionItem/SectionItem';
import '../Equipos/Equipos.scss'
import imgEquipos from '../../images/equipo.png';

const Equipos = () => {
    
    const webDataInit = [
        {
            id: 0,
            title: 'Equipos',
            description: <>
                <p>MadRiders nació en el año 2015 como equipo masculino de Roller Derby en la ciudad de Madrid.</p>
                <p>Actualmente bajo reglamento WFTDA tenemos equipo femenino y  mixto, inscrito en MRDA (Man&apos;s Roller Derby Association).
                En eventos organizados por la Federación de Patinaje también contamos con equipo masculino para esta modalidad. </p>
                <p>Bajo reglamento WS contamos con equipo femenino y masculino.</p>
            </>,
            subtitle: '',
            mediaContent: imgEquipos
        },
    ];
    const [webData, setWebData] =  useState(webDataInit);

    
    return (
        <>
            <SectionItem webDataItem={webData[0]} key={webData.id} ></SectionItem>
        </>

    )
}

export default Equipos
