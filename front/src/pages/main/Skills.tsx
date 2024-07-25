import {Button, Card, CardBody, Col, Container, Row} from 'reactstrap';
import React, {useRef} from 'react';

function Skills() {

  return (
    <section className="section section-lg pt-lg-0 skills" id={'skills'}>
      <Container>
        <br />
        <h1>Skills</h1>
        <Row className="justify-content-center">
          <Col lg="4"  style={{ padding: 0 }}>
            <Col lg="12">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5 skillCard">
                  <div className={'title'}>
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="bi bi-pc" style={{ fontSize: '30px' }}></i>
                    </div>
                    <h3 className="text-primary text-uppercase">BackEnd</h3>
                  </div>
                  <div className={'img'}>
                    <img src={process.env.PUBLIC_URL + '/img/main/springBoot.png'} alt={'springBoot'}/>
                    <img src={process.env.PUBLIC_URL + '/img/main/java.png'} alt={'java'}/>
                    <img src={process.env.PUBLIC_URL + '/img/main/QueryDSL.png'} alt={'QueryDSL'}/>
                    <img src={process.env.PUBLIC_URL + '/img/main/redis.jpg'} alt={'Redis'}/>
                    <img src={process.env.PUBLIC_URL + '/img/main/mybatis.png'} alt={'Mybatis'}/>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" style={{ marginTop: '25px', marginBottom:'25px' }}>
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5 skillCard">
                  <div className={'title'}>
                    <h3 className="text-info text-uppercase">Version Control</h3>
                  </div>
                  <div className={'img'} style={{justifyContent:"center"}}>
                    <img src={process.env.PUBLIC_URL + '/img/main/git.png'} alt={'git'} />
                    <img src={process.env.PUBLIC_URL + '/img/main/github.png'} alt={'github'} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Col>
          <Col lg="4"  style={{ padding: 0 }}>
            {' '}
            <Col lg="12" style={{marginBottom:'25px'}}>
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className={'title'}>
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i className="bi bi-display-fill"></i>
                    </div>
                    <h3 className="text-success text-uppercase">FrontEnd</h3>
                  </div>

                  <div className={'img'}>
                    <img src={process.env.PUBLIC_URL + '/img/main/HTML.png'} style={{ height: '170px' }} alt={'HTML'} />
                    <img src={process.env.PUBLIC_URL + '/img/main/CSS.png'} style={{ height: '170px' }} alt={'CSS'} />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/js2.png'}
                      style={{ height: '120px', marginTop: '10px' }}
                      alt={'js'}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/typescript.png'}
                      style={{ height: '120px', marginTop: '10px' }}
                      alt={'ts'}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/react.png'}
                      style={{  marginTop: '10px' }}
                      alt={'react'}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/redux.png'}
                      style={{  marginTop: '10px' }}
                      alt={'redux'}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Col>
          <Col lg="4"  style={{ padding: 0 }}>
            <Col lg="12">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className={'title'}>
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                      <i className="bi bi-hdd-network-fill"></i>
                    </div>
                    <h3 className="text-warning text-uppercase">Deployment</h3>
                  </div>

                  <div className={'img'} style={{justifyContent:"center"}}>
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/netlify.png'}
                      style={{  marginTop: '10px' }}
                      alt={'netlify'}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/aws.png'}
                      style={{  marginTop: '10px' }}
                      alt={'aws'}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/s3.png'}
                      style={{  height: '120px', marginTop: '10px' }}
                      alt={'s3'}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/img/main/ec2.png'}
                      style={{  height: '130px', marginTop: '10px' }}
                      alt={'ec2'}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" style={{ marginTop: '25px' }}>
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className={'title'}>
                    <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                      <i className="bi bi-server"></i>
                    </div>
                    <h3 className="text-danger text-uppercase">DataBase</h3>
                  </div>

                  <div className={'img'} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/img/main/mysql.png'} alt={'mysql'} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
