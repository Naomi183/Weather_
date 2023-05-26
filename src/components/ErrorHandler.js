import React, { useState } from 'react';

const ErrorHandler = () => {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error);
  };

  return (
    <div>
      {error ? (
        <div>
          <h1>An error occurred!</h1>
          <p>{error.message}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ErrorHandler;
