import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/partner-stores")({ component: () => <Outlet /> });
