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
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
