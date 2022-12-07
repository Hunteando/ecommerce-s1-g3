import '../App.css';
import LogoComponent from './header/LogoComponent';
import SearchBarComponent from './header/SearchBarComponent';
import BannerComponent from './header/BannerComponent';
import ProfileMenuComponent from './header/ProfileMenuComponent';

export const Header = () => {
 return (
  <div className='container'>
   <div className='header'>
    <LogoComponent />
    <SearchBarComponent />
    <ProfileMenuComponent />
   </div>
   <BannerComponent />
  </div>
 );
};
