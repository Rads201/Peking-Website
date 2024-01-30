import React from "react";
import { useState } from 'react';
import Menu from "./Menu";

function Collapsible({ menu }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    let category = ""

    if (menu.length !== 0) {
        category = menu[0].category;
    }

    return (
        <div className="flex-child-element">
            <button onClick={toggle}>{category}</button>
            {open && (<Menu menu={menu}></Menu>)}
        </div>
    )
}

export default Collapsible;