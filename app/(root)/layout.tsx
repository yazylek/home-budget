
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // <div className="flex h-screen  rounded-3xl">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 pt-4 px-6 bg-linear-90 from-white from-0% to-[#F2F2F2] to-100% my-4 mx-4 rounded-2xl">
          
          {children}</main>
      </SidebarProvider>
    // </div>
  );
};
export default DashboardLayout;
