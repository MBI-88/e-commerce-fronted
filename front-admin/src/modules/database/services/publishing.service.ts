import SetToken from "@/common/helpers/setHeaders";

const domain = import.meta.env.VITE_SERVER_DOMAIN;

export async function GetPublishings(page: number, page_size: number) {
  const url = `${domain}/admin/get-publishings?${page}&${page_size}`;
  const headers = {
    Authorization: SetToken(),
    "Content-Type": "application/json",
  };
  const res = await fetch(url, {
    method: "GET",
    headers,
  });

  return res;
}

export async function SearchCategory(
  category = "",
  subcategory = "",
  product_name = "",
  brand = "",
  page: number,
  page_size: number
) {
  const url = `${domain}/admin/get-publishings?category=${category}&subcategory=${subcategory}&product_name=${product_name}&brand=${brand}&${page}&${page_size}`;
  const headers = {
    Authorization: SetToken(),
    "Content-Type": "application/json",
  };
  const resp = await fetch(url, {
    method: "GET",
    headers,
  });

  return resp;
}

export async function CreatePublishing(publishing: FormData) {
  const url = `${domain}/admin/create-publishing`;
  const headers = {
    Authorization: SetToken(),
  };
  const resp = await fetch(url, {
    method: "POST",
    headers,
    body: publishing,
  });
  return resp;
}

export async function UpdatePublishing(publishing: FormData) {
  const url = `${domain}/admin/update-publishing`;
  const headers = {
    Authorization: SetToken(),
  };
  const resp = await fetch(url, {
    method: "PATCH",
    headers,
    body: publishing,
  });
  return resp;
}

export async function DeletePublishing(publishing: any) {
  const url = `${domain}/admin/delete-publishing`;
  const headers = {
    Authorization: SetToken(),
    "Content-Type": "application/json",
  };
  const resp = await fetch(url, {
    method: "DELETE",
    headers,
    body: JSON.stringify(publishing),
  });
  return resp;
}
