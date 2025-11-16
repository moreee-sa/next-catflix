import { MovieArchiveType } from "@/lib/constants"
import { APIURL } from "@/lib/constants";
import Image from "next/image"
import { MOBILEBREAKPOINT } from "@/lib/constants";
import Link from "next/link";

type ArchiveGridProps = {
  archive: MovieArchiveType;
}

export default function ArchiveGrid({ archive }: ArchiveGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4">
      {archive.results.map((movie, i) => (
        <Link key={movie.id_tmdb} href={`/movie/${movie.id_tmdb}`}>
          <div className="h-[250px] relative rounded-2xl overflow-hidden">
            <Image
              src={`${APIURL}/poster/${movie.poster_path}`}
              alt={movie.title}
              fill
              priority={i === 0}
              sizes={`(max-width: ${MOBILEBREAKPOINT}) 50vw, 200px`}
              style={{ objectFit: "cover" }}
              className="rounded-2xl w-full z-10"
            />
            <div className="absolute inset-0 bg-gray-400 animate-pulse rounded-2xl" />
          </div>
        </Link>
      ))}
    </div>
  )
}