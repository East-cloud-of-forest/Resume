import classNames from "classnames";
import "../style/Profile.scss";
import { Button, Title } from "./Common";

const Profile = () => {
  const contect = [
    {
      icon: "&#128231;",
      kind: "이메일",
      url: "ecof1911@gmail.com",
    },
    {
      icon: "&#127968;",
      kind: "블로그",
      url: "https://velog.io/@ecof_",
    },
    {
      icon: "&#128218;",
      kind: "깃허브",
      url: "https://github.com/East-cloud-of-forest",
    },
  ];

  return (
    <div className={classNames("Profile", "section")}>
      <Title>
        임동운 <span>(Ecof)</span>
      </Title>
      <p className="intro">
        아이디어와 상상을 실현시키는걸 좋아하는 신입 프론트엔드 개발자 입니다.
      </p>
      <p>
        UI/UX 디자인 국비교육과정을 수료한 뒤 코딩에 관심을 가지게 되었고 프로그레시브 웹앱 프론트엔드 개발자 과정을 수료하며 프론트엔드 개발자의 꿈을 가지게 되었습니다.
        
      </p>
      <ul>
        {contect.map((x) => (
          <li
            key={x.kind}
            onClick={() => {
              if (x.kind === "이메일") {
                window.location.href = "mailto:ecof1911@gmail.com";
              } else {
                window.open(x.url);
              }
            }}
          >
            <Button>
              <span dangerouslySetInnerHTML={{ __html: x.icon }} /> {x.kind}{" "}
              <span className="url">{x.url}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
