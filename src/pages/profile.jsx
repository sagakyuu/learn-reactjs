import useLogin from "../lib/hooks/useLogin";

export default function Profile() {
  const username = useLogin();

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <h1 className="text-3xl font-mono font-bold">{username}</h1>
    </div>
  );
}
