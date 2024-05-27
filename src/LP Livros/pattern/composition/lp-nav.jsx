import '../../styles.css'
import {EmptyImage} from "../../../assets/images"

export default function Nav(props) {
    return(
        <div className="nav-container">
            <img src={props.image ? props.image : EmptyImage} alt="" className='nav-images' />
            <div className='section-container'><h1>{props.tittle}</h1>
            <p className='section-description'> {props.description} </p>
        </div>
        </div>
    )
}