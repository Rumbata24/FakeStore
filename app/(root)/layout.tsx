import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <main className="bg-gray-100">{children}</main>;
};

export default RootLayout;
