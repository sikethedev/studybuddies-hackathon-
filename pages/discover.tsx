import Dashboard from "../components/dashboard";
import styles from "../styles/discover.module.css";



const discover = () => {
  return (
    <div className={styles.container}>
      <Dashboard />
      <div className={styles.app}>

      </div>
    </div>
  );
}

export default discover;