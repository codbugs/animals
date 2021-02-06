// services
import Database from '../services/data.js';

// components
import Card from './Card.js';
import { useEffect, useState } from 'react';

export default function Deck() {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        const dataRead = Database().find();
        setData(dataRead);
    }, []);

    return <div className={'columns is-multiline'}>
        { 
            data.map(item => {
                return <div key={item.id} className={'column is-3'}>
                    <Card animal={item} />
                </div>;
            })
        }
    </div>;
};