import React, { useEffect, useState } from 'react';
import {Button, Card, Col, Container, Row} from 'reactstrap';
import {apiClient, host} from '../../App';

function History() {
  const [historyList, setHistoryList] = useState<
    {
      title: string;
      start: string;
      end: string;
      content: string;
    }[]
  >();
  useEffect(() => {
    apiClient.get('/history').then(res => {
      setHistoryList(res.data);
    });
  }, []);
  return (
    <main className="profile-page ">
      <section className="section" id={'history'}>
        <Container className={'history'}>
          <h1 style={{ color: 'black', marginBottom: '60px' }}>History</h1>
          <Card className="card-profile mt-n-3">
            <div className="px-4">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img
                      alt="..."
                      className="rounded-circle"
                      style={{ zIndex: 1 }}
                      src={process.env.PUBLIC_URL + '/img/main/history/profile.jpg'}
                    />
                  </div>
                </Col>
                <Col className="order-lg-3 text-lg-right align-self-lg-center mt-4 icons" lg="4">
                  <div className="card-profile-actions mt-lg-0 " style={{ cursor: 'default' }}>

                    <i
                      className="fa fa-instagram mr-4"
                      onClick={() => {
                        window.open('https://www.instagram.com/yyoon_s', '_blank');
                      }}
                    />
                    <i
                      className="fa fa-github mr-4"
                      onClick={() => {
                        window.open('https://github.com/lomong7807', '_blank');
                      }}
                    />

                    <Button
                        className={'float-right  mt-3'}
                        color="default"
                        onClick={()=>{window.open(`${host}/csv_download?fileName=강윤수 입사지원서.pdf`,"_blank")}}
                    >
                      자기소개서
                    </Button>
                  </div>
                </Col>
                <Col className="order-lg-1" lg="4">
                  <div className="card-profile-stats d-flex justify-content-center mt-lg-3">
                    <div>
                      <span className="heading">2023.06~</span>
                      <span className="description">started</span>
                    </div>
                    <div>
                      <span className="heading">4</span>
                      <span className="description">projects</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-lg-6">
                <h3>
                  강윤수 <span className="font-weight-light"></span>
                </h3>
              </div>
              {historyList?.map((item, index) => (
                <div className="mt-4 py-4 border-top text-center content" key={item.title}>
                  <Row className="justify-content-center contentBox">
                    <div>
                      <span>{item.title}</span>
                      <p>
                        <strong>시작 :</strong> {item.start}
                      </p>
                      <p>
                        <strong>종료 :</strong> {item.end}
                      </p>
                    </div>
                    <div>
                      <p>{item.content}</p>
                    </div>
                  </Row>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}

export default History;
