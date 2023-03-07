import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import AuthorCard from "./AuthorCard";

function App() {
  const { getAuthors } = useContentful();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => {
      setAuthors(response);
    });
  }, []);

  return (
    <div>
      <h1>Hi</h1>
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </div>
  );
}

export default App;
