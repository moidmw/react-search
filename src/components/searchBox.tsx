import { useCallback } from "react";
import debouce from "../helper/debouce";

type SearchEvent = {
  target: {
    value: string;
  };
};

const SearchBox = () => {
  const handleSearch = (e: SearchEvent) => {
    const searchTerm = e.target.value;
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const optimizedSeach = useCallback(debouce(handleSearch, 500), []);
  return <input type="search" onChange={optimizedSeach} />;
};

export default SearchBox;
