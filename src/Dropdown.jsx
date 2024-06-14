import './Dropdown.css'
import React from 'react';
import { useState } from 'react';

function Dropdown(props){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    // const handleSelection = (selection) => {
    //     props.filt(selection);
    //     setOpen(false);
    // }

    return(
        <div className='dropdown-menu'>
            <button onClick={handleOpen}>Sort By</button>
            {open ? (
                <ul className='menu'>
                    <li className='menu-item'>
                        <button onClick={() => props.filt("")}>Now Playing</button>
                    </li>
                    <li className='menu-item'>
                        <button onClick={() => props.filt("popularity.desc")}>Popular</button>
                    </li>
                    <li className='menu-item'>
                        <button onClick={() => props.filt("original_title.asc")}>A-Z</button>
                    </li>
                    <li className='menu-item'>
                        <button onClick={() => props.filt("original_title.desc")}>Z-A</button>
                    </li>
                </ul>
            ): null}
            {/* {open ? (<div>Opened</div>) : <div>Closed</div>} */}
        </div>
    );
}

export default Dropdown