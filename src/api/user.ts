export type CreateUserParam = {
  email: string;
  name: string;
  password: string;
};

export const createUser = async (param: CreateUserParam) => {
  await fetch('http://localhost:52423/user', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(param),
  });
};
