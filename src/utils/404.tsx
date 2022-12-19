import { useEffect } from "react";

export const Send404 = () => {
  // replace the page content with the 404 page
  useEffect(() => {
    window.location.replace("/404");
  }, []);
  return null;
};
