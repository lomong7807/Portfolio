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
import React, { useEffect, useState } from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';
import TypewriterComponent from 'typewriter-effect';

function Hero() {
  return (
      <>
        <div className="position-relative main">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped" style={{paddingBottom:0}}>
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default" >
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg ">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center height" lg="">
                    <span className="lead text-white title">강윤수</span>

                    <p className="lead text-white">
                      <span className="lead text-white">안녕하세요.</span>
                      <TypewriterComponent
                          options={{
                            strings: [
                              '도전을 즐기는 주니어 개발자입니다.',
                              '항상 제자리에 머물러 있지 않으려 합니다.',
                              '문제 발생시 해결하고자 하는 성격이 저의 장점입니다.',
                            ],
                            autoStart: true,
                            deleteSpeed: '10',
                            loop: true,
                            delay: '50',
                          }}
                      />
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 btn"
                          color="default"
                          href="https://www.instagram.com/yyoon_s"
                          size="lg"
                          target="_blank">
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-instagram" />
                      </span>
                        <span className="btn-inner--text">
                        <span className="text-indigo mr-1">Follow me</span>
                        on Instagram
                      </span>
                      </Button>{' '}
                      <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="github"
                          href="https://github.com/lomong7807?tab=repositories"
                          size="lg"
                          target="_blank">
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-github" />
                      </span>
                        <span className="btn-inner--text">
                        <span className="text-warning mr-1">Star me</span>
                        on Github
                      </span>
                      </Button>
                    </div>{/*
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">*Provided assistance with code</small>
                    <img
                      alt="..."
                      className="ml-1"
                      style={{ height: '28px', borderRadius: '10px' }}
                      src={`${process.env.PUBLIC_URL}/img/main/kkamang.jpg`}
                    />
                    <span className="text-white font-weight-bold mb-0 ml-1">kkamang</span>
                  </div>*/}
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0">
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
        </div>
      </>
  );
}

export default Hero;
