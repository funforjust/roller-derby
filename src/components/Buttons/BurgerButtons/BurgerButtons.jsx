import React, { useState} from 'react';

//import './BurgerButtons.scss'
import styled from 'styled-components';
import Menu from '../BurgerButtons/Menu';
import BurgerButton from './BurgerButton'

export default function BurgerButtons() {
    const [open, setOpen] = useState(true);
    
    return (
        <>
            <BurgerButton open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />   
        </>
    )
}
    


    

    
