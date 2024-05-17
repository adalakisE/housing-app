import React from "react";
import { useSelector } from "react-redux";
import ListingCard from "./ListingCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./ListingsStyles.scss";

const ListingsWrapper = () => {
  const stateItems = useSelector((state) => state.appReducer.storedItems);
  const fetching = useSelector((state) => state.appReducer.fetching);
  const skeletonItems = [
    { id: 1, key: "skeleton1" },
    { id: 2, key: "skeleton2" },
    { id: 3, key: "skeleton3" },
    { id: 4, key: "skeleton4" },
  ];

  const isMobile = useMediaQuery("(max-width:480px)");

  const renderListings = () => {
    if (fetching) {
      return skeletonItems.map((item) => (
        <li key={item.key} className="listings__list--skeleton">
          <Stack spacing={1}>
            <div className="skeleton__container">
              <div className="skeleton__image">
                <Skeleton variant="rectangular" width={210} height={140} />
              </div>
              <div className="skeleton__content">
                <Skeleton variant="text" width={180} height={20} />
                <Skeleton variant="text" width={180} height={20} />
                {isMobile ? null : (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    height={120}
                  />
                )}
              </div>
            </div>
          </Stack>
        </li>
      ));
    }

    if (stateItems.length) {
      return stateItems.map((item) => (
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
    }

    return (
      <div className="listings__no-results">
        <h1 style={{ paddingBottom: "20px" }}>No listings found</h1>
        <p>
          It seems that there are currently no properties matching this search.
          You can remove a filter or widen the search area to see more results,
          but also save your search and be notified of new listings with your
          criteria as soon as they are posted!
        </p>
      </div>
    );
  };

  return (
    <div className="listings__container">
      <ul className="listings__ul">{renderListings()}</ul>
    </div>
  );
};

export default ListingsWrapper;
