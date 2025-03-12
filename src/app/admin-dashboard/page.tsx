import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const AdminDashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=admin-dashboard");

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (dbUser && dbUser?.email !== "admin@example.com") {
    redirect("/dashboard");
  }

  // Fetch mock statistics
  const totalUsers = await db.user.count();
  const totalFiles = await db.file.count();

  return (
    <MaxWidthWrapper className="mb-8 mt-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">Admin Dashboard</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="mt-2 text-3xl font-bold">{totalUsers}</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium">Total Files</h3>
            <p className="mt-2 text-3xl font-bold">{totalFiles}</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium">Processing Files</h3>
            <p className="mt-2 text-3xl font-bold">{10}</p>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Recent Activity</h2>
          <Card className="p-6">
            <p className="text-gray-500">No recent activity to display</p>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">System Status</h2>
          <Card className="p-6">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-2">All systems operational</span>
            </div>
          </Card>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AdminDashboardPage;
