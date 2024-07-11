import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <AuthLayout title={"Login"}>
        <FormLogin />
      </AuthLayout>
    </div>
  );
}
