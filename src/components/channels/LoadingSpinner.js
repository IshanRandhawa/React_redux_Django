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
      <h1>Please wait for the data to be fetched. ... ...</h1>
      <h1>
        If you're still waiting, A lot of suff is happening in the background
      </h1>
    </>
  );
};

export default LoadingSpinner;
