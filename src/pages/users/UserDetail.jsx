import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/usersService';
import Swal from 'sweetalert2';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (err) {
        console.error(err);
        Swal.fire('Error','No se pudo obtener información del usuario','error');
      }
    };
    load();
  }, [id]);

  if (!user) return <div>Cargando...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Usuario #{user.id}</h2>
      <p><strong>Username:</strong> {user.username ?? user.email}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default UserDetail;