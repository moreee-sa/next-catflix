export default function SliderMovieLoading() {
  return (
    <div className="relative opacity-40">
      <div className="m-5 bg-gray-400 rounded-2xl h-[25px] w-[150px] max-lg:w-[140px] animate-pulse" />
      <div className="flex gap-5 h-[250px] mt-5 overflow-hidden whitespace-nowrap">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}
            className="bg-gray-400 animate-pulse rounded-2xl h-[250px] aspect-[9/16]"
            style={{ marginLeft: i === 0 ? "20px" : "0" }}
          />
        ))}
      </div>
    </div>
  )
}