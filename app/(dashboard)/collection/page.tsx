"use client";

import { log } from "console";
import { useEffect, useState } from "react";

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  const getCOllections = async () => {
    try {
      const res = await fetch("api/collections", {
        method: "GET",
      });

      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[getCOllections_GET]", err);
    }
  };

  useEffect(() => {
    getCOllections();
  }, []);

  console.log(collections);

  return <div>Collections</div>;
};

export default Collections;
