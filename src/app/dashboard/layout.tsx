import Aside from "@/components/layout/navbars/aside/Aside";
import style from "./Dashboard.module.scss";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Aside />
      <div className={style.container}>{children}</div>
    </>
  );
}
