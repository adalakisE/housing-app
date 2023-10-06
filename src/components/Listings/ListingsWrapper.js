import React from "react";
import ListingCard from "./ListingCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import "./ListingsStyles.scss";

function ListingsWrapper() {
  const stateItems = useSelector((state) => state.appReducer.storedItems);
  const fetching = useSelector((state) => state.appReducer.fetching);
  const skeletonItems = [1, 2, 3, 4, 5];
  let items = [];
  let items2 = [];

  console.log(stateItems);

  /**
   * REFACTOR THIS COMPONENT
   * IT IS VERY VERBOSE
   * D R Y
   */

  if (stateItems.length && !fetching) {
    items = stateItems.map((item) => (
      <li key={item.id} className="listings__list">
        <ListingCard
          item={item}
          imgSrc={item.photoLink}
          title={item.title}
          description={item.description}
          size={item.sqFt}
          bedroom={item.bedrooms}
          price={item.price}
          area={item.area}
        />
      </li>
    ));
  } else if (fetching) {
    //FIX TO RUN THE SKELETON ON FETCH
    items2 = skeletonItems.map((item) => (
      <li key={item.id} className="listings__list--skeleton">
        <Stack spacing={1}>
          <div className="skeleton__container">
            <div className="skeleton__image">
              <Skeleton variant="rectangular" width={210} height={140} />
            </div>
            <div className="skeleton__content">
              <Skeleton variant="text" width={180} height={20} />
              <Skeleton variant="text" width={180} height={20} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} height={120} />
            </div>
          </div>
        </Stack>
      </li>
    ));
  }

  if (!fetching) {
    if (stateItems.length) {
      return (
        <div className="listings__container">
          <ul className="listings__ul">{items}</ul>
        </div>
      );
    } else if (!stateItems.length) {
      return (
        <div className="listings__no-results">
          <h1 style={{ paddingBottom: "20px" }}>No listings found</h1>
          <p>
            It seems that there are currently no properties matching this
            search. You can remove a filter or widen the search area to see more
            results, but also save your search and be notified of new listings
            with your criteria as soon as they are posted!
          </p>
        </div>
      );
    }
  } else if (fetching) {
    return (
      <div className="listings__container">
        <ul className="listings__ul">{items2}</ul>
      </div>
    );
  }
}

export default ListingsWrapper;
