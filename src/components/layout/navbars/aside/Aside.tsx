"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import style from "./Aside.module.scss";
import LogoutButton from "@/components/ui/buttons/logoutButton/LogoutButtton";
import ApiIntegrate from "@/lib/services/apiIntegrate";

const Aside = () => {
  const pathname = usePathname();
  const route = useRouter();

  const links = [
    {
      href: "/dashboard/profile",
      label: "Perfil",
      icon: "/icons/profile_icon.svg",
    },
    {
      href: "/dashboard/students",
      label: "Alunos",
      icon: "/icons/student_icon.svg",
    },
    {
      href: "/dashboard/teachers",
      label: "Professores",
      icon: "/icons/teacher_icon.svg",
    },
    {
      href: "/dashboard/my-training",
      label: "Meu Treino",
      icon: "/icons/training_icon.svg",
    },
    {
      href: "/dashboard/training",
      label: "Treinamentos",
      icon: "/icons/training_icon.svg",
    },
  ];

  const handleLogout = async () => {
    const response = await ApiIntegrate.logout();

    try {
      if (response.status === 200) route.push("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <aside className={style.aside}>
      <h1>
        Total <span>Fit</span>
      </h1>
      <nav>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${pathname === link.href ? style.active : ""} `}
          >
            <Image
              src={link.icon}
              alt={`Ícone ${link.label}`}
              width={30}
              height={30}
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
      <LogoutButton onClick={handleLogout} />
    </aside>
  );
};

export default Aside;
