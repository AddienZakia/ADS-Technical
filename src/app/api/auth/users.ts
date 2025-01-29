export const dataUsers = [
  {
    id: "1",
    email: "admin@example.com",
    username: "admin",
    password: "admin123",
  },
];

export function createUsers(username: string, email: string, password: string) {
  const newUser = {
    id: (dataUsers.length + 1).toString(),
    username,
    email,
    password,
  };

  dataUsers.push(newUser);

  return dataUsers;
}
