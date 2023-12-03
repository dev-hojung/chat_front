import { CreateUserParam } from '@/api/user';

export type SubmitFormData = CreateUserParam & {
  passwordConfirm: string;
};
