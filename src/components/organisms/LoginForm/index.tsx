'use client';

import { Button, Input } from '@/components/atom';
import { useLoginForm } from './hook';

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
      <div>이메일</div>
      <Input type="text" />
      <div>패스워드</div>
      <Input type="password" />
      <div className="mt-[10px] flex flex-col gap-[10px]">
        <Button type="submit">로그인</Button>
        <Button type="button" onClick={onClickSignUp}>
          회원가입
        </Button>
      </div>
    </form>
  );
};
