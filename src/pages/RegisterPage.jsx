import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', birthDate: '', code: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const user = register(form);
    navigate('/');
  };

  return (
    <div className="card p-4">
      <h2>Registro</h2>
      <form onSubmit={onSubmit}>
        <Input label="Nombre" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <Input label="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <Input label="Fecha de nacimiento" type="date" value={form.birthDate} onChange={e => setForm({...form, birthDate: e.target.value})} required />
        <Input label="Código promocional (opcional)" value={form.code} onChange={e => setForm({...form, code: e.target.value.toUpperCase()})} />
        <button className="btn btn-primary">Registrarse</button>
      </form>
      <small className="text-secondary mt-2 d-block">
        * Usuarios mayores de 50 años reciben 50% de descuento. Código "FELICES50": 10% de por vida. Correos @duoc.cl: torta gratis en su cumpleaños (registro institucional).
      </small>
    </div>
  );
}
