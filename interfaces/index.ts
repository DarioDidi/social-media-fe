import { ReactNode } from "react";

export interface ReactComponentProps {
  children: ReactNode
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  joinDate: string;
  followingCount: number;
  followersCount: number;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  content: string;
  createdAt: string;
  author: User;
  likes: number;
  liked: boolean;
  comments: Comment[];
  shares: number;
  shared: boolean;
  media?: Media[];
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: User;
  likes: number;
  liked: boolean;
}

export interface Media {
  type: 'image' | 'video' | 'gif';
  url: string;
  alt?: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'share';
  user: User;
  post?: Post;
  comment?: Comment;
  createdAt: string;
  read: boolean;
}
