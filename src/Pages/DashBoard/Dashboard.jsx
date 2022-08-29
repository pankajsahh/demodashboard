import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';
import React from 'react'
import Costomerreview from '../../components/userinfo/UserInfo';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className="mainPage">
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer >
                    <nav aria-label='breadcrumb'>
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                                <a href='/'>Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href='/'>Dashboard</a>
                            </MDBBreadcrumbItem>

                        </MDBBreadcrumb>
                    </nav>
                </MDBContainer>
            </MDBNavbar>
            <div className='BasicDetails'>
                <h4>Hi John Welcome back</h4>
                <p>very detailed & features admin</p>
            </div>
            <div className="DashBoardApps">
                <div className="revanueDisplayer">
                    <div className="fiveRevenueShow">
                        <div className="fourrevanueShow">
                            <div className="22group">
                                <div className="view">
                                <Costomerreview props={{"name":"today views","number":"220052","image":"chart-area"}}/>
                                <Costomerreview props={{"name":"Items sales","number":"60002","image":"volume-up"}}/>

                                </div>
                                <div className="view">
                                <Costomerreview props={{"name":"Revenue","number":"1425","image":"dollar-sign"}}/>
                                <Costomerreview props={{"name":"NewOrder","number":"5218","image":"shopping-cart"}}/>
                                </div>
                            </div>
                            <div className="22group">
                                <div className="view"></div>
                                <div className="view"></div>
                            </div>
                        </div>
                        <div className="oneRevanueShow">

                        </div>
                    </div>
                    <div className="revanuegraph">

                    </div>
                </div>
                <div className="FeaturesBuilding">
                    <div className="ProfileFollow">
                        something
                    </div>
                    <div className="TaskManager">
                        something
                    </div>
                    <div className="OurClient">
                        something
                    </div>
                    <div className="ShirtSelling">
                        something
                    </div>
                    <div className="TwitterFollow">
                        something
                    </div>
                    <div className="ClientChat">
                        something
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;