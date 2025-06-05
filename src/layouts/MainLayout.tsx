import React from "react";
import Header from "../components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full mx-auto">{children}</main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
