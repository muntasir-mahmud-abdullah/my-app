import Link from "next/link";
import style from "./post.module.css";
import { Button } from "@/components/ui/button";
export async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export const metadata = {
  title: "All Posts",
  description: "trying to show all posts",
};

export default async function PostPage() {
  const posts = await getPost();
  console.log(posts);
  return (
    <div>
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id}>
            <p className={`${style["post-title"]}`}>{singlePost.title}</p>
            <p>{singlePost.body}</p>
            <Button asChild={true} variant={"ghost"} size={"lg"}>
              <Link href={`/posts/${singlePost.id}`}>Details</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
