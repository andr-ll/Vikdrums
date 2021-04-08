import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { currentPartFullSize } from "../../state/actions/parts"
import { RootState } from "../../type"
import {partsData} from '../../mockdata/partsData'
import './FullScreen.scss'

export const FullScreen = () => {

    window.scrollTo(0, 0)
    const dispatch = useDispatch();
    const params: { book: string, id: string } = useParams()

    useEffect(() => {
        const book = partsData.find((item) => item.name === params.book)
        const part = book?.parts.find(item => item.id.toString() === params.id)
        if (part) dispatch(currentPartFullSize(part))
    }, [dispatch, params.book, params.id])

    const currentPart = useSelector(
        (state: RootState) => state.parts.currentParts
    )    

    return (
        <div className="full-screen container flex">
            <div className="go-back flex desktop-only">
                <Link to="/parts" ><i className="fas fa-arrow-left" /><span>Все ноты</span></Link>
            </div>
            <img src={currentPart.src} alt="" />
            <div className="actions flex">
                <h2>{currentPart.name}</h2>
                <a href={currentPart.link} download>Скачать</a>
            </div>
        </div>
    )
}