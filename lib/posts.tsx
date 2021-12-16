import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), "markdown");
  const fileNames = await fs.promises.readdir(markdownDir);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(markdownDir, fileName);
    const textName = fileName.replace(/\.md$/g, "");
    const text = fs.readFileSync(fullPath, "utf-8");
    const {
      data: { title, date },
      content,
    } = matter(text);
    return {
      title,
      date,
      textName,
    };
  });
  return posts;
};
