import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import Nav from "./common/navbar/Navbar";
// import Script from 'next/script'
import Footer from "./common/footer/Footer";
import { QueryProvider } from "./queryClient";
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "D'Todo",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      // className='dark'
    >
      <body
      // className={inter.className}
      >
        <QueryProvider>
        <Providers>
          <Nav />  
         
          {children}

          <Footer/>
        </Providers>
        </QueryProvider>

        {/* <Script src="../node_modules/flowbite/dist/flowbite.min.js"></Script>    */}
        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js" ></Script> */}
      </body>
    </html>
  );
}
