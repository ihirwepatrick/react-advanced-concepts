import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const isAunthenticated = false;
  return (
    <>
      {isAunthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col">
            <Outlet />
          </section>
          <img />
        </>
      )}
    </>
  );
}

export default AuthLayout;
