import styles from "../styles/Home.module.scss";
import img from "assets/images/1.png";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import UAParser from "ua-parser-js";

interface Props {
  browser: {
    name: string;
    version: string;
    major: string;
  };
}
const Index: NextPage<Props> = (props) => {
  const { browser } = props;
  return (
    <div className={styles.container}>
      <h1>
        你的浏览器是{browser.name},版本为{browser.version}
      </h1>
      <img src={img} alt="" />
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers["user-agent"];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
    },
  };
};
