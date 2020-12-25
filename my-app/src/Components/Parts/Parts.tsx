import React from 'react';
import PartsData from '../../Data/PartsData';
import { PartsContainer, PartsHandlers } from './Components/PartsContainer';
import './Parts.scss';

interface PartsProps {
    handlers: PartsHandlers
}

export const Parts = (props: PartsProps) => {

    const Collection = PartsData.map(item => <PartsContainer
        name={item.name}
        parts={item.parts}
        key={item.id}
        handlers={props.handlers}
    />)

    return (
        <section className="parts">
            <div className="container">
                {Collection}
            </div>
        </section>
    )
}