import React from "react";
import Head from "next/head";
import Dashboard from "./dashboard";

export default function Page() {
  return (
    <>
      <Head>
        <title>Lunaria Finance</title>
      </Head>
      <Dashboard />
    </>
  );
}
