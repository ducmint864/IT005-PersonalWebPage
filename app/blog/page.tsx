import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const BlogCard = ({children, _title} : {children: React.ReactNode, _title: string}) => {
    return (
      <div className="w-full h-1/5 bg-gray-900 rounded-3xl py-6 px-5">
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h1 className="mb-2 font-bold text-xl">{_title}</h1>
            <p className="font-semibold">by Minh N.</p>
          </div>
          <Image className="w-full h-full mb-4" src="/face.jpg" alt="img" width={300} height={100} />
          {children}<br/>
          <p>Click to see more...</p>
        </div>
      </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col p-2 gap-2">
      <h1 className="ml-2 mt-2 font-black text-3xl">Welcome to My Blogs</h1>
      <div className="flex flex-wrap p-4 gap-4">
        <BlogCard _title="Why IT isn't for you and you should definitely quit :DD">
          <p>Hello World, welcome to...</p>
        </BlogCard>
        <BlogCard _title="Top 10 career advices for IT students">
          <p>1. Go get some sunlight</p>
          <p>2. Sleep for at least 4 hrs/day (please):X</p>
          <p>3. Remember to talk to your friends/family occasionally (once a month should be good enough :[])</p>
          <p>...</p>
        </BlogCard>
      </div>
    </div>
  )
}