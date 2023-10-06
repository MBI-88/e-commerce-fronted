
import { NextResponse } from "next/server"
import { sendMail } from "./service/mailService";

export const POST = async (req: Request) => {

  const { code,email:toEmail } = await req.json();

  console.log(code, toEmail)
  

try {

   const result = await   sendMail({toEmail,code})

   console.log(result)
 
   return NextResponse.json({ message: "code    sended succesfully" }, { status: 200 });
  
} catch (error) {
  console.log(error)
      return new NextResponse(' error sending email',{status:500})

}

}
