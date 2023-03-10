import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';




function MenuSection() {

    const [menuItems, setMenuItems] = useState([]);

    const items = menuItems.filter(item => item.cuisine_type === "American").map(item => <MenuItem key={item.id} food={item} />);
    console.log("ITEMS", items);

    useEffect (() => {
        //map over api data to render menu items to menu section
            // Make a request for a user with a given ID
            axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(function (response) {
            // handle success
            //console.log(response);
            console.log("Access data inside API", response.data);
            setMenuItems(response.data)
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .finally(function () {
            // always executed
            });
    }, []);
    
            

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {items}
        </div>
    )
}

export default MenuSection;