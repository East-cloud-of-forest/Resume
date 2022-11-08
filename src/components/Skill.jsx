import { Title } from "./Common";
import "../style/Skill.scss";
import skill from "../data/skill";

const Skill = () => {
  return (
    <div className="Skill">
      <Title>Skill</Title>
      <ul>
        {skill.map((x, i) => (
          <li key={i}>
            <h3>{x.name}</h3>
            <p dangerouslySetInnerHTML={{__html:x.text}}></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
