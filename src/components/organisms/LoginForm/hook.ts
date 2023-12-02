'use client';
import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
  const { push } = useRouter();
  const onClickSignUp = () => {
    push('/signUp');
  };

  return { onClickSignUp };
};
