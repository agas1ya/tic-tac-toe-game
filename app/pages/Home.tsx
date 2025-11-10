import type { Route } from "./+types/Home";
import Game from "../components/Board";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tic Tac Toe Game" },
    { name: "description", content: "A simple tic-tac-toe game built with React" },
  ];
}

export default function Home() {
  return <Game />;
}