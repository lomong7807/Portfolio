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
import React from 'react';

// reactstrap components
import {Container, Row} from 'reactstrap';

// core components
import DemoNavbar from './components/Navbars/DemoNavbar.js';
import CardsFooter from './components/Footers/CardsFooter.js';
import './scss/index.scss';
import './scss/nav.scss';
import './scss/main.scss';
// index page sections
import Buttons from './views/IndexSections/Buttons.js';
import Inputs from './views/IndexSections/Inputs.js';
import CustomControls from './views/IndexSections/CustomControls.js';
import Menus from './views/IndexSections/Menus.js';
import Navbars from './views/IndexSections/Navbars.js';
import Tabs from './views/IndexSections/Tabs.js';
import Progress from './views/IndexSections/Progress.js';
import Pagination from './views/IndexSections/Pagination.js';
import Pills from './views/IndexSections/Pills.js';
import Labels from './views/IndexSections/Labels.js';
import Alerts from './views/IndexSections/Alerts.js';
import Typography from './views/IndexSections/Typography.js';
import Modals from './views/IndexSections/Modals.js';
import Datepicker from './views/IndexSections/Datepicker.js';
import TooltipPopover from './views/IndexSections/TooltipPopover.js';
import Carousel from './views/IndexSections/Carousel.js';
import Icons from './views/IndexSections/Icons.js';
import Login from './views/IndexSections/Login.js';
import Download from './views/IndexSections/Download.js';
import {Outlet, Route, Routes} from 'react-router-dom';
import Home from "./pages/main/Home";
import Profile from "./views/examples/Profile";
import Landing from "./views/examples/Landing";
import SimpleFooter from "./components/Footers/SimpleFooter";
import axios from "axios";
export const host = window.location.hostname === "localhost"
    ? 'http://localhost:8080'
    : "/api";

export const apiClient = axios.create({
  baseURL: host,
});

class App extends React.Component {

  render() {
    return (<>
      <Routes>
        <Route path='/' element={<>
          <DemoNavbar/>
          <main ref='main'>
            <Outlet></Outlet>
          </main>
          <SimpleFooter/>
        </>}>
          <Route path={'/'} element={<>
            <Home/>
          </>}/>
          <Route path={'/new'} element={<>
            <Buttons/>
            <Inputs/>
            <section className='section'>
              <Container>
                <CustomControls/>
                <Menus/>
              </Container>
            </section>
            <Navbars/>
            <section className='section section-components'>
              <Container>
                <Tabs/>
                <Row className='row-grid justify-content-between align-items-center mt-lg'>
                  <Progress/>
                  <Pagination/>
                </Row>
                <Row className='row-grid justify-content-between'>
                  <Pills/>
                  <Labels/>
                </Row>
                <Alerts/>
                <Typography/>
                <Modals/>
                <Datepicker/>
                <TooltipPopover/>
              </Container>
            </section>
            <Carousel/>
            <Icons/>
            <Login/>
            <Download/>
          </>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/profile-page' element={<Profile/>}/>
        <Route path='/landing-page' element={<Landing/>}/>
      </Routes>
    </>);
  }
}

export default App;
