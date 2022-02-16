/* eslint-disable prettier/prettier */
import { GetStaticProps } from 'next';
import Header from '../components/Header';
import Link from "next/link";
import { FiCalendar, FiUser } from "react-icons/fi"

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  <>
    <main className={commonStyles.container}>
      <Header />
      <div className={styles.posts}>
        <Link href="/">
          <a>
            <strong>Algo aqui</strong>
            <p>Algo aqui</p>
            <ul>
              <li>
                <FiCalendar />
                16 fev 2022
              </li>
              <li>
                <FiUser />
                Morena Nobre
              </li>
            </ul>
          </a>
        </Link>
      </div>
    </main>
  </>
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
