import { Card } from '@/components/Card/Card';
import { type JSX } from 'react';
import { withLayout } from '@/Layout/HOCLayout';
import { type GetStaticProps } from 'next';
import axios from 'axios';
import { type Post } from '@/interfaces/posts.interface';
import { useRouter } from 'next/router';


function Home({posts, gitUrl}: HomeProps): JSX.Element {
  const router = useRouter();

  const handleCardClick = (id:number) => {
    router.push(`/posts/${id}`);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      router.push(`/posts/${id}`);
    }
  };

  return (
    <> 
      { posts.map((p) => (
        <div key={p.id}
        role='article'
        tabIndex={0}
        onClick={() => handleCardClick(p.id)}
        onKeyDown={(e) => handleKeyDown(e, p.id)}
        aria-label='Карточка поста. Нажмите что бы открыть'
        >
        <Card size='s'>
          {p.title}
          {p.body}
        </Card>
        </div>
        
    
      ))
      }
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
   const { data: posts } = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`);
    
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