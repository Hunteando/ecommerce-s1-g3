import { useGetUsers } from '../hooks/admin/useGetUsers';
import { User } from './User';

//Para ejecutar una funcion antes de renderizar
//podemos utilizar el hook useEffect
/* export const loader = () => {
 const usersAll = getUsers();

 return usersAll;
}; */

export const Users = () => {
 const { users } = useGetUsers();

 return (
  <>
   <h3 className='title__admin'>Administración de Usuarios</h3>
   {users.length ? (
    <table className='container__users'>
     <thead className='table__users'>
      <tr>
       <th className='user'>Usuario</th>
       <th className='email'>Correo</th>
       <th>Rol</th>
       <th>Acción</th>
      </tr>
     </thead>
     <tbody>
      {users.map((usuario, index) => (
       <User usuario={usuario} key={index} />
      ))}
     </tbody>
    </table>
   ) : (
    <p>No hay usuarios aún</p>
   )}
  </>
 );
};
