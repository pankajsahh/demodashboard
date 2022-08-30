import React from 'react'
import './Portfolio.css'
import { MDBIcon } from 'mdb-react-ui-kit'

const Portfolio = () => {
    return (
        <div className="Portfolio">
                <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png" alt="" />
            <div className="info">
                <span>Brain khan</span><br />
                <span>@brainKhan</span><br />
            </div>
            <button>Follow us</button>
            <div className="ico">
                <div className="icon">
                    <MDBIcon fab icon="gratipay" />
                    <h5>1245</h5>
                </div>
                <div className="icon">
                    <MDBIcon fas icon="thumbtack" />
                    <h5>1245</h5>
                </div>
                <div className="icon">
                    <MDBIcon fas icon="hashtag" />
                    <h5>1245</h5>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;