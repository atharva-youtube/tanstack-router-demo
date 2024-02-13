import { createFileRoute } from "@tanstack/react-router";

type SearchParams = {
  query: string;
  limit: number;
};

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      query: search.query as string,
      limit: Number(search.limit) || 10,
    };
  },
});

export default function Search() {
  const { limit, query } = Route.useSearch();

  return (
    <div>
      <h1>Search</h1>
      <p>Query: {query}</p>
      <p>Limit: {limit}</p>
    </div>
  );
}
