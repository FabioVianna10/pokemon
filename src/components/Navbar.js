import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.divLogo}>
        <Image
          src="/assets/pokeball.png"
          width="50"
          height="50"
          alt="Lo imagem de uma pokebola"
        ></Image>
        <h1 className={styles.logo}>PokeNext</h1>
      </div>
      <div>
        <ul className={styles.containerList}>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
