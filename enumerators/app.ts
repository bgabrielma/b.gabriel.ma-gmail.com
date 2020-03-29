enum Role {
  ADMIN = 5,
  READ_ONLY = 4,
  AUTHOR = 3
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Bruno",
  age: 30,
  hobbies: ["Sports", "Cookie"],
  role: Role.ADMIN
};
