import React from 'react'
export async function getSinglePost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
export default async function singlePost({params}) {
    const singlePost = await params;
    const singlePostData = await getSinglePost(singlePost.id);

  return (
    <div>
        <p>{singlePostData.title}</p>
        <p>{singlePostData.body}</p>
    </div>
  )
}
