import { InputProps } from '@/types/atomPropsType';
import { twMerge } from 'tailwind-merge';

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  const mergeClassName = twMerge(
    `active:outline-none focus:outline-none px-5 py-5 h-[30px] w-full`,
    className
  );

  return <input className={mergeClassName} {...rest} />;
};
