import { useEffect } from "react";

export const Send404 = () => {
  // just doing this since gh pages doesn't support my way of doing custom 404 pages :sadge:
  // or maybe it does, but I don't know how to do it
  useEffect(() => {
    window.location.replace("/404.html");
  }, []);
  return null;
};
