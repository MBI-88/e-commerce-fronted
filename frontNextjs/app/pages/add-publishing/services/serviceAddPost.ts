
const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN;


export async function AddPost(payload:any,token:string) {



  console.log(' PAYLOAD:', payload );
  console.log('token:',token)

  const url = `${domain}/users/create-publishing`;
  console.log(url)

  const config: RequestInit = {
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: payload,
     headers: {
  'Authorization': `${token}`,
  // 'Content-Type': 'multipart/form-data', 
},
    
  };


  return await (await fetch(url, config)).json();

 
}
