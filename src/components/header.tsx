export default function Navbar() {
  return (
    <>
      <div className="flex flex-row w-full bg-green-400 text-white drop-shadow-md h-20 items-center p-5 fixed top-0 z-10">
        <div className="flex flex-row flex-1 justify-start">
          <h1 className="text-xl font-bold">Cmax Blog</h1>
        </div>
        <div className="flex flex-row flex-1 justify-end gap-3">
          <a href="/">Archive</a>
          <a href="/">Top</a>
          <a href="/">About</a>
        </div>
      </div>
    </>
  )
}