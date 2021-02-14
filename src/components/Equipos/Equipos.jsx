import React, { useState } from 'react';
import SectionItem from '../SectionItem/SectionItem';
import '../Equipos/Equipos.scss'

const Equipos = () => {
    
    const webDataInit = [
        {
            id: 0,
            title: 'Equipos',
            subtitle: 'EQUIPO1, EQUIPO2, EQUIPO3',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam interdum ipsum at est hendrerit molestie. Donec quam lorem, 
            ullamcorper sed hendrerit id, cursus non lacus. Sed turpis nisl, ornare in 
            egestas condimentum, mattis nec nisl. In placerat tincidunt augue eget pellentesque.
             Donec id dignissim mauris, sed tristique ante. Vivamus ipsum urna, fringilla in 
             lorem sed, consectetur vehicula nisl. Phasellus vitae dolor libero. Fusce pharetra 
             convallis ex, pulvinar suscipit diam viverra nec.`,
            mediaContent: 'src/image'
        },
    ];
    const [webData, setWebData] =  useState(webDataInit);

    
    return (
        <>
            <SectionItem webDataItem={webData[0]} key={webData.id} ></SectionItem>
            <div className="espacio-blanco"></div>
        </>

    )
}

export default Equipos
