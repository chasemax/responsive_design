
type Props = {
  post: {
    title: string;
    author: string;
    estReadingTime: string;
    published: string;
    contentPreview: string;
    banner: string;
    likeCount: string;
  }
  
}

export default function Post({post} : Props) {
  return (
    <>
      <div className="w-full flex flex-col bg-white rounded-2xl drop-shadow-md overflow-hidden h-96 max-w-xl lg:flex-row lg:h-fit lg:max-w-5xl">
        <div className="basis-3/5 relative overflow-hidden lg:order-2 lg:basis-2/5">
          <img className="absolute object-cover w-full h-full" alt="a something or other" src={`/${post.banner}`} />
          <div className="absolute bg-opacity-50 bg-white bottom-7 right-0 pr-2 pl-3 rounded-l-full">
            {post.estReadingTime} read
          </div>
        </div>
        <div className="basis-2/5 w-full flex flex-col p-5 z-10 justify-between gap-3 lg:basis-3/5">
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-row w-full items-end gap-5 justify-between">
              <h2 className="text-lg md:text-2xl font-bold">{post.title}</h2>
              <h3 className="italic">by {post.author}</h3>
            </div>
            <p className="line-clamp-2 lg:line-clamp-4">{post.contentPreview}</p>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div>
              Published: {post.published}
            </div>
            <div>
              Likes: {post.likeCount}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}