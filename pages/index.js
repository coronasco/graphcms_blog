import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'

import {FeaturedPosts} from '../sections/'

export default function Home({posts}) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Daniel Zaharia | Websites and Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-start'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(post => <PostCard key={post.node.title} post={post.node}/> )}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {posts}
  }
}