import { useEffect } from 'react';

import '@/app/app.scss';

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
  }, []);

  return <div className="class">Hello world!</div>;
}

export default App;
