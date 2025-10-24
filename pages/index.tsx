import { Card } from '@/components/Card/Card';
import { type JSX } from 'react';
import { withLayout } from '@/Layout/HOCLayout';
import { type GetStaticProps } from 'next';
import axios from 'axios';
import { type Post } from '@/interfaces/posts.interface';
import Link from 'next/link';
import { motion } from 'framer-motion';



function Home({ posts, gitUrl }: HomeProps): JSX.Element {
  return (
    <>
      {posts.map((p, index) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={`/posts/${p.id}`}>
            <Card size="s">
              {p.title}
              {p.body}
            </Card>
          </Link>
        </motion.div>
      ))}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: posts } = await axios.get<Post[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/posts`
  );

  return {
    props: {
      posts: posts.slice(0, 10),
      gitUrl: 'https://github.com/Estetus/',
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  posts: Post[];
  gitUrl: string;
}
