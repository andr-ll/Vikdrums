import React from 'react';
import { partsData } from '../../mockdata/partsData';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchParts } from '../../state/actions/fetchers/partsData';
// import { RootState } from '../../type';
import { PartsContainer } from './Components/PartsContainer';

import './Parts.scss';


export const Parts = () => {

    // const dispatch = useDispatch();
    // const partsData = useSelector(
    //     (state: RootState) => state.parts.data
    // );
    
    // const partsDataErr = useSelector(
    //     (state: RootState) => state.parts.err
    // );

    // useEffect(() => {
    //     dispatch(fetchParts());
    //     return () => { }
    // }, [dispatch])

    return (
        <section className="parts">
            <div className="container">
                {partsData.map((item, id) => <PartsContainer name={item.name} parts={item.parts} key={id} />)}
            </div>
        </section>
    )
}