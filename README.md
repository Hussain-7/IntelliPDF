### TRPC Installation prerequisites

- `yarn add @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest zod`

### TRPC Server Setup In Next App Router

1. Create a file `src/trpc/trpc.ts` - [Reference](https://trpc.io/docs/client/nextjs/setup)

	```
	import { initTRPC } from "@trpc/server";

	const t = initTRPC.create();

	// Base router and procedure helpers
	export const router = t.router;
	export const publicProcedure = t.procedure;
	```

2. Create a file `src/trpc/index.ts` - [Reference](https://trpc.io/docs/client/nextjs/setup)

	```
	import { publicProcedure, router } from "./trpc";
	export const appRouter = router({
		// Example Test Route
		test: publicProcedure.query(() => {
			return { name: "Hussain Rizvi", age: 24 };
		}),
	});

	export type AppRouter = typeof appRouter;
	```

### TRPC Client Setup In Next App Router
1. Create a tRPC client, and wrap your application in the tRPC Provider, as below. You will also need to set up and connect React Query. First create a Provider Component and wrap in the layout.ts file - [Reference](https://trpc.io/docs/client/react/setup#4-add-trpc-providers)
	```
	"use client";

	import { trpc } from "@/app/_trpc/client";
	import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
	import { httpBatchLink } from "@trpc/client";
	import { PropsWithChildren, useState } from "react";

	const Providers = ({ children }: PropsWithChildren) => {
		const [queryClient] = useState(() => new QueryClient());
		const [trpcClient] = useState(() =>
			trpc.createClient({
				links: [
					httpBatchLink({
						url: "http://localhost:3000/api/trpc",
					}),
				],
			})
		);

		return (
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</trpc.Provider>
		);
	};

	export default Providers;
	```

2. To Create a set of strongly-typed React hooks from your AppRouter type signature with createTRPCReact.Initialize the trpc client by creating a file `src/app/trpc/client.ts` - [Reference](https://trpc.io/docs/client/react/setup#4-add-trpc-providers)

	```
	import { AppRouter } from "@/trpc";
	import { createTRPCReact } from "@trpc/react-query";

	export const trpc = createTRPCReact<AppRouter>({});
	```

3. Then add a route handler for trpc in `src/app/api/trpc/[trpc]/route.ts` - [Reference](https://trpc.io/docs/server/adapters/nextjs#route-handlers)

	```
	import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
	import { appRouter } from "@/trpc";

	const handler = (req: Request) =>
		fetchRequestHandler({
			endpoint: "/api/trpc",
			req,
			router: appRouter,
			createContext: () => ({}),
		});

	export { handler as GET, handler as POST };
	```

### Example Usuage
	```
	"use client";
	import { trpc } from "../_trpc/client";

	const Page = () => {
		const { data } = trpc.test.useQuery();
		console.log("result here: ", data?.name);
		return (
			<div className="w-full mt-24 flex justify-center">
			{data?.name}
			</div>
		);
	};

	export default Page;

	```