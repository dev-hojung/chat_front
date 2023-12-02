'use client';

import { Button } from '@/components/atom';
import { useLoginForm } from './hook';
import { LabelInput } from '@/components/mocules';

export const LoginForm = () => {
  const { onClickSignUp } = useLoginForm();

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('aaaaaaaaaaaaa');
      }}
    >
      <LabelInput label="이메일" type="text" />
      <LabelInput label="패스워드" type="password" />
      <div className="mt-[10px] flex flex-col gap-[10px]">
        <Button type="submit">로그인</Button>
        <Button type="button" onClick={onClickSignUp}>
          회원가입
        </Button>
      </div>
    </form>
  );
};
