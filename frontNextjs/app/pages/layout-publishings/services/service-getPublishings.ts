async function getData() {
  const res = await fetch("http://localhost:8000/publishings", {
    // cache: "force-cache",
    // next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
export default getData;
