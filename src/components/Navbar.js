import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.divLogo}>
        <Image
          src="/assets/logo.png"
          width="200"
          height="85"
          alt="Logo do site escrito Pokemon"
        ></Image>
      </div>

      <Image
        src="/assets/pokeball.png"
        width="50"
        height="50"
        alt="Lo imagem de uma pokebola"
      ></Image>
    </nav>
  );
};

export default Navbar;
