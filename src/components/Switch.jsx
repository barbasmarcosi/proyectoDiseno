import { useState } from "react";

const Switch = () => {
    const [active, setActive] = useState(false)
    return (
        <div onClick={() => setActive(!active)} className={`Switch-bar ${active ? 'Switch-bar--active' : ''}`}>
            <div className={`Switch-ball ${active ? 'Switch-ball--active' : ''}`}></div>
        </div>
    );
}

export default Switch;