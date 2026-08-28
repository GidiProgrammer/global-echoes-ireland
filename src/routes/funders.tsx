import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/funders")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
