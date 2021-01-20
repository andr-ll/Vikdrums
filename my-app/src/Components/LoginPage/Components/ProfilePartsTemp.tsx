import React from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { currentPartFullSize } from "../../../actions/parts";
import { PartTemplateData } from "../../../type"

export const ProfilePartsTemp = (data: PartTemplateData) => {

    const dispatch = useDispatch();

    return (
        <Link to="/fullscreen" className="part-wrapper" onClick={() => dispatch(currentPartFullSize(data))}>
            <div className="part flex">
                <img src={data.src} alt="img" />
                <p>{data.name}</p>
            </div>
        </Link>
    )
}