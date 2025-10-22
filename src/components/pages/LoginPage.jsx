import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function LoginPage() {
  return (
    <div className="container" style={{ maxWidth: 420 }}>
      <h2>Login / Registro</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input label="Correo" type="email" placeholder="tú@correo.cl" />
        <Input label="Contraseña" type="password" placeholder="••••••" />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}
