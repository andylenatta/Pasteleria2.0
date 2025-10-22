import React from 'react';
import classNames from 'classnames';

export default function Button({ children, variant = 'primary', onClick, ...rest }) {
  const cls = classNames('btn', {
    'btn--primary': variant === 'primary',
    'btn--ghost': variant === 'ghost'
  });

  return (
    <button className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
