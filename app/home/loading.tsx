import LoadingFilmContainer from "@/components/home/LoadingFilmContainer";
import { LOADINGCARD } from "@/lib/constants";

export default function Loading() {
  return (
    <LoadingFilmContainer n={LOADINGCARD} />
  )
}