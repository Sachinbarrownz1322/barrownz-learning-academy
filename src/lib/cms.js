const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchPublicCms(path, fetchOptions = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);
  try {
    const res = await fetch(`${API_BASE_URL}/public/cms${path}`, {
      cache: 'no-store',
      ...fetchOptions,
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.success ? data : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
