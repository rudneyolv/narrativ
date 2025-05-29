/** @format */

import MediaSlide from "@/components/MediaSlide/MediaSlide";
import { cache } from "react";

export default async function Movies() {
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzAyZWYzMzQ0OTk0ZTZmZTMwY2JhY2Q5YjNiNTIzOCIsIm5iZiI6MTcxNDQ4MDk0My4yMTYsInN1YiI6IjY2MzBlNzJmYmVmYjA5MDEyM2Q5NWUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.knsSTmtUqlNV4MW15cx7FRcxQI-A0w7zuw4WR7sJfM4",
    },
    cache: "force-cache",
    next: {
      revalidate: 120,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    config
  );

  const movies = await response.json();

  return (
    <div className=" flex flex-row gap-3 m-4">
      <MediaSlide medias={movies?.results} />
    </div>
  );
}
