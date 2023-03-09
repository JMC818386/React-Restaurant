import MenuItem from './MenuItem';
import axios from 'axios';



function MenuSection() {
    return (
        //map over api data to render menu items to menu section
        <div className="d-flex justify-content-center">
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    )
}

export default MenuSection;