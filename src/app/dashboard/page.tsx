import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("user", user);
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");
  return <div>{user?.email}</div>;
};

export default page;
