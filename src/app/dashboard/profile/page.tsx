import ProfileCard from "@/components/layout/cards/profile/ProfileCard";
import style from "./Profile.module.scss";

const ProfilePage = () => {
  return (
    <>
      <header className={style.header}>
        <h1>Perfil</h1>
        <p>Bem-vindo à sua página de perfil!</p>
      </header>
      <main className={style.main}>
        <ProfileCard />
      </main>
    </>
  );
};

export default ProfilePage;
