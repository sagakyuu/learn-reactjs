import { useEffect, useState } from "react";
import { getDataToken } from "../service/auth.service";

export default function useLogin() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    token
      ? setUsername(getDataToken(token))
      : (window.location.href = "/login");
  }, []);

  return username;
}
