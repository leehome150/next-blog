import styles from "../styles/Home.module.css";
import img from "assets/images/1.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/posts/first-post">
        <a>Next.js!</a>
      </Link>
      <img src={img} alt="" />
    </div>
  );
}
