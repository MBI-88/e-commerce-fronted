import Nav from "@/app/common/navbar/Navbar";
import FormSignin from "./components/FormSignin";
// import FormLogin from "./components/FormLogin";

async function Signin() {
  return (
    <>

      <main>
        <FormSignin />
        {/* <FormLogin/> */}
      </main>
    </>
  );
}

export default Signin;
