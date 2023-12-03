'use client';

import { Button } from '@/components/atom';
import { LabelInput } from '@/components/mocules';
import { parseFormData } from '@/utils/parseFormData';
import { SubmitFormData } from './type';
import { createUser } from '@/api/user';
import { SHA256 } from 'crypto-js';

export const SignupForm = () => {
  return (
    <form
      id="signup"
      className="flex flex-col gap-[10px]"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = parseFormData<SubmitFormData>(e);
        if (formData.password !== formData.passwordConfirm) {
          alert('비밀번호가 같지 않습니다.');
          return;
        }
        await createUser({
          name: formData.name,
          email: formData.email,
          password: SHA256(formData.password).toString(),
        });
      }}
    >
      <LabelInput label="이메일" type="email" name="email" />
      <LabelInput label="이름" type="text" name="name" />
      <LabelInput label="패스워드" type="password" name="password" />
      <LabelInput label="패스워드 확인" type="password" name="passwordConfirm" />
      <div className="mt-[10px] flex flex-col gap-[10px]">
        <Button type="submit">회원가입</Button>
      </div>
    </form>
  );
};
