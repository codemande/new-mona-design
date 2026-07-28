import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/supported-devices")({
  component: () => <Outlet />,
});
