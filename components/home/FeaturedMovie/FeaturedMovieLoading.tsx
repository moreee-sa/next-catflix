'use client'

export default function FeaturedMovieLoading() {
  return (
    <div className="px-5 opacity-40">
      <div className="bg-gray-700 animate-pulse rounded-2xl flex flex-col justify-between relative">
        {/* Details */}
        <div className="rounded-2xl animate-pulse w-full h-[500px] max-lg:h-[250px] max-md:h-[300px] flex py-0 px-5 flex-col justify-end">
          {/* Title */}
          <div className="bg-gray-400 rounded-2xl h-[60px] w-[250px] max-lg:h-[36px] max-lg:w-[180px] animate-pulse" />
          {/* Description */}
          <div className="bg-gray-400 mt-[15px] h-[21px] max-w-[50vh] rounded-2xl animate-pulse" />
          <div className="bg-gray-400 mt-[5px] h-[21px] max-w-[45vh] rounded-2xl animate-pulse" />
        </div>
        {/* Actions */}
        <div className="w-full h-[200px] flex items-center gap-5 py-0 px-5 max-md:h-[120px] max-md:justify-center">
          {/* Buttons */}
          <div className="bg-gray-400 rounded-[8px] animate-pulse w-[164px] h-[56px] max-lg:w-[144px] max-lg:h-[42px]" />
          <div className="bg-gray-400 rounded-[8px] animate-pulse w-[164px] h-[56px] max-lg:w-[144px] max-lg:h-[42px]" />
        </div>
      </div>
    </div>
  )
}