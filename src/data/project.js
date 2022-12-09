const project = [
  {
    id: 1,
    img: require("../imgs/내잔네잔.png"),
    name: "내잔네잔",
    engname: "My Cup Your Cup",
    subname: "텀블러 커스텀 쇼핑몰",
    info: `
      <p>
        React를 이용해 SPA 형태로 제작한 커스텀 쇼핑몰입니다. <br/>
        5명이 한 달간 만든 프로젝트로 팀장을 맡아 버전관리 및 코드 취합 등을
        수행했었습니다. <br/>
        Canvas를 이용해 사용자가 직접 자신의 텀블러를 디자인할 수 있는 기능을
        핵심으로 리뷰 및 자신의 디자인을 올려 공유 할 수 있는 CRUD 게시판 기능을
        Firebase와 연동해 제작한 프로젝트입니다.
      </p>
      <span>기여한 부분</span>
      <ul>
        <li>
          Canvas를 이용해 텍스트와 이미지를 추가하고 자유롭게 배치하는 기능과
          다 만들어진 Canvas를 바로 이미지로 만들어 사용자가 보고 저장할 수
          있는 기능을 구현했습니다.
          <ul>
            <li>
              배치한 요소의 순서 변화를 위해 레이어 기능을 만들었고 레이어를
              통한 순서 변경, 삭제, 가리기, 전체 삭제 기능
            </li>
            <li>
              사용자가 직접 이미지를 업로드해서 배치하는 기능과 사이트 내에서
              제공하는 무료 이미지를 선택하면 바로 Canvas 위로 가져오기
            </li>
            <li>
              텍스트 및 사진을 선택하면 선과 각 모서리 점으로 선택한 객체를
              표시하게 했고 각 모서리의 점을 이용해 크기 조절
            </li>
            <li>
              Canvas에 그려진 텀블러 위에 씌워지는 이미지이기 때문에 배치한
              텍스트와 이미지가 텀블러 밖으로 나가지 않도록 마스킹
            </li>
            <li>
              Canvas에서 요소의 배치 수정 시 위치값 및 크기 값을 바로 Redux를
              이용하여 전역 상태로 저장 및 관리
            </li>
            <li>
              사용자가 직접 디자인한 기능을 디자인 완료 버튼을 누를 시 바로
              이미지로 변환
            </li>
          </ul>
        </li>
        <li>
          Firebase의 계정기능을 사용해 구글 로그인과 연동하고 Firebase의
          데이터베이스와 연동해 회원 정보를 저장하는 기능과 Firebase를 통해 계정
          비밀번호를 찾는 기능을 구현했습니다.
        </li>
        <li>
          Firebase의 데이터베이스와 연동해 리뷰 와 디자인을 게시하고 최신별로
          홈페이지에 노출하는 것과 각 페이지에서 조회할 수 있도록 구현했습니다.
          <ul>
            <li>
              게시글과 사진을 함께 게시할 시 Firebase 데이터베이스와 사진이 저장되는
              부분이 달라 먼저 빈 database를 만들고 그곳의 주소를 사진이 저장되는 곳에
              먼저 저장한 뒤 데이터와 사진이 다시 저장되도록 비동기 처리를 구현했습니다.
            </li>
          </ul>
        </li>
        <li>
          게시글 클릭 시 모달창의 형태로 게시글을 볼 수 있도록 구현했습니다.
        </li>
        <li>
          텀블러를 구입한 회원만 작성할 수 있는 리뷰 작성 페이지 부분의 이미지
          첨부 및 별점 추가, 태그 달기 부분 등을 구현하고 Firebase 데이터베이스와
          연동해 작성한 게시글을 데이터베이스로 저장하도록 구현했습니다.
        </li>
        <li>
          검색페이지 및 Firebase 데이터베이스와 연동한 검색 기능을 구현했습니다.
          사용자 이름 및 태그, 글의 내용으로 검색할 수 있습니다.
        </li>
      </ul>
    `,
    day: "2022.05.26 ~ 2022.07.14",
    dev: "5인 팀 프로젝트",
    git: "https://github.com/East-cloud-of-forest/My-Cup-Your-Cup",
    url: "https://east-cloud-of-forest.github.io/My-Cup-Your-Cup/",
  },
  {
    id: 2,
    img: require("../imgs/메타보드.png"),
    name: "메타보드",
    engname: "Metaboard",
    subname: "온라인 화이트보드",
    info: `
    <p>
      vue와 Canvas를 이용해 제작한 웹 화이트보드입니다. 사용자가 원하는 대로
      메모장을 추가하고 자유롭게 배치할 수 있습니다. 또한 메모장의 색을 커스텀 할 수
      있으며 자유롭게 수정 및 삭제할 수 있도록 제작했습니다. <br />
      메모장이 배치되는 뒤쪽 하얀 배경은 메모장을 추가하는 버튼과 함께 배치된
      모드 변경 버튼을 통해 그리기 모드로 전환할 시 크기, 모양, 색을 설정한 연필로
      사용자가 원하는 대로 그림을 그릴 수 있도록 제작했습니다. <br />
      Vuetify를 이용해 디자인했고 fontawesome과 연결해 아이콘을 사용했습니다.
    </p>
    `,
    day: "2022.03.29 ~ 2022.04.13",
    dev: "1인 토이 프로젝트",
    git: "https://github.com/East-cloud-of-forest/Metaboard",
    url: "https://east-cloud-of-forest.github.io/Metaboard/",
  },
  {
    id: 3,
    img: require("../imgs/코디캐스터.png"),
    name: "코디캐스터",
    engname: "Codicaster",
    subname: "날씨별 코디 알림",
    info: `
    <p>
      Javascript를 이용해 만든 날씨별 옷차림을 추천해 주는 웹 앱입니다. <br />
      상부 도시 이름을 눌러 GPS 초기화, 옆 아이콘을 눌러 사용자가 원하는 도시를
      설정할 수 있습니다. <br />
      화면은 3개의 섹션으로 나누어져 맨 위 온도와 날씨 부분을
      클릭하면 현재의 날씨 정보를 조회할 수 있습니다. 구름양, 자외선량, 강수량,
      적설량 등 날씨에 알맞게 사용자에게 제공됩니다. <br />
      두 번째 섹션은 옷차림과 날씨에 대한 팁을 알려주는 부분으로 slide로 제작되었
      으며 윗부분 태그를 클릭해 slide를 조작할 수 있습니다. <br />
      마지막 섹션은 오늘날의 시간대별 온도를 알려주며 클릭할 시 시간별 온도와
      이번 주 날씨 및 온도를 조회할 수 있습니다. 시간대별 온도는 Canvas를 이용해
      그래프로 보이도록 제작했습니다. <br />
      코디캐스터의 배경색 테마는 하늘의 색으로 기본적인 색은 하늘색이지만
      날씨에 따라 흐려지거나 일몰 시각에 맞춰 어두워지도록 시간과 날씨를
      직관적으로 알 수 있도록 제작했습니다.
    </p>
    `,
    day: "2021.11.05 ~ 2022.03.19",
    dev: "1인 프로젝트",
    git: "https://github.com/East-cloud-of-forest/Codicaster",
    url: "https://east-cloud-of-forest.github.io/Codicaster/",
  },
  {
    id: 4,
    img: require("../imgs/uiux.png"),
    name: "UI / UX 포트폴리오",
    engname: "",
    subname: "UI / UX 디자인 수료 후 제작한 포트폴리오",
    info: `
        <p>
          UI / UX 디자인 국비 지원 교육과정을 수료하며 제작했던 포트폴리오입니다. <br />
          가상으로 제작 및 퍼블리싱한 두개의 브랜드와 스킬 등을 소개하는 포트폴리오로
          가상 음악 SNS인 마이폴라리스트 의 빌드된 사이트, BI/BX, 웹 가이드 와 브랜드
          가이드를 살펴볼 수 있고, 가상 제주 한과 카페의 빌드 된 사이트와 웹 가이드를
          살펴볼 수 있습니다.
        </p>
    `,
    day: "2021.05 ~ 2021.08",
    dev: "1인 UI / UX 디자인 및 퍼블리싱",
    git: "",
    url: "https://ecof-portfolio-nare.netlify.app/",
  },
];

export default project;