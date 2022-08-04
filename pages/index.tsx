import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

interface Props {
  content: { attributes: FileContent };
}

interface FileContent {
  hero_title: string;
  hero_description: string;
}

const Home: NextPage<Props> = ({ content }) => {
  const { attributes } = content;

  return (
    <div className={styles.container}>
      <header>{attributes.hero_title}</header>
      <p></p>
    </div>
  );
};

export async function getStaticProps() {
  const content: Props = await require(`../content/pages/home.md`);

  return {
    props: { content }, // will be passed to the page component as props
  };
}

export default Home;
