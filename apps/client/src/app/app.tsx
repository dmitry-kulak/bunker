import { useEffect, useState } from "react";
import { User } from "@prisma/client";

export function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((res: User[]) =>
        setResponse(res.map(({ email }) => email).join(", "))
      )
      .catch(() => setResponse("API IS NOT RESPONDING"));
  }, []);

  return <div style={{ fontSize: "10rem", fontWeight: 700 }}>{response}</div>;
}

export default App;
