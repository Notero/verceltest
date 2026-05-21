/**
 * Helpers for resolving Supabase Storage object paths to public URLs.
 * Public buckets serve objects at:
 *   <SUPABASE_URL>/storage/v1/object/public/<bucket>/<path>
 *
 * We build the URL by string concatenation rather than calling
 * `supabase.storage.from(...).getPublicUrl(...)` to avoid an unnecessary
 * client instantiation on every render.
 */

export const NEWS_IMAGES_BUCKET = "news-images";

function publicObjectUrl(bucket: string, path: string): string | null {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;
  return `${base.replace(/\/$/, "")}/storage/v1/object/public/${bucket}/${path}`;
}

export function newsImageUrl(path?: string | null): string | null {
  if (!path) return null;
  return publicObjectUrl(NEWS_IMAGES_BUCKET, path);
}

/** Resolves the displayable cover URL for a news item: bucket path first,
 * legacy `cover_image` URL as fallback, `null` if neither is set. */
export function resolveNewsCover(item: {
  cover_image: string | null;
  cover_image_path?: string | null;
}): string | null {
  return newsImageUrl(item.cover_image_path) ?? item.cover_image;
}
