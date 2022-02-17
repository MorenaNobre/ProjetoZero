import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img src="/Banner.png" alt="banner" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum Título</h1>
            <ul>
              <li>
                <FiCalendar />
                17 Fev 2022
              </li>
              <li>
                <FiUser />
                Darth Varder
              </li>
              <li>
                <FiClock />
                15 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Título sessão</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              corporis quas fugit numquam,{' '}
              <strong> totam minima recusandae quod </strong>provident id! Sed
              alias provident ducimus nemo quis placeat architecto, hic non
              assumenda a dolorem reprehenderit! Maiores ipsa cumque repellendus
              facilis minima <a href=""> veniam repellat placeat mollitia </a>
              fugiat quidem numquam consectetur dignissimos ab qui itaque
              nesciunt assumenda necessitatibus quibusdam blanditiis, tempora
              magnam autem. Eum, mollitia doloribus.{' '}
              <pre>
                {' '}
                Reiciendis, distinctio error. Dolores incidunt ratione similique
                nisi sed sapiente qui cum eum sunt<br/>ipsam consectetur, pariatur
                alias.
              </pre>
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
