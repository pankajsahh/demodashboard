import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer, MDBIcon, MDBNavbar } from 'mdb-react-ui-kit';
import React from 'react'
import Ourclients from '../../components/clientList/OurClient';
import ActivityGraph from '../../components/graph/ActivityGraph';
import ChartsPage from '../../components/userinfo/DonutChart';
import Costomerreview from '../../components/userinfo/UserInfo';
import Portfolio from '../../components/userPortfolio/Portfolio';
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
                            <div className="twotwogroup">
                                <div className="view">
                                    <Costomerreview props={{ "name": "today views", "number": "220052", "image": "chart-area" }} />
                                    <Costomerreview props={{ "name": "Items sales", "number": "60002", "image": "volume-up" }} />

                                </div>
                                <div className="view">
                                    <Costomerreview props={{ "name": "Revenue", "number": "1425", "image": "dollar-sign" }} />
                                    <Costomerreview props={{ "name": "NewOrder", "number": "5218", "image": "shopping-cart" }} />
                                </div>
                            </div>
                        </div>
                        <div className="oneRevanueShow">
                            <ChartsPage />
                        </div>
                    </div>
                    <div className="revanuegraph">
                        <ActivityGraph />
                    </div>
                </div>
                <div className="FeaturesBuilding">
                    <div>
                        <div className="ProfileFollow">
                            <Portfolio />
                        </div>
                        <div className="OurClient">
                            <Ourclients />
                        </div>
                    </div>
                    <div className="div">
                        <div className="ShirtSellings">
                            <h4>Classic Shirt</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <MDBIcon fas icon="shopping-cart" />
                             <span>$58 <strike>$74</strike></span>
                        </div>
                        <div className="YourTask">
                        task maanager
                        </div>

                    </div>
                    <div className="div">
                        <div className="TwitterFollow">
                            <div className="twitterid">
                                <MDBIcon size='3x' fab icon="twitter" />
                                <div className="twitterinfo">
                                    <h5>Envato</h5>
                                    <p>Corporate of web</p>
                                </div>
                            </div>
                            No tweet today available

                        </div>
                        <div className="ChatWithOwner">
                        ChatWithOwner
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default Dashboard;