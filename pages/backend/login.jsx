import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [benutzer, setBenutzer] = useState(null);
  const [passwort, setPasswort] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const login = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/login", {
        benutzer,
        passwort,
      });
      router.push("/backend");
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <h2>Login fehlgeschlagen!</h2>}
      <div>
        <form>
          <input type="text" onChange={(e) => setBenutzer(e.target.value)} />
          <input
            type="password"
            onChange={(e) => setPasswort(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </form>
      </div>
    </div>
  );
}
