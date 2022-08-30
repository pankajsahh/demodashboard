import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import './client.css'


const Client = ({props}) => {
const {occupation,name} = props;
    return (
        <div className="OurClints">
               <div className="clientimage">
                <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className="clientinfo">{name } 
                <p>{occupation}</p>
                </div>
               </div>
              
               <div className="Clientmessage"><MDBIcon fas icon="sms" /></div>
        </div>
    )
}
export default Client;