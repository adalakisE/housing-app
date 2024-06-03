import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { storeItems, fetching } from "@/redux/actions/toDoActions";

// const URL = "http://localhost:5500"; //nodejs server;
// const URL = "http://localhost:8080"; //springboot server
const URL = "https://fox-house-backend.onrender.com";

function useFetchItems(stateTitle) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams({ title: "" });

  const fetchItems = async () => {
    dispatch(fetching(true));
    navigate(`/mainpage/search${location.search}`);

    if (!location.search.includes("Price")) return; // workaround, find a better solution
    try {
      const response = await fetch(`${URL}/feed/items/${location.search}`);
      const data = await response.json();
      dispatch(storeItems(data));
    } catch (error) {
      console.log(error);
    }

    dispatch(fetching(false));
  };

  const setParams = () => {
    setSearchParams((prev) => {
      prev.set("title", stateTitle);
      return prev;
    });
  };

  useEffect(() => {
    if (location.search.length) {
      fetchItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return { setParams };
}

export default useFetchItems;
