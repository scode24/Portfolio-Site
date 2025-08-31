import {
  faAws,
  faBitbucket,
  faDocker,
  faGithub,
  faJava,
  faJs,
  faLinkedinIn,
  faPython,
  faReact,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCloud,
  faCode,
  faDatabase,
  faDiagramProject,
  faEnvelope,
  faGlobe,
  faLeaf,
  faPhone,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconData = {
  java: <FontAwesomeIcon icon={faJava} />,
  j2ee: <FontAwesomeIcon icon={faJava} />,
  dropwizard: <FontAwesomeIcon icon={faJava} />,
  spring: <FontAwesomeIcon icon={faLeaf} />,
  react: <FontAwesomeIcon icon={faReact} />,
  express: <FontAwesomeIcon icon={faJs} />,
  python: <FontAwesomeIcon icon={faPython} />,
  microservice: <FontAwesomeIcon icon={faDiagramProject} />,
  rdbms: <FontAwesomeIcon icon={faDatabase} />,
  nosql: <FontAwesomeIcon icon={faDatabase} />,
  docker: <FontAwesomeIcon icon={faDocker} />,
  AI: <FontAwesomeIcon icon={faBitbucket} />,
  aws: <FontAwesomeIcon icon={faAws} />,
  azure: <FontAwesomeIcon icon={faCloud} />,
  aiml: <FontAwesomeIcon icon={faRobot} />,
  email: <FontAwesomeIcon icon={faEnvelope} />,
  phone: <FontAwesomeIcon icon={faPhone} />,
  linkedin: <FontAwesomeIcon icon={faLinkedinIn} />,
  github: <FontAwesomeIcon icon={faGithub} />,
  menu: <FontAwesomeIcon icon={faBars} />,
  internet: <FontAwesomeIcon icon={faGlobe} />,
  youtube: <FontAwesomeIcon icon={faYoutube} />,
  //   kafka: <FontAwesomeIcon icon={fa} />,
};

const useFetchTechIcon = () => {
  const getIcon = (skill) => {
    const lowerSkill = skill.toLowerCase();
    const matchKey = Object.keys(iconData).find((key) =>
      lowerSkill.includes(key)
    );
    return matchKey ? iconData[matchKey] : <FontAwesomeIcon icon={faCode} />;
  };

  return { getIcon };
};

export default useFetchTechIcon;
