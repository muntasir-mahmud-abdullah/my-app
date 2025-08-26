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

    export async function generateMetadata({ params}) {
  const id = (await params).id
 
  // fetch post information
  const post = await getSinglePost(id);
 
  return {
    title: post.title,
    description: post.body,
  }
}
