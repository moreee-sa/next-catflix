export default async function MovieSlug({
  params,
}: {
  params: Promise<{ slug: number }>
}) {
  const { slug } = await params
 
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}