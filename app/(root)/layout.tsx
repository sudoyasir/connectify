import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <main>{children}</main>;
};

export default RootLayout;
