import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

export default function Login() {
  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/product";
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <AuthLayout title={"Login"} onSubmit={loginHandler}>
        <FormLogin />
      </AuthLayout>
    </div>
  );
}
