import classNames from "classnames";
import { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../style/ProjectSlide.scss";
import { Button, Title } from "./Common";

const ProjectSlide = ({ project }) => {
  const [Card, SetCard] = useState([{ name: "" }]);
  const [last, SetLast] = useState();
  const right = () => {
    let copy = [...Card];
    copy.push(copy.shift());
    SetCard(copy);
  };
  const left = () => {
    let copy = [...Card];
    let dummy = { name: "dummy" };
    copy.unshift(dummy);
    SetCard(copy);
    SetLast(copy.pop());
  };
  useEffect(() => {
    let copy = [...project];
    copy.unshift(copy.pop());
    SetCard(copy);
  }, [project]);
  useEffect(() => {
    if (Card[0].name === "dummy") {
      let copy = [...Card];
      copy[0] = last;
      SetCard(copy);
    }
  }, [Card, last]);

  return (
    <div className={classNames("ProjectSlide", "section")}>
      <Title>Project</Title>
      <div className="slides">
        <Button className="right" onClick={left}>
          <div className="inner"></div>
        </Button>
        <Button className="left" onClick={right}>
          <div className="inner"></div>
        </Button>
        <ul>
          {Card.map((p, i) => (
            <li key={p.name} className="slide" style={{ left: 50 * i + "%" }}>
              <Link to={'/project#'+p.name}>
                <span>{p.id}</span>
                <p>{p.name}</p>
                <p>{p.subname}</p>
                <p>{p.day}</p>
                <p>{p.dev}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSlide;
