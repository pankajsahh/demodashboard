import React from 'react'
import './OurClint.css'
import {  MDBInput } from 'mdb-react-ui-kit'
import Client from '../Clients/ClientRep'

const Ourclients = () => {
    return (
        <div className="OurClintsList">
                <div className="ClientHeader">
                    <h4>Our Client</h4>
                    <span>You have 425 clients</span>
                </div>
                <div className="clientsearch">
                <MDBInput label='live search' id='typeText' type='text' />
                </div>
                <ul>
                    <li><Client props={{"name":"pankaj sahu","occupation":"creative designer"}} /></li>
                    <li><Client props={{"name":"jamsed line","occupation":"marketing"}}/></li>
                    <li><Client props={{"name":"sakshi garg","occupation":"supervioser"}}/></li>
                </ul>
        </div>
    )
}
export default Ourclients;