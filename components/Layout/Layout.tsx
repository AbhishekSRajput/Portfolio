import { FC, ReactNode } from "react";
// components
import Navbar from "./Navbar";

interface LayoutType {
  children: ReactNode;
}
const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
