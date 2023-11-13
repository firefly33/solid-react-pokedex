import { Link, Navigate, Outlet } from "react-router-dom";
import H1 from "../components/shared/H1";

const Layout = () => {
  return (
    <section>
      <header className="w-full px-10 py-6 bg-slate-500 text-white flex flex-col items-center gap-10 lg:flex-row  lg:justify-between">
        <Link to={"/"}>
          <H1 className="">Pokemon SOLID</H1>
        </Link>
        <nav className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <Link to={"/srp"}>Single Responsibility</Link>
          <Link to={"/ocp"}>Open/Closed</Link>
          <Link to={"/lsp"}>Liskov Substitution</Link>
          <Link to={"/isp"}>Interface Segregation</Link>
          <Link to={"/dip"}>Dependency Inversion</Link>
        </nav>
      </header>
      <main className="py-10">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
