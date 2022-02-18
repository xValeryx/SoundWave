import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const loginFunction = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.Login}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://firebasestorage.googleapis.com/v0/b/clone-8164f.appspot.com/o/amazonlogo.png?alt=media&token=00fe6716-3b35-4c7f-92b2-1b5c9fcfa0c6"
            alt="amazon"
          />
        </Link>
      </div>

      <div className={styles.form}>
        <form>
          <h1>Accedi</h1>

          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            autoComplete="off"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            required
          />

          <button type="submit" onClick={loginFunction}>
            Continua
          </button>

          <p>
            Accedendo al tuo account dichiari di aver letto e accetti le nostre
            Condizioni generali di uso e vendita. Prendi visione della nostra
            Informativa sulla privacy, della nostra Informativa sui Cookie e
            della nostra Informativa sulla Pubblicità definita in base agli
            interessi.
          </p>
        </form>

        <div className={styles.divider}>
          <p>Sei nuovo su amazon?</p>
        </div>

        <button className={styles.register}>
          <Link to="/iscrizione">Crea il tuo Account Amazon</Link>
        </button>
      </div>

      <footer className={styles.footer}>
        <ul>
          <li>Condizioni d'uso</li>
          <li>Informativa sulla privacy</li>
          <li>Aiuto</li>
          <li>Informativa sui Cookie</li>
          <li>Informativa sulla Pubblicità definita in base agli interessi</li>
        </ul>

        <small>© Snorlax Team - 2022</small>
      </footer>
    </div>
  );
};

export default Login;
