import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

const markdownDir = path.join(process.cwd(), "markdown");
export const getPosts = async () => {
  const fileNames = await fs.promises.readdir(markdownDir);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(markdownDir, fileName);
    const textName = fileName.replace(/\.md$/g, "");
    const text = fs.readFileSync(fullPath, "utf-8");
    const {
      data: { title, date, id },
      content,
    } = matter(text);
    return {
      title,
      date,
      textName,
      id,
    };
  });
  return posts;
};

export const getPost = async (name: string) => {
  const fullPath = path.join(markdownDir, name + ".md");
  const text = fs.readFileSync(fullPath, "utf-8");
  const {
    data: { title, date },
    content,
  } = matter(text);
  const htmlContent = marked(content);
  return JSON.parse(
    JSON.stringify({
      title,
      date,
      content,
      htmlContent,
    })
  );
};

export const getPostNames = async () => {
  const fileNames = await fs.promises.readdir(markdownDir);
  return fileNames.map((a) => a.replace(/\.md$/g, ""));
};
