import { HiOutlineUserCircle } from "react-icons/hi";
import styles from "./styles.module.scss";

export default function UserLogged({ parloaLayout, credentials }) {
  function userSignup() {
    console.log("visualizza la modale");
    parloaLayout();
  }
  console.log('======>',credentials)
  

  return (
    <button className={styles.user_log} onClick={() => userSignup()}>
      <div className={styles.img_user}>
        <HiOutlineUserCircle />
      </div>
      <div className={styles.info_user}>{credentials?.email != undefined ? credentials.email : "Sign up"}</div>
    </button>
  );
}