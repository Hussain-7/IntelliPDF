import { appRouter } from "@/trpc";
import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req,
    router: appRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> {
      return {};
    },
  });
};
export { handler as GET, handler as POST };
