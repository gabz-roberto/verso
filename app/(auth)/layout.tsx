import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex felx-row gap-3">
            <Image alt="logo" src={"/icons/logo.svg"} height={35} width={35} />
            <h1 className="text-2xl font-semibold text-white">Verso</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </main>
  );
};

export default layout;
