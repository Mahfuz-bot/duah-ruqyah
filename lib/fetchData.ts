export async function fetchData() {
  const res = await fetch("http://localhost:3001/categories", {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return categories;
}