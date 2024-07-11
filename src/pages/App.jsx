import Button from "../Components/Elements/Button";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-800 flex justify-center items-center gap-4">
      <Button variant="bg-red-500" />
      <Button variant="bg-blue-500" />
      <Button variant="bg-sky-500" />
      <Button variant="bg-rose-500" />
    </div>
  );
}

export default App;
