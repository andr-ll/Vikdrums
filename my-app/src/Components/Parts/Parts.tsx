import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../../actions/fetchers/partsData';
import { RootState } from '../../type';
import { PartsContainer, PartsHandlers } from './Components/PartsContainer';
import './Parts.scss';

interface PartsProps {
    handlers: PartsHandlers
}

export const Parts = (props: PartsProps) => {

    const dispatch = useDispatch();
    const partsData = useSelector(
        (state: RootState) => state.parts.data
    );
    
    const partsDataErr = useSelector(
        (state: RootState) => state.parts.err
    );

    useEffect(() => {
        dispatch(fetchParts())
    }, [dispatch])

    const Collection = partsData.map(item => <PartsContainer
        name={item.name}
        parts={item.parts}
        key={item.id}
        handlers={props.handlers}
    />)

    return (
        <section className="parts">
            <div className="container">
                { partsDataErr && <div>{partsDataErr}</div> }
                {Collection}
            </div>
        </section>
    )
}