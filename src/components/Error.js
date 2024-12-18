import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
