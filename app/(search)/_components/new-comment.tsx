"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";


interface NewCommentProps {
  postId: string;
};

const NewComment = ({ postId }: NewCommentProps) => {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const onCommentSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    console.log("Comment submitted", comment);

    const reponse = await axios.post(`/api/posts/${postId}/comments`, {
      comment
    });

    setComment("");

    router.refresh();


  };

  return (
    <form
      className="my-0 mx-auto w-full rounded-sm bg-white shadow-sm p-2"
      onSubmit={onCommentSubmit}
    >
      <div className="flex flex-col gap-1">
        <div className="mb-[.5rem] flex-1 min-w-[10rem] flex flex-col">
          <h2 className="mb-1">Comment</h2>
          <textarea
            id="comment"
            name="comment"
            rows={5}
            onChange={(evt) => setComment(evt.target.value)}
            className="text-sm p-2 border border-slate-400 rounded-sm"
            value={comment}
          />
        </div>
        <div className="flex flex-row justify-end">
          <Button type="submit" size="sm" variant="outline">
            Post comment
          </Button>
        </div>
      </div>
    </form>
  );
}
 
export default NewComment;