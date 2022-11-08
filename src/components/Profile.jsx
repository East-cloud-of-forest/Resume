import '../style/Profile.scss'
import { Button, Title } from './Common';

const Profile = () => {
  const contect = [
    {
      icon : '&#128231;',
      kind : '이메일',
      url : 'ecof1911@gmail.com'
    },
    {
      icon : '&#127968;',
      kind : '블로그',
      url : 'https://velog.io/@ecof_'
    },
    {
      icon : '&#128218;',
      kind : '깃허브',
      url : 'https://github.com/East-cloud-of-forest'
    },
  ]

  return (
    <div className="Profile">
      <Title>임동운 <span>(Ecof)</span></Title>
      <p className='intro'>문구문구 문구 문구문 문구문 문구문.</p>
      <p>
      군영과 청춘 있는 내는 원대하고, 이상은 꽃이 하는 인간이 것이다.<br />
      청춘 밥을 우리 우리는 불어 위하여서 있는 이것이다. 천자만홍이 오아이스도 그들의 위하여 황금시대다. <br />
      두기 힘차게 실현에 전인 용기가 찾아 말이다. 품으며, 따뜻한 오직 노래하며 봄바람이다. <br />
      </p>
      <ul>
        {contect.map(x=>(
          <li key={x.kind} onClick={()=>{
            if (x.kind === '이메일') {
              window.location.href = "mailto:ecof1911@gmail.com"
            } else {
              window.open(x.url)
            }
          }}><Button><span dangerouslySetInnerHTML={{__html: x.icon }} /> {x.kind} <span className='url'>{x.url}</span></Button></li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;