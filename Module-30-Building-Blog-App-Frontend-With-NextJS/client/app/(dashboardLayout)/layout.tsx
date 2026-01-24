import Dashboard from "@/components/layout/Dashboard";

function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const userRole = {
    role: "user",
  };
  return <div>
    <Dashboard/>
    {/* {userRole.role == "admin" ? admin : user} */}
    </div>;
}

export default DashboardLayout;
