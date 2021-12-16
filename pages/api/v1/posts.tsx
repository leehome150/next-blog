import { getPosts } from "lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await getPosts();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(posts));
  res.end();
};

export default Posts;
