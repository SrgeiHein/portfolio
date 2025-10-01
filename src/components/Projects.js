import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/aperiaProject.jpg";
import projImg2 from "../assets/img/nexStack.png";
import projImg3 from "../assets/img/Obenergy.jpg";
import projImg4 from "../assets/img/globotix.sg.png";
import projImg5 from "../assets/img/arvas.png";
import projImg6 from "../assets/img/anaca project.png";
import projImg7 from "../assets/img/RenoQuote project.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Arvas AI Website",
      description: "Website Development",
      imgUrl: projImg5,
      url: "https://arvas.ai/",
    },
    {
      title: "Anaca Website",
      description: "Website Development",
      imgUrl: projImg6,
      url: "https://anaca.sg/",
    },
    {
      title: "RenoQuotez Website",
      description: "Website Development",
      imgUrl: projImg7,
      url: "https://renoquotez.singaporetestlab.com/",
    },
    {
      title: "Aperia Website",
      description: "Website Development",
      imgUrl: projImg1,
      url: "https://aperia.ai/",
    },
    {
      title: "nexStack Website",
      description: "Saas Development",
      imgUrl: projImg2,
      url: "https://nexstack.sg/",
    },
    {
      title: "OneBerry Website",
      description: "Energy Management Development",
      imgUrl: projImg3,
      url: "https://web.neahecs.com/",
    },
    {
      title: "Globotix Website",
      description: "Website Development",
      imgUrl: projImg4,
      url: "https://www.globotix.sg/",
    },
  ];

  const projectsPerTab = 3;
  const tabKeys = ["first", "second", "third"];
  const projectGroups = tabKeys.map((_, tabIndex) => {
    if (projects.length === 0) {
      return [];
    }
    return Array.from({ length: projectsPerTab }, (_, offset) => {
      const projectIndex =
        (tabIndex * projectsPerTab + offset) % projects.length;
      return projects[projectIndex];
    });
  });

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    The following projects illustrate my hands-on experience
                    with web technologies, including front-end and back-end
                    development. Each project represents my expertise in
                    delivering high-quality solutions tailored to specific
                    business needs.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {tabKeys.map((eventKey, index) => (
                        <Nav.Item key={eventKey}>
                          <Nav.Link eventKey={eventKey}>{`Tab ${
                            index + 1
                          }`}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {tabKeys.map((eventKey, tabIndex) => (
                        <Tab.Pane eventKey={eventKey} key={eventKey}>
                          <Row>
                            {projectGroups[tabIndex].map(
                              (project, cardIndex) => (
                                <ProjectCard
                                  key={`${eventKey}-${cardIndex}-${project.title}`}
                                  {...project}
                                />
                              )
                            )}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
