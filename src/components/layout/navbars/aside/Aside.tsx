"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./Aside.module.scss";

const Aside = () => {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard/profile", label: "Perfil", icon: "/profile_icon.svg" },
    { href: "/dashboard/students", label: "Alunos", icon: "/student_icon.svg" },
    {
      href: "/dashboard/teachers",
      label: "Professores",
      icon: "/teacher_icon.svg",
    },
    {
      href: "/dashboard/my-training",
      label: "Meu Treino",
      icon: "/training_icon.svg",
    },
    {
      href: "/dashboard/training",
      label: "Treinamentos",
      icon: "/training_icon.svg",
    },
  ];

  return (
    <aside className={style.aside}>
      <Link href="/dashboard">
        <h1>Total Fit</h1>
      </Link>
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
    </aside>
  );
};

export default Aside;
