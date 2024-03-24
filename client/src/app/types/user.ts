export interface UserForAuth {
  _id: string;
  email: string;
  password: string;
}

export interface Profile {
  email: string;
  savedBooks: string[];
  posts: string[];
}
