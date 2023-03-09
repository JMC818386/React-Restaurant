import MenuItem from './MenuItem';
import axios from 'axios';



function MenuSection() {
            //map over api data to render menu items to menu section
            // Make a request for a user with a given ID
            axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .finally(function () {
            // always executed
            });
    return (


        <div className="d-flex justify-content-center">
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    )
}

export default MenuSection;