import { useAppSelector } from "../../app/hooks";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import Timer from "./Timer";
import { selectPost } from "./postSlice";

const PostList = () => {
    const posts = useAppSelector(selectPost);

    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPost?.map((post) => {
      return(
        <article key={post.id}>
            <h3>{post.title }</h3>
            <p>{post.content.length >50 ? post.content?.substring(0, 50)+'...' : post.content}</p>
            <p className="postCredit">
              <PostAuthor userId = {post.userId}/>
              <Timer timeStamp={post.date}/>
            </p>
            <ReactionButton post={post}/>
        </article>
      )
    })
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList
