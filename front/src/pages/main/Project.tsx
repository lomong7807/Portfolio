import React, {useEffect, useState} from 'react';
import { Card, CardBody, Col, Container, Modal, Row } from 'reactstrap';
import {apiClient} from "../../App";

function Project() {
  const [modal, setModal] = useState('');
  const [projectList, setProjectList] = useState<
    {
      imgLink: string;
      title: string;
      date: string;
      content: string;
      skillsTable: { title: string; content: string }[];
      githubLink: string;
      videos?: { title: string; link: string }[];
    }[]
  >();
  useEffect(() => {
    apiClient.get('/project').then((res) => {
      const projects = res.data;

      // Promise.all을 사용하여 모든 비동기 호출이 완료될 때까지 기다림
      const fetchSkillsAndVideosPromises = projects.map((project) => {
        const projectNo = project.projectNo;

        // skillsTable과 videos를 가져오는 비동기 호출들을 Promise 배열에 추가
        const fetchSkillsTablePromise = apiClient.get(`/project/skillsTable?projectNo=${projectNo}`);
        const fetchVideosPromise = apiClient.get(`/project/videos?projectNo=${projectNo}`);

        return Promise.all([fetchSkillsTablePromise, fetchVideosPromise]).then(([resSkillsTable, resVideos]) => {
          const skillsTable = resSkillsTable.data;
          const videos = resVideos.data;

          // 프로젝트의 skillsTable 및 videos 업데이트
          project.skillsTable = skillsTable;
          project.videos = videos;

          return project; // 업데이트된 프로젝트 반환
        }).catch((err) => {
          console.log(err);
          return project; // 에러가 발생하더라도 프로젝트 반환
        });
      });

      // 모든 프로미스가 완료되면 프로젝트 리스트 업데이트
      Promise.all(fetchSkillsAndVideosPromises).then((updatedProjects) => {
        setProjectList(updatedProjects);
      });
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <section className="project" id={'project'}>
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-1" lg="12">
            <h1 style={{ color: 'black' }}>project</h1>
            {Array.isArray(projectList)&&projectList.map((project, index) => (
              <Card key={project.title} className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <Row>
                    <Col lg={7} className={'img'}>
                      <img src={process.env.PUBLIC_URL + project.imgLink} alt={project.title} />
                    </Col>
                    <Col lg={5} className={'content'}>
                      <p>{project.title}</p>
                      <span>개발기간 : {project.date}</span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.content,
                        }}
                      />
                      <table>
                        <tbody>
                          {project.skillsTable?.map((skill, index) => (
                            <tr key={skill.title}>
                              <td>{skill.title}</td>
                              <td>{skill.content}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className={'icon'}>
                        {project.videos?.length!==0 && (
                          <>
                            <i className="bi bi-youtube youtube" onClick={() => setModal(project.title)}></i>
                            <ProjectModal
                              title={project.title}
                              modal={modal}
                              videos={project.videos}
                              setModal={setModal}></ProjectModal>
                          </>
                        )}
                        <i
                          className="bi bi-github github"
                          onClick={() => {
                            window.open(project.githubLink);
                          }}>
                          {' '}
                        </i>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      {/* SVG separator */}
    </section>
  );
}

function ProjectModal({ title, modal, setModal, videos }) {
  return (
    <Modal className="modal-xl modal-dialog-centered" isOpen={modal === title} toggle={() => setModal('')}>
      <div className="modal-header">
        <h4 className="modal-title" id="modal-title-default">
          {title}
        </h4>
        <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => setModal('')}>
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        {videos.map((video, index) => (
          <>
            <h5>{video.title}</h5>
            <div className={'youtube-div'}>
              <iframe
                className={'youtube-player'}
                width="640"
                height="360"
                src={video.link}
                allowFullScreen={true}></iframe>
            </div>
          </>
        ))}
      </div>
    </Modal>
  );
}

export default Project;
