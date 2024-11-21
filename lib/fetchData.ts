export async function fetchData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/categories`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return categories;
}
