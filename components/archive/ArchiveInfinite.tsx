'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MovieArchiveType } from '@/lib/constants';
import ArchiveGrid from '.';
import { APIURL } from '@/lib/constants';

type ArchiveInfiniteProps = {
  initialArchive: MovieArchiveType;
  limit: number;
};

export default function ArchiveInfinite({ initialArchive, limit }: ArchiveInfiniteProps) {
  const [archive, setArchive] = useState<MovieArchiveType>(initialArchive);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadNextPage = useCallback(async () => {
    setLoading(true);
    const nextPage = page + 1;

    try {
      const res = await fetch(`${APIURL}/archive?page=${nextPage}&limit=${limit}`, {
        cache: 'no-store',
      });
      if (!res.ok) return;

      const newData: MovieArchiveType = await res.json();

      setArchive((prev) => ({
        ...newData,
        results: [...prev.results, ...newData.results],
      }));
      setPage(nextPage);
    } catch (err) {
      console.error('Errore fetch nuova pagina', err);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  // IntersectionObserver per rilevare quando l'utente scrolla in fondo
  useEffect(() => {
    const currentRef = loaderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && archive.has_next && !loading) {
          loadNextPage();
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [archive, loading, loadNextPage]);

  return (
    <div className="px-5">
      <h1 className="text-white text-2xl mb-4">Archivio</h1>
      <ArchiveGrid archive={archive} />
      {archive.has_next && (
        <div
          ref={loaderRef}
          className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-4"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-400 animate-pulse rounded-2xl w-full h-[250px]"
            />
          ))}
        </div>
      )}
    </div>
  );
}