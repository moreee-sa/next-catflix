import { FaGithub } from "react-icons/fa";

export default function InfoBanner() {
  return (
    <div className="w-full gap-10 p-10 bg-[#040019] flex items-center justify-center">
      <div className="h-52">
        <FaGithub className="w-full h-full" size={64} color="white" />
      </div>
      <div className="bg-amber-300">
        <h1>Titolo</h1>
        <p>Descrizione</p>
      </div>
    </div>
  )
}