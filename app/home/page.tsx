export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <h1>Hello Next.js!</h1>
}