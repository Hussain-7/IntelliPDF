import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  // console.log("in middle wear - authorized : ", user);
  // if (!user || !user?.id) {
  //   throw new TRPCError({
  //     code: "NOT_FOUND",
  //     message: "no user found in auth middleware",
  //   });
  // }
  const user = {
    family_name: "Rizvi",
    given_name: "Hussain",
    picture:
      "https://lh3.googleusercontent.com/a/ACg8ocLamsVk1ssM9ZP9H1YEWp7uzUqQKAPYqk9fhPLjzW4AXDbHGrsKyw=s96-c",
    email: "hussain2000.rizvi@gmail.com",
    id: "kp_834160277f2144bc90cf5964c1c0b901",
  };

  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
