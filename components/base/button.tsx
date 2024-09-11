import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonSize = 'large' | 'middle' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isRounded?: boolean;
}

export const Button = ({
  variant = 'primary',
  className = '',
  size = 'large',
  isRounded = true,
  children,
  ...props
}: ButtonProps) => {
  const defaultButtonStyle = clsx(
    'flex items-center justify-center box-border border font-bold',
    isRounded && 'rounded-[10px]'
  );

  const styleOnSize: Record<ButtonSize, string> = {
    large: 'h-[70px] text-lg',
    middle: 'h-[54px] text-base',
    small: 'h-[45px] text-base',
  };

  const styleOnVariant: Record<ButtonVariant, string> = {
    primary: 'bg-system-purple border-transparent text-white',
    secondary:
      'bg-system-purple border-system-purple text-white text-system-purple',
    tertiary: 'bg-system-gray border-transparent text-white',
  };

  const mergedClassNames = clsx(
    className,
    defaultButtonStyle,
    styleOnSize[size],
    styleOnVariant[variant]
  );

  return (
    <button className={mergedClassNames} {...props}>
      {children}
    </button>
  );
};
