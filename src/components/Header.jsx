import '../style/Header.scss'
import { Button } from './Common';

const Header = () => {
  return (
    <div className="Header">
      <div className='inner'>
        <Button>asdasd</Button>
        <nav>
          <span>resume</span>
          <span>project</span>
        </nav>
        <Button white circle width="37px">달</Button>
      </div>
    </div>
  );
}

export default Header;