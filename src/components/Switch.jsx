import React from "react";

const Switch = ({ active, onChangeSwitch }) => {
    return (
        <div onClick={onChangeSwitch} className={`Switch-bar ${active ? 'Switch-bar--active' : ''}`}>
            <div className={`Switch-ball ${active ? 'Switch-ball--active' : ''}`}></div>
        </div>
    );
}

export default Switch;