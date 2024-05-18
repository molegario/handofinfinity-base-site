import Preview from "@/components/preview";
import { db } from "@/lib/db";
import Image from "next/image";
import { redirect } from "next/navigation";

const PostDetails = async ({ params }: { params: { postId: string } }) => {

  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
    include: {
      category: true,
      sections: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if(!post) {
    return redirect('/posts');
  }

  const humanReadableDate = new Date(post.createdAt).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // console.log("POSTS::", post);

  return (
    <>
      <div className="p-6 w-[80rem] h-full flex flex-col">
        <div className="flex items-end justify-between flex-none">
          <div className="flex flex-col gap-y-2 justify-start">
            <h1 className="text-4xl font-medium text-white">
              {post?.title || `untitled: postID: ${params.postId}`}
            </h1>
            <span className="text-white font-medium">by TheCommonNonsense</span>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-xl text-white font-semibold">
              {humanReadableDate}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-8 flex-1">
          <div className="space-y-6 border rounded-md border-slate-300 bg-stone-200 inset-3 p-4">
            <div>
              {post?.sections.map((section) => (
                <div key={section.id} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  {section.imageUrl && (
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      className="rounded-md mb-4"
                      layout="responsive"
                      width={250}
                      height={250}
                    />
                  )}
                  <Preview value={section.description || ""} />
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-md border-slate-100 bg-stone-300 inset-3 p-4">
            <div className="text-xl">
              {post?.imageUrl && (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-md mb-4"
                  layout="responsive"
                  width={250}
                  height={250}
                />
              )}
              <div className="flex justify-between">
                <h2 className="text-2xl mb-4">TLDR</h2>
                {
                  post?.category?.name && (
                    <h2>{post?.category?.name}</h2>
                  )
                }
              </div>
              <p>{post?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default PostDetails;