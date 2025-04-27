import type { Route } from "./+types/AboutPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nosotros" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <div>About</div>;
}
