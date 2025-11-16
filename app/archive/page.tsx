import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';
import { APIURL } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { MovieArchiveType } from '@/lib/constants';
import { getBlurData } from '@/lib/getBlurData';
import ArchiveInfinite from '@/components/archive/ArchiveInfinite';

let page: number = 1;
const limit: number = 30;

export default async function Archive() {
  let list_movie: MovieArchiveType;

  try {
    const res = await fetch(`${APIURL}/archive?page=${page}&limit=${limit}`);

    if (!res || !res.ok) notFound();
    list_movie = await res.json();

    list_movie.results = await Promise.all(
      list_movie.results.map(async (movie) => {
        const imgUrl = `${APIURL}/poster/${movie.poster_path}`;
        try {
          const blurDataURL = await getBlurData(imgUrl);
          return { ...movie, blurDataURL };
        } catch {
          return { ...movie };
        }
      })
    );
  } catch {
    notFound();
  }

  return (
    <ArchiveInfinite initialArchive={list_movie} limit={limit} />
  );
}