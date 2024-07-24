/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect} from "react";
import { Link } from 'react-scroll';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      navbarColor: 'transparent',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ navbarColor: 'transparent' });
    } else {
      this.setState({ navbarColor: 'default' });
    }
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className={`navbar-dark bg-${this.state.navbarColor} navbar-light headroom nav`}
            color={'default'}
            expand="lg"
            id="navbar-main"
            style={{ position: 'fixed', width: '100%', zIndex: '1000', height: '70px' }}
          >
            <Container>
              <NavbarBrand
                  className="mr-lg-5 navName"
                  tag={Link}
                  to={'/'}
                  onClick={() => {
                    window.scrollTo({top:0, behavior:'smooth'});
                  }}
                  style={{ color: 'white' }}>
                <span style={{ cursor: 'pointer' }}>
                  <i className="bi bi-bookmarks"></i>
                  <strong>Kang's</strong> 포트폴리오
                </span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      {' '}
                      <span style={{ cursor: 'pointer' }}>
                        <i className="bi bi-bookmarks"></i>
                        <strong>Kang's</strong> 포트폴리오
                      </span>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto menu" navbar>
                  <NavItem>
                    <NavLink className={'name'}>
                      <Link
                          activeClass="active"
                          to="aboutMe" // 스크롤 이동할 대상 div의 id
                          spy={true}
                          smooth={true}
                          offset={-70} // 스크롤 이동 후 div과의 간격
                          duration={500} // 스크롤 애니메이션 지속 시간 (밀리초)
                      >
                        About me
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={'name'}>
                      <Link
                          activeClass="active"
                          to="skills" // 스크롤 이동할 대상 div의 id
                          spy={true}
                          smooth={true}
                          offset={-70} // 스크롤 이동 후 div과의 간격
                          duration={500} // 스크롤 애니메이션 지속 시간 (밀리초)
                      >
                        Skills
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={'name'}>
                      <Link
                          activeClass="active"
                          to="project" // 스크롤 이동할 대상 div의 id
                          spy={true}
                          smooth={true}
                          offset={-70} // 스크롤 이동 후 div과의 간격
                          duration={500} // 스크롤 애니메이션 지속 시간 (밀리초)
                      >
                        Project
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem className={'lastMenu'}>
                    <NavLink className={'name'}>
                      <Link
                          activeClass="active"
                          to="history" // 스크롤 이동할 대상 div의 id
                          spy={true}
                          smooth={true}
                          offset={-70} // 스크롤 이동 후 div과의 간격
                          duration={500} // 스크롤 애니메이션 지속 시간 (밀리초)
                      >
                        History
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                        className="nav-link-icon"
                        href="https://www.instagram.com/yyoon_s"
                        id="tooltip333589074"
                        target="_blank">
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Follow me on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                        className="nav-link-icon"
                        href="https://github.com/lomong7807?tab=repositories"
                        id="tooltip112445449"
                        target="_blank">
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star me on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  {/*<NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-cloud-download mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Download
                      </span>
                    </Button>
                  </NavItem>*/}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
