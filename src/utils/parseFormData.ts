import { FormEvent } from 'react';

export const parseFormData = <T>(e: FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.currentTarget).entries();

  const returnData: {
    [key in string]: FormDataEntryValue;
  } = {};

  for (const [key, value] of formData) {
    returnData[key] = value;
  }

  return returnData as T;
};
