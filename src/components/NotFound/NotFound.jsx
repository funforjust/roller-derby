import React, { useState } from 'react';
import SectionItem from '../SectionItem/SectionItem';


const Inicio = () => {
    
    const webDataInit = [
        {
            id: 0,
            title: '404',
            subtitle: '',
            description: `Not found`,
            mediaContent: 'src/image'
        }
    ];
    const [webData, setWebData] =  useState(webDataInit);

    
    return (
        <>
            <SectionItem webDataItem={webData[0]} key={webData.id} ></SectionItem>
        </>
    )
}

export default Inicio