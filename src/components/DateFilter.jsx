import React from 'react';
import { useState } from 'react';

const DateFilter = ({ data, which, setDataCopy }) => {
    const [from, setFrom] = useState((new Date(Date.now()).toISOString().slice(0, 10)))
    const [to, setTo] = useState((new Date(Date.now()).toISOString().slice(0, 10)))
    const dateFilter = () => {
        setDataCopy(data.filter(element => {
            console.log(new Date(element[which]));
            return new Date(element[which]) >= new Date(from) && new Date(element[which]) <= new Date(to)
        }))
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', background: '#dcdcdc',
            alignItems: 'center', height: '1.8rem', borderRadius: '0.5rem', border: '2px solid black',
            marginRight: '2rem'
        }}>
            <p style={{ paddingLeft: '0.5rem', paddingRight: '1rem', color: 'black', fontSize: '1rem' }}>
                {`Filtrar por ${which[0].toUpperCase()}${which
                .slice(1, which.length)
                .match(/([A-Z]?[^A-Z]*)/g)
                .slice(0, -1)
                .join(" ")}:`
            }</p>
            <div style={{
                display: 'flex', flexDirection: 'row',
            }}>
                <input style={{
                    textAllign: 'center',
                    marginRight: '0.5rem',
                    fontSize: '2.2vh', height: '1.5rem',
                    borderRadius: '0.5rem'
                }} value={from} onChange={(e) => {
                    setFrom(e.target.value)
                    dateFilter(e.target.value)
                }
                } type="date" />
                <input style={{
                    textAllign: 'center',
                    fontSize: '2.2vh', height: '1.5rem',
                    borderRadius: '0.5rem',
                }} value={to} onChange={(e) => {
                    setTo(e.target.value)
                    dateFilter(e.target.value)
                }} type="date" />
            </div>
        </div >
    );
}

export default DateFilter;