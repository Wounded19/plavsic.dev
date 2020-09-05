import React from "react";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
// TODO
// Možda definisati Page komponentu da ne moram na svakom page da ubacujem CONTAINER
// Ubaciti u Page, primeniti na sve children i to je to, dodati u _app.js
const start = () => {
  NProgress.start();
};
const complete = () => {
  NProgress.done();
};
const error = () => {
  NProgress.done();
};

Router.events.on("routeChangeStart", start);
Router.events.on("routeChangeComplete", complete);
Router.events.on("routeChangeComplete", error);

const Header = () => {
  const router = useRouter();
};

export default Header;
