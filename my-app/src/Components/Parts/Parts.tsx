import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../../actions/fetchers/partsData';
import { RootState } from '../../type';
import { PartsContainer } from './Components/PartsContainer';
import './Parts.scss';


export const Parts = () => {

    const dispatch = useDispatch();
    const partsData = useSelector(
        (state: RootState) => state.parts.data
    );
    
    const partsDataErr = useSelector(
        (state: RootState) => state.parts.err
    );

    useEffect(() => {
        dispatch(fetchParts());
        return () => { }
    }, [dispatch])

    const Collection = partsData.map(item => <PartsContainer
        name={item.name}
        parts={item.parts}
        key={item.id}
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