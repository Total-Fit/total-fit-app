import AuthForm from "@/components/layout/forms/authForm/AuthForm";
import Image from "next/image";

const Home = async () => {
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
