import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import './UseInfo.css'
const Costomerreview = ({props})=>{
    console.log(props)
    const {name,number,image} = props;
    return (
        <div className="Userupdates">
            <MDBIcon size="3x" fas icon={image} />
            <div>
                <span>{name}</span><br />
                <h5> {number}</h5>
            </div>
        </div>
    )
}
export default Costomerreview;