import '@/app/app.scss';

import { useEffect } from 'react';

export function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${apiUrl}`);
      return response.json();
    };
    getData().then((data) => {
      console.log(data);
    });
  }, [apiUrl]);

  return <h1 className="class">Hello world!</h1>;
}

export default App;
