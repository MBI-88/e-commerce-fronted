

import { notFound } from "next/navigation";

//ssr
async function getData(id: number) {
  const res = await fetch(`http://localhost:8000/publishings/${id}`, {
    // cache:'no-cache',
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}


export default getData