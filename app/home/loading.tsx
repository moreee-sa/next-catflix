'use client'

export default function Loading() {
  const n: number = 20;
  return (
    <div
      className="grid gap-4 p-5 justify-center opacity-40"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        maxWidth: "100%",
        margin: "0 auto",
      }}
      >
      {Array.from({ length: n }).map((_, i) => (
        <div
        key={i}
        className="bg-amber-100 rounded-2xl animate-pulse"
        style={{ height: "300px", width: "100%" }}
        ></div>
      ))}
    </div>
  )
}