import classNames from "classnames";
import { useEffect, useState } from "react";
import "../style/ProjectSlide.scss";
import { Title } from "./Common";

const ProjectSlide = ({ project }) => {
  const [Card, SetCard] = useState([{name:''}]);
  const [last, SetLast] = useState()
  const right = () => {
    let copy = [...Card]
    copy.push(copy.shift())
    SetCard(copy)
  };
  const left = () => {
    let copy = [...Card]
    let dummy = {name:'dummy'}
    copy.unshift(dummy)
    SetCard(copy)
    SetLast(copy.pop())
  };
  useEffect(()=>{
    let copy = [...project]
    copy.unshift(copy.pop())
    SetCard(copy)
  }, [project])
  useEffect(()=>{
    if (Card[0].name==='dummy') {
      let copy = [...Card]
      copy[0] = last
      SetCard(copy)
    }
  }, [Card, last])

  return (
    <div className={classNames("ProjectSlide", "section")}>
      <Title>Project</Title>
      <div className="slides">
        <div className="right" onClick={left}>
          오른쪽
        </div>
        <div className="left" onClick={right}>
          왼쪽
        </div>
        <ul>
          {Card.map((p, i) => (
            <li key={p.name} className="slide" style={{left:50*i+'%'}}>
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSlide;
