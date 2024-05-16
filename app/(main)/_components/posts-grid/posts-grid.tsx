import { Post } from "@prisma/client";
import PostItem from "./post-item";

interface PostsGridProps {
  posts: Post[];
};

const PostsGrid = ({
  posts=[],
}: PostsGridProps) => {
  return (
    <ul 
      className="list-none gap-[1.5rem] content-center m-0 p-0 grid"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))"
      }}
    >
      {
        posts.map(post=>{
          return <PostItem key={post.id} post={post} />;
        })
      }
    </ul>
  );
}
 
export default PostsGrid;