import Post from "./post"

export default function Body() {

  //More prominent and important elements should be emphasized.

  const posts = [
    {
      title: "10 Tips for Aspiring DJ's",
      author: "DJ Cmax",
      estReadingTime: "20 min",
      published: "1/12/2024",
      contentPreview: "Have you ever found yourself lost in the rhythm of your favorite song, feeling the urge to mix beats and create something entirely new? Becoming a DJ isn't just about playing music; it's about crafting experiences, igniting emotions, and connecting with audiences through the power of sound",
      banner: "dj.jpg",
      likeCount: "48"
    },
    {
      title: "Learning FL Studio",
      author: "DJ Cmax",
      estReadingTime: "30 min",
      published: "10/23/2023",
      contentPreview: "Have you ever found yourself lost in the rhythm of your favorite song, feeling the urge to mix beats and create something entirely new? Becoming a DJ isn't just about playing music; it's about crafting experiences, igniting emotions, and connecting with audiences through the power of sound",
      banner: "fl_studio.jpg",
      likeCount: "48"
    },
    {
      title: "Recording Studios 101",
      author: "Martin Garrix",
      estReadingTime: "5 min",
      published: "9/14/2023",
      contentPreview: "Have you ever found yourself lost in the rhythm of your favorite song, feeling the urge to mix beats and create something entirely new? Becoming a DJ isn't just about playing music; it's about crafting experiences, igniting emotions, and connecting with audiences through the power of sound",
      banner: "recording_studio.jpg",
      likeCount: "48"
    }
  ]

  return (
    <>
      <div className="flex flex-col w-full items-center px-5 my-28 gap-10 dark:bg-slate-800">
        <h1 className="font-bold text-3xl">Posts by DJ CMax</h1>
        {posts.map(post => (
          <Post post={post} />
        ))}
      </div>
      
    </>
  )
}