import { useEffect, useState } from 'react';

export function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then((res: { message: string }) => setResponse(res.message));
  }, []);

  return <div>{response}</div>;
}

export default App;
