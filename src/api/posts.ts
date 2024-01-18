import { client } from '../utils/fetchClient';

import { Post } from '../types/Post';

export const getPosts = async (userId: number) => {
  return client.get<Post[]>(`/posts?userId=${userId}`);
};