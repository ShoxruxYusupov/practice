import { Outlet } from "react-router-dom";
import { Header } from "../components";

export function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
