import { useLocation } from "react-router-dom";
import { Button, Title } from "../components/Common";
import '../style/Project.scss'

const Project = ({ project }) => {
  const location = useLocation().pathname

  return (
    <div className="Project">
      {project.map((p,i)=>(
        <div key={i} className="section">
          <Title location={location}>{p.name}</Title>
          <h2>{p.subname} <span>{p.engname}</span></h2>
          <div className="imgbox">
            <img src={p.img} alt={p.engname} />
          </div>
          <div className="textbox" dangerouslySetInnerHTML={{ __html: p.info }} />
          <div className="infobox">
            <p>{p.day}</p>
            <p>{p.dev}</p>
          </div>
          <div className="butonbox">
            <Button onClick={()=>{window.open(p.git)}}>&#128218; GitHub</Button>
            <Button onClick={()=>{window.open(p.url)}}>&#127968; Build Page</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
