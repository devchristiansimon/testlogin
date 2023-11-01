import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [benutzer, setBenutzer] = useState(null);
  const [passwort, setPasswort] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const login = async (event) => {
    // alert(benutzer + " " + passwort);
    event.preventDefault();
    router.push("/backend");
  };

  return (
    <div>
      <h2>Login</h2>
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
