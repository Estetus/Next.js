import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Card } from '@/components/Card/Card';
import { Htag } from '@/components/Htag/Htag';
import { Like } from '@/components/Like';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import type { IAppContext } from '@/context/app.context';
import type { Post, PostReviews } from '@/interfaces/posts.interface';
import { withLayout } from '@/Layout/HOCLayout';
import axios from 'axios';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { JSX } from 'react';
import { Reviews } from '@/components/Reviews/Reviews';


interface PostPageProps extends IAppContext {
  post: Post;
  reviews?: PostReviews[];
  [key: string]: unknown;
}

function PostPage (props: PostPageProps):JSX.Element {
      const { post, gitUrl, reviews } = props;
    return (
      <div>
        <Htag tag="h1">{post.title}</Htag>
        <BreadCrumbs size="m" />
        <Card className="card" size="m">
          <Paragraph size="m">{post.body}</Paragraph>
        </Card>
        <Like size="m" />
        <Htag tag="h1">Коментарии</Htag>
        <Reviews reviews={reviews} />
      </div>
    );

}

export default withLayout<PostPageProps>(PostPage);

export const getStaticPaths: GetStaticPaths = async()=> {
    const {data: posts} = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`);

    const paths = posts.slice(0, 10).map((p) => ({
        params: {id: p.id.toString()}
    }));

    return {
        paths,
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async({params}) => {
    const id = params?.id;

    try {
        const {data:post} = await axios.get<Post>(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`);
        const { data: reviews } = await axios.get<PostReviews[]>(
          `${process.env.NEXT_PUBLIC_DOMAIN}/comments?postId=${id}`
        );
        return {
          props: {
            post,
            reviews,
            gitUrl: 'https://github.com/Estetus/',
          },
        };
    }
    catch (e) {
        return {
            notFound:true
        };
    }
};