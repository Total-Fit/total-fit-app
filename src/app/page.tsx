import AuthForm from "@/components/layout/forms/authForm/AuthForm";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    redirect("/dashboard/profile");
  }

  return (
    <main id="authForm">
      <Image
        src="/imgs/total_fit_logo.png"
        alt="Total Fit Logo"
        width={100}
        height={100}
      />
      <div>
        <AuthForm />
      </div>
      <div id="logoExtend">
        <Image
          src="/imgs/total_fit_logo_text.png"
          alt="Total Fit Logo"
          width={100}
          height={100}
        />
      </div>
    </main>
  );
};

export default Home;
