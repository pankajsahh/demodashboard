import { MDBIcon } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import Context from "../../source/context";
import "./SideBar.css";
const SideBar = () => {
  const { sidebar ,setsidebar } = useContext(Context);

  function flip(){
  setsidebar(!sidebar);
  }
  return (
    <div className="PopingSideBar">
      <div className={`displayPictur ${sidebar?"displayPicturhide":""}`}>
      <button onClick={flip}><i class="fas fa-times"></i></button>
        <div className="UserDetails">
          <div className="imageProfile">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png"
              alt=""
            />
          </div>
          <div className="SideBarUsername">
            <p>John doe</p>
            <p>Web coder</p>
            <b>
              <MDBIcon size="sm" fas icon="circle" /> ONLINE
            </b>
          </div>
          
        </div>

        <div className="MainLinks">
          <ul>
            <li><MDBIcon fas icon="tachometer-alt" /> DashBoard</li>
            <li><MDBIcon fas icon="atom" /> Widgets</li>
            <li><MDBIcon fas icon="flask" /> UI Kits</li>
            <li><MDBIcon fas icon="flask" /> Pages</li>
            <li><MDBIcon fas icon="envelope" /> Emails</li>
            <li><MDBIcon fas icon="envelope" /> Forms Elements</li>
            <li><MDBIcon fas icon="wine-glass-alt" /> Charts</li>
            <li><MDBIcon fas icon="map-marked" /> Maps</li>
            <li><MDBIcon fas icon="gift" /> Extras</li>
          </ul>
        </div>


      </div>
    </div>
  );
};
export default SideBar;
