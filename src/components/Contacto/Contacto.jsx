import React, { useState, useEffect } from 'react';
import SectionItem from '../SectionItem/SectionItem';
import imgContacto from '../../images/contacto.png';

const Inicio = () => {
    
    const webDataInit = [
        {
            id: 0,
            title: 'Contacto',
            subtitle: '',
            description: <>
                <p>Es imprescindible ponerse en contacto para venir a probar. </p>
                <p>Tenemos un periodo de prueba de un mes, para lo cual es necesario que rellenes la ficha de inscripción 
                y la hoja de exoneración de responsabilidades: el primero, es un mes para que puedas decidir si esto 
                te gusta y quieres quedarte con nosotros. Para continuar será necesario que te federes con la Federación 
                Madrileña de Patinaje (nosotros te gestionamos todo). La cuota anual dependerá de si te federas con ficha
                 de escuela ya que estas aprendiendo o si te federas como jugador de competición.
                Links a email y rrss.</p>
                <p>Instagram: <a href="https://www.instagram.com/themadriders/">The MadRiders</a></p>
                <p>Facebook: <a href="https://www.facebook.com/madridersrollerderby">MadRiders roller Derby</a></p>
                <p>Email: <a href="mailto:bouts.madriders@gmail.com">bouts.madriders@gmail.com</a></p>
            </>,
            mediaContent: imgContacto,
            facebook: 'https://www.facebook.com/madridersrollerderby'
            
            
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