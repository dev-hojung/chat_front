import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;
  const mergeClassName = twMerge('bg-[#00e5e169] h-[40px]', className);

  return <button className={mergeClassName} {...rest} />;
};
