export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  const n: number = 50;

  return (
    <div
      className="grid gap-4 p-5 justify-center"
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
          className="bg-amber-100 rounded-2xl"
          style={{ height: "300px", width: "100%" }}
        ></div>
      ))}
    </div>
  );
}