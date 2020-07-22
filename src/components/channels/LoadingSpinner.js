import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <h1>Getting the data could take some time</h1>
      <h2>
        Videos published in the location which match the keyword are fetched,
        then their corresponding Channel data is fetched
      </h2>
    </>
  );
};

export default LoadingSpinner;
