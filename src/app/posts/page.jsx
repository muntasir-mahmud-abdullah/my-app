import Link from "next/link";

export async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
export default async function PostPage() {
  const posts = await getPost();
  console.log(posts);
  return (
    <div>
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id}>
            <p>{singlePost.title}</p>
            <p>{singlePost.body}</p>
            <Link href={`/posts/${singlePost.id}`}>
            Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
