import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout1")({
  component: Layout1,
});

export default function Layout1() {
  return (
    <div>
      _layout1
      <div>
        <Outlet />
      </div>
    </div>
  );
}
