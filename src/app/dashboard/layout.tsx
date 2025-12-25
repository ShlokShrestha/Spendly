import AppSidebar from "@/components/Sidebar/AppSidebar";
import TabBar from "@/components/Tabs/TabBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden md:flex w-64 flex-col bg-teal-900 text-white p-6">
        <AppSidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-background">
          <div>
            <h2 className="text-2xl font-semibold">Hello, Christian</h2>
            <p className="text-sm text-muted-foreground">July 7, 2023</p>
          </div>
        </header>
        <main className="flex-1 p-6 pb-20">{children}</main>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
        <TabBar />
      </nav>
    </div>
  );
}
