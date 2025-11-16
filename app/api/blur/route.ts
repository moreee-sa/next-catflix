import { getBlurData } from '@/lib/getBlurData';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return new Response(JSON.stringify({ blurDataURL: null }), { status: 400 });

  try {
    const blurDataURL = await getBlurData(url);
    return new Response(JSON.stringify({ blurDataURL }));
  } catch {
    return new Response(JSON.stringify({ blurDataURL: null }));
  }
}