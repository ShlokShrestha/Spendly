import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import Link from "next/link";

const items = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Expense", href: "/dashboard/expense" },
  { title: "Approval", href: "/dashboard/approval" },
  { title: "Setting", href: "/dashboard/setting" },
];

const AppSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xl font-bold mb-6 text-white text-center">
              Spendly
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href} className="py-2">
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Profile</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Logout</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default AppSidebar;
