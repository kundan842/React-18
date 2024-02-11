import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops...</h1>
      <p>
        {" "}
        {isRouteErrorResponse(error) ? "invalid page" : "unexpected error"}
      </p>
    </>
  );
};

export default ErrorPage;
