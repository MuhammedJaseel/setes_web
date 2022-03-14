import React from "react";
import AdminHomePage from "./screen/a_home";
import AdmimLoginScreen from "./screen/a_login";
import PublicEventPage from "./screen/p_event";
import PublicEventsPage from "./screen/p_events";
import PublicHomePage from "./screen/p_home";
import PolicyScreen from "./screen/p_policy";

export default function App() {
  const path = window.location.pathname.split("/")[1];
  if (path === "admin") {
    const subpath = window.location.pathname.split("/")[2];
    if (subpath === "login") return <AdmimLoginScreen />;
    return <AdminHomePage />;
  }
  if (path === "events") {
    return <PublicEventsPage />;
  }
  if (path === "event") {
    return <PublicEventPage />;
  }
  if (path === "policy") {
    return <PolicyScreen />;
  }
  return <PublicHomePage />;
}

//serve -s build
