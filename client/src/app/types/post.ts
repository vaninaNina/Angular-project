import { UserForAuth } from "./user";
export interface Post {
  _id: string;
  title: string;
  text: string;
  imageUrl: string;
  author: UserForAuth;
  comments: string[];
  likes: string;
  _ownerId: string;
}
