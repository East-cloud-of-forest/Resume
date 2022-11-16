import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Common';
import '../style/Error.scss'

const Error = () => {
  const nav = useNavigate()
  return (
    <div className="Error">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Button onClick={()=>{nav('/')}}>👈 돌아가기</Button>
    </div>
  );
};

export default Error;
