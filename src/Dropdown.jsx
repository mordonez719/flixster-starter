import './Dropdown.css'
import React from 'react';
import { useState } from 'react';

function Dropdown(props){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };


    return(
        <div className='dropdown-menu'>
            <div id="default-drop" onClick={handleOpen}>Sort By</div>
            {open ? (
                <section className='menu'>
                    <div className='menu-item'>
                        <div onClick={() => props.filt("")}>Now Playing</div>
                    </div>
                    <div className='menu-item'>
                        <div onClick={() => props.filt("popularity.desc")}>Popular</div>
                    </div>
                    <div className='menu-item'>
                        <div onClick={() => props.filt("original_title.asc")}>A-Z</div>
                    </div>
                    <div className='menu-item'>
                        <div onClick={() => props.filt("original_title.desc")}>Z-A</div>
                    </div>
                </section>
            ): null}
        </div>
    );
}

export default Dropdown