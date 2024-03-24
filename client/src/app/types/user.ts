export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  rePass: string;
}

export interface Profile {
  username: string;
  email: string;
  savedBooks: string[];
  posts: string[];
}
