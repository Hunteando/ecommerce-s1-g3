import search from '../../assets/icons/search.svg';

export default function SearchBarComponent() {
 return (
  <div className='search'>
   <input
    type='text'
    className='search__input'
    aria-label='search'
    placeholder='¿Qué deseas buscar?'
   />
   <button className='search__submit' aria-label='submit search'>
    <img className='search_logo' src={search} alt='logotipo' />
   </button>
  </div>
 );
}
