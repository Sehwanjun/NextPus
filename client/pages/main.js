import React from "react";
import MainLayout from "../components/MainLayout";

const Main = ({ Component }) => {
  return (
    <MainLayout>
      <div>헬로</div>
      <Component />
    </MainLayout>
  );
};

export default Main;
