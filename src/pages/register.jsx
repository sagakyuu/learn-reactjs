import FormRegister from "../Components/Fragments/FromRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

export default function Register() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <AuthLayout title={"Register"}>
        <FormRegister />
      </AuthLayout>
    </div>
  );
}
