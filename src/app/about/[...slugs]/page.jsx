import React from 'react'

export default async function AboutSlugPages({params}) {
    const {slugs} = await params;
    console.log(slugs)
  return (
    <h1>AboutSlugPages : {slugs}</h1>
  )
}
