import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("features/home/HomePage.tsx"),
  route("about", "features/about/AboutPage.tsx"),
] satisfies RouteConfig;
