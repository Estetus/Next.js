import { Card } from '@/components/Card/Card';
import { type JSX } from 'react';
import { withLayout } from '@/Layout/HOCLayout';
import { type GetStaticProps } from 'next';
import axios from 'axios';
import { type Post } from '@/interfaces/posts.interface';
import Link from 'next/link';


function Home({posts, gitUrl}: HomeProps): JSX.Element {

  return (
    <> 
      { posts.map((p) => (
        <Link key={p.id} href={`/posts/${p.id}`}>
        <Card >
          {p.title}
          {p.body}
        </Card>
        </Link>
      ))
      }
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
   const { data: posts } = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`)
  return {
    props: {
      posts: posts.slice(0, 10),
      gitUrl: 'https://github.com/Estetus/'
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  posts: Post[];
  gitUrl: string;
}