import { createFileRoute } from "@tanstack/react-router";
import { postsQueryOption } from "../fetchPosts";

export const Route = createFileRoute("/posts")({
  component: Posts,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOption()),
  pendingComponent: () => <div>Loading...</div>,
});

export default function Posts() {
  const posts = Route.useLoaderData();

  return (
    <div>
      Posts
      <p>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </p>
    </div>
  );
}
