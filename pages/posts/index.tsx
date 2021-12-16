import usePosts from "lib/hooks/usePosts";

const posts = () => {
  const { posts } = usePosts();
  return (
    <div>
      <h1>文章列表</h1>
      {posts?.map((item) => {
        return <div key={item.title}>{item.title}</div>;
      })}
    </div>
  );
};

export default posts;
