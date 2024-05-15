import { Post } from "@prisma/client";
import Image from "next/image";

interface PostItemProps {
  post: Post;
};

const PostItem = ({post}: PostItemProps) => {
  return (
    <li className="shadow-md text-center rounded-md bg-slate-100">
      {!!post.imageUrl && (
        <div className="rounded-t-md max-h-[20rem] overflow-hidden w-full h-auto">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={300}
            height={200}
            className="object-cover rounded-t-md w-full"
          />
        </div>
      )}
      <div className="p-4 rounded-b-md">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </li>
  );
}
 
export default PostItem;