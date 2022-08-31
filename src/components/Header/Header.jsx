import React, { useContext } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBIcon,
  MDBBtn,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Header.css";
import Context from "../../source/context";
export default function App() {
  const { sidebar, setsidebar } = useContext(Context);

  const toggleside = () => {
    setsidebar(!sidebar)
  }

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_960_720.png"
            height="30"
            alt=""
            loading="lazy"
          />
          Electric
        </MDBNavbarBrand>
        <MDBInputGroup tag="form" className="d-flex w-auto   ms-5">
          <MDBInput
            size="sm"
            className="form-control "
            placeholder="Search here"
            type="Search"
          />
          <MDBBtn rippleColor="success" color="dark">
            <MDBIcon fas icon="search" />
          </MDBBtn>

        </MDBInputGroup>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleside}
        >
          <MDBIcon icon="bars" fas />

        </MDBNavbarToggler>
          <div>
          <MDBNavbarNav>
            <MDBNavbarItem className="newTask ms-4 me-4">
              <MDBIcon fas icon="plus" /> New task
            </MDBNavbarItem>
            <MDBNavbarItem className="Upload ms-4 me-4">
              <MDBIcon fas icon="cloud-upload-alt" /> upload file
            </MDBNavbarItem>
          </MDBNavbarNav>
          </div>
          <div>

          <MDBIcon fab className="m-3 " icon="instagram" size="2x" />
          <MDBIcon fab className="m-3" icon="facebook" size="2x" />
          <MDBIcon fas className="m-3" icon="cog" size="2x" />
        
          </div>



      </MDBContainer>
    </MDBNavbar>
  );
}
