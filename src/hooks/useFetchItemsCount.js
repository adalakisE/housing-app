import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// const URL = "http://localhost:5500"; //nodejs server; can be accessed with Live Server vscode extension
// const URL = "http://localhost:8080"; //springboot server
const URL = "https://fox-house-backend.onrender.com";

function useItemsCount() {
  const [itemsCount, setItemsCount] = useState("");
  const filters = useSelector((state) => state.appReducer.filters);

  const SearchQuery = Object.entries(filters)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  useEffect(() => {
    async function fetchItemsCount() {
      try {
        const response = await fetch(`${URL}/feed/items/count?` + SearchQuery);
        const data = await response.json();
        console.log(data.count.toString());
        setItemsCount(data.count.toString());
      } catch (error) {
        console.error("Error fetching items count:", error);
      }
    }

    fetchItemsCount();

    // Optionally, you can add dependencies if you want to refetch the count
    // whenever the search criteria changes
  }, [SearchQuery]);

  return itemsCount;
}

export default useItemsCount;
