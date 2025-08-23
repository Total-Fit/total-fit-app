import Aside from "@/components/layout/navbars/aside/Aside";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Aside />
      {children}
    </>
  );
}
