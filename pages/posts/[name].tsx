import { getPost, getPostNames } from "lib/posts";
import { NextPage } from "next";

interface Props {
  post: {
    content: string;
    title: string;
    htmlContent: string;
  };
}
const Post: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <h1>{props.post.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: post.htmlContent }}></section>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const nameList = await getPostNames();
  return {
    paths: nameList.map((name) => ({
      params: { name: name },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (q: any) => {
  const name = q.params.name;
  const post = await getPost(name);
  return {
    props: {
      post: post,
    },
  };
};
