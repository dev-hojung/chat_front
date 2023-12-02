import { Input } from '@/components/atom';
import { InputProps } from '@/types/atomPropsType';

interface LabelInputProps extends Omit<InputProps, 'className'> {
  label: string;
  inputClassName?: string;
}

export const LabelInput = (props: LabelInputProps) => {
  const { label, inputClassName, ...rest } = props;

  return (
    <>
      <label>{label}</label>
      <Input className={inputClassName} {...rest} />
    </>
  );
};
