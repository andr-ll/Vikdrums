import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PartsData from '../../Data/PartsData';
import { FullScreen } from './Components/FullScreen';
import { PartsContainer } from './Components/PartsContainer';
import { PartTemplateData } from './Components/PartTemplate';
import './Parts.scss';


export const Parts = () => {

    const [currentPart, setCurrentPart] = useState<PartTemplateData>({
        link: "default",
        src: "default",
        name: "default"
    })

    const onPartChange = (part: PartTemplateData) => {
        setCurrentPart(part)
    }

    const Collection = PartsData.map(item => <PartsContainer
        name={item.name}
        parts={item.parts}
        key={item.id}
        handlers={{ onPartChange }}
    />)

    return (
        <section className="parts">
            <div className="container">
                <Switch>
                    <Route path="/parts/fullscreen">
                        <FullScreen
                            link={currentPart.link}
                            src={currentPart.src}
                            name={currentPart.name}
                        />
                    </Route>
                    <Route path="/parts">
                        {Collection}
                    </Route>
                </Switch>
            </div>
        </section>
    )
}