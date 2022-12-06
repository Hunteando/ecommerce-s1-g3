import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

export default function LogoComponent() {
 return (
  <Link to='/'>
   <img className='header__logo' src={logo} alt='logotipo' />
  </Link>
 );
}
