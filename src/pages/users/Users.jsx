import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Users() {
  return (
    <div style={{ padding: 12 }}>
      <h1>Usuarios</h1>
      <nav style={{ marginBottom: 12 }}>
        <Link to="list" style={{ marginRight: 8 }}>Lista</Link>
        <Link to="create">Crear</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Users;