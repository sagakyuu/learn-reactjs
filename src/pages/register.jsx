import FormRegister from "../Components/Fragments/FromRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

export default function Register() {
  function registerHandler(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log("Register button click");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <AuthLayout title={"Register"} onSubmit={registerHandler}>
        <FormRegister />
      </AuthLayout>
    </div>
  );
}
