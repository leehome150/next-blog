import usePosts from "lib/hooks/usePosts";
import { getPosts } from "lib/posts";
import { NextPage } from "next";
import Link from "next/link";

type Props = {
  posts: any[];
};
const posts: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <div className="content">
      <h1>文章列表</h1>
      <ul>
        {posts?.map((item) => {
          return (
            <Link href={`/posts/${item.title}`} key={item.title}>
              <a>
                <li key={item.title}>
                  {item.id}.{item.title}
                </li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default posts;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
};
