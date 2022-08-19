import React, { useState } from 'react';

const Accordion = ({ children, title }) => {
    const [open, setOpen] = useState(false);
    return (
        <ul onClick={() => setOpen(!open)} className="Accordion">
            {title}
            <ul className={`{Accordion-children${open ? '-active' : ''}}`}>
                {open && children}
            </ul>
        </ul>
    );
}

export default Accordion;