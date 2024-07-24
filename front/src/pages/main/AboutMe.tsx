import React, { LegacyRef, useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { apiClient } from '../../App';

function AboutMe() {
  const md = 12;
  const lg = 6;
  const [itemList, setItemList] = useState<
    {
      itag: string;
      title: string;
      content: string;
      isATag: boolean;
      atagHref:string;
    }[]
  >();
  useEffect(() => {
    apiClient
      .get('/aboutMe')
      .then(res => {
        setItemList(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <Container className={'aboutMe'} id={'aboutMe'}>
        <Row>
          <Col lg={12}>
            <h1>About Me</h1>
          </Col>
          <Col className={'table'} lg={4} md={6}>
            <div className={'my_profile'}>
              <img src={`${process.env.PUBLIC_URL}/img/main/my_profile.jpg`} alt={'my_profile'} />
            </div>
          </Col>
          <Col lg={8} md={6} className={'table'}>
            <Row className={'aboutBox'}>
              {Array.isArray(itemList)&&itemList.map((item, index) => (
                <AboutMeItem key={item.title} item={item}></AboutMeItem>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function AboutMeItem({ item }) {
  const md = 12;
  const lg = 6;

  const [aColor, setAColor] = useState('dimgrey');
  return (
    <Col className={'item'} lg={lg} md={md}>
      <div className={'icon'}>
        <i className={item.itag}></i>
      </div>
      <div className={'title'}>
        <p>{item.title}</p>
        {!item.isATag ? (
          <p>{item.content}</p>
        ) : (
          <a
            style={{ color: aColor, transition: '0.5s' }}
            onMouseLeave={() => {
              setAColor('dimgray');
            }}
            onMouseEnter={() => {
              setAColor('slateblue');
            }}
            href={item.atagHref}>
            {item.content}
          </a>
        )}
      </div>
    </Col>
  );
}

export default AboutMe;
