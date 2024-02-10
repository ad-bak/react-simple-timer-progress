import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useState } from "react";

export default function Timer({ name }: TimerProps) {
  setInterval(() => {}, 50);

  useState(() => {});

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress />
      </p>
    </Container>
  );
}
