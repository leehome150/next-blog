import axios from "axios";
import { useEffect, useState } from "react";

interface Acticle {
  title: string;
  data: string;
  id: number;
}
const usePosts = () => {
  const [posts, set_posts] = useState<Acticle[]>();
  useEffect(() => {
    axios.get("/api/v1/posts").then((res) => {
      set_posts(res.data);
    });
  }, []);
  return { posts };
};
export default usePosts;
