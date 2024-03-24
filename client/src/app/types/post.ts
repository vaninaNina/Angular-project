import { User } from "./user";
export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  comments: string[];
}
