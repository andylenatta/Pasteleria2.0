import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function PerfilPage() {
  const { user, updateUser, logout } = useAuth();
  const [form, setForm] = useState(user || {});

  if (!user) {
    return (
      <div className="text-center py-5">
        <h2>Debes iniciar sesión o registrarte</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
    alert("✅ Perfil actualizado correctamente");
  };

  return (
    <div className="container py-4">
      <h2>👤 Mi Perfil</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={form.email || ""}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            value={form.birthDate || ""}
            onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Código promocional</label>
          <input
            type="text"
            className="form-control"
            value={form.code || ""}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
          />
        </div>

        <button className="btn btn-primary">Guardar cambios</button>
        <button
          type="button"
          className="btn btn-outline-secondary ms-2"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </form>

      <div className="card p-3 mt-4">
        <h5>🎁 Descuentos activos</h5>
        <ul>
          {user?.discounts?.age50 && <li>50% por ser mayor de 50 años</li>}
          {user?.discounts?.felices50 && <li>10% de por vida (FELICES50)</li>}
          {user?.discounts?.duoc && <li>Torta gratis por correo Duoc</li>}
          {!user?.discounts && <li>No hay descuentos activos</li>}
        </ul>
      </div>
    </div>
  );
}
