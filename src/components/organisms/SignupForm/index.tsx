'use client';

import { Button } from '@/components/atom';
import { LabelInput } from '@/components/mocules';

export const SignupForm = () => {
  return (
    <form
      className="flex flex-col gap-[10px]"
      onSubmit={async (e) => {
        e.preventDefault();
      }}
    >
      <LabelInput label="이메일" type="text" />
      <LabelInput label="이름" type="text" />
      <LabelInput label="패스워드" type="password" />
      <LabelInput label="패스워드 확인" type="password" />

      <div className="mt-[10px] flex flex-col gap-[10px]">
        <Button type="submit">회원가입</Button>
      </div>
    </form>
  );
};
