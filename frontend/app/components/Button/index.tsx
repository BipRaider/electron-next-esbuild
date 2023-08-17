'use client';

import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';
import { ButtonProps } from './props';

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, ...props }): React.JSX.Element => {
  return (
    <button {...props} className={cn(styles.btn, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
