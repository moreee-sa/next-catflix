import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(url: string) {
  const buffer = await fetch(url).then(res => res.arrayBuffer());
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));
  return base64;
}