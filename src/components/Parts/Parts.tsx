import { partsData } from '../../mockdata/partsData';
import { PartsContainer } from './Components/PartsContainer';

import './Parts.scss';


export const Parts = () => {

    return (
        <section className="parts">
            <div className="container">
                {partsData.map((item, id) => <PartsContainer name={item.name} parts={item.parts} key={id} />)}
            </div>
        </section>
    )
}