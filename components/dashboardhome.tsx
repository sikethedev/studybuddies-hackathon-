import type { NextPage } from 'next'
import styles from "../styles/dashboard.module.css"
import Image from 'next/image';
import logo from "../assets/logo.svg"
import discover from "../assets/discover.svg"
import directbox from "../assets/directbox-notif.svg"
import settings from "../assets/setting.svg"
import home from "../assets/home.svg"
import logouticon from "../assets/logout.svg"
import Link from 'next/link';

const DashboardHome: NextPage  = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <div className={styles.headerImg}>
      <Image src={logo} className={styles.logo} alt="logo"
      />
      <span className={styles.logoName}>StudyBuddies</span>
        </div> 
        <div className={styles.navigation}>
        <div className={styles.navWrapper}>
        <Link href="/home" >
              <div className={styles.linkItemWrapper}>
              <Image src={home} className={styles.navIcon}  alt="Home"/>
                <span className={styles.linkTxt}>Home</span>
              </div>
            </Link>
        <Link href="/discover" >
              <div className={styles.linkItemWrapper}>
              <Image src={discover} className={styles.navIcon}  alt="discover"/>
                <span className={styles.linkTxt}>Discover</span>
              </div>
            </Link>
            <Link href="/direct-message" >
              <div className={styles.linkItemWrapper}>
              <Image src={directbox} className={styles.navIcon}  alt="direct"/>
                <span className={styles.linkTxt}>Message</span>
              </div>
            </Link>
            <Link href="/settings" >
              <div className={styles.linkItemWrapper}>
              <Image src={settings} className={styles.navIcon}  alt="setting"/>
                <span className={styles.linkTxt}>Settings</span>
              </div>
            </Link>
            </div>
          </div>
          <div className={styles.bottomWrapper}>
            <div className={styles.bottomItemLogOut}>
            Log out <span className={styles.span}> <Image src={logouticon} className={styles.logout} alt="logout"
      /></span>
          </div>
          </div>
          </div>
    </div>
  );
}

export default DashboardHome;