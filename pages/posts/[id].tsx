import { BreadCrumbs } from "@/components/BreadCrumbs/BreadCrumbs";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Htag } from "@/components/Htag/Htag";
import { Like } from "@/components/Like";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { TimeTag } from "@/components/TimeTag";
import { IAppContext } from "@/context/app.context";
import { Post } from "@/interfaces/posts.interface";
import { withLayout } from "@/Layout/HOCLayout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { JSX } from "react";

interface PostPageProps extends IAppContext {
    post: Post;
}

function PostPage (props: PostPageProps):JSX.Element {
      const { post, gitUrl } = props;
    return (
        <div>
        <Htag tag="h1">{post.title}</Htag>
         <TimeTag>3 минуты</TimeTag>
        <BreadCrumbs size="m"/>
        <Card className="card">
            <Paragraph size="s">
                {post.body}
            </Paragraph>
        </Card>
        <Like size="m" />
        </div>
    )

}

export default withLayout<{post: Post}>(PostPage);

export const getStaticPaths: GetStaticPaths = async()=> {
    const {data: posts} = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`)

    const paths = posts.slice(0, 10).map((p) => ({
        params: {id: p.id.toString()}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async({params}) => {
    const id = params?.id;

    try {
        const {data:post} = await axios.get<Post>(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`)
        return {
            props: {
                post,
                gitUrl: 'https://github.com/Estetus/'
            }
        }
    }
    catch (e) {
        return {
            notFound:true
        }
    }
}