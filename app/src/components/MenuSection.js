import React, { useState } from "react";
import MenuItem from './MenuItem';
import axios from 'axios';



function MenuSection() {
    return (
        //map over api data to render menu items to menu section
        <MenuItem />
    )
}

export default MenuSection;