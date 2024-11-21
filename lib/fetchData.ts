export async function fetchData() {
  const temp = true;
  const apiUrl = temp
    ? 'https://dua-ruqah-production.up.railway.app'
    : 'http://localhost:3001';

  const res = await fetch(`${apiUrl}/categories`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return categories;
}
