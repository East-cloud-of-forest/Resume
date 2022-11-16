import classNames from "classnames";
import "../style/Experience.scss";
import { Title } from "./Common";

const Experience = () => {
  return (
    <div className={classNames("Experience", "section")}>
      <Title>Experience</Title>
      <ul>
        <li>
          <h2>프로그레시브 웹앱 프론트엔드 개발 실무자 양성 과정</h2>
          <div>
            <span>2022.01 ~ 2022.07</span> <span>그린컴퓨터아카데미</span>
          </div>
          <p>
            국비 지원으로 진행된 프론트엔드 양성자 과정, 기본적인 HTML, CSS,
            Javascript 와 React, vue 을 사용한 SPA 제작, node.js와 express를
            사용한 간단한 서버 제작 및 프론트엔드와의 연결, firebase를 활용한
            프로젝트 진행
          </p>
        </li>
        <li>
          <h2>UI/UX웹디자인 (웹디자인기능사)</h2>
          <div>
            <span>2021.04 ~ 2021.08</span> <span>부산나래디자인학원</span>
          </div>
          <p>
            국비 지원으로 진행된 UI/UX 디자인 과정, 일러스트, 포토샵 등 디자인 툴을
            활용한 로고 및 아이콘 디자인, 사용자 경험과 인터페이스 디자인, 웹
            와이어 프레임 등 UI / UX 설계 능력 함양, 웹디자인기능사 자격증 취득
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
