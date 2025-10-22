import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <label style={{ display: 'block', marginBottom: '0.75rem' }}>
      {label && <div style={{ marginBottom: 6 }}>{label}</div>}
      <input
        {...props}
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '6px',
          border: '1px solid #e0dcd7',
          fontSize: '1rem'
        }}
      />
    </label>
  );
}
