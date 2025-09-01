'use client'

export default function MovieLoadingSkeleton() {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col md:flex-row w-full">
        {/* Backdrop */}
        <div className="bg-gray-700 animate-pulse w-full md:w-3/5 h-[50vh] md:rounded-l-lg rounded-t-lg md:rounded-t-none" />

        {/* Details Panel */}
        <div className="bg-[#160023] w-full md:w-2/5 p-5 flex flex-col gap-4">
          {/* Titolo */}
          <div className="bg-gray-400 animate-pulse w-3/5 h-[50px] rounded-2xl" />

          {/* Dettagli */}
          <div className="w-2/5 h-4" />
          <div className="bg-gray-500 animate-pulse w-1/3 h-4 rounded-lg" />

          {/* Pulsante */}
          <div className="bg-gray-400 animate-pulse w-[144px] h-[42px] rounded-lg" />

          {/* Overview */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="bg-gray-400 animate-pulse w-full h-4 rounded-lg" />
            <div className="bg-gray-400 animate-pulse w-11/12 h-4 rounded-lg" />
            <div className="bg-gray-400 animate-pulse w-10/12 h-4 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}