
import { Header } from './Header/Header';
import { type LayoutProps } from './Layout.props';
import styles from './Layout.module.css';

export const Layout = ( {children}: LayoutProps)  => {
return (
  <div className={styles.container}>
  <Header className={styles.header}/>
  <div className={styles.body}>
    {children}
  </div>
  </div>
);
};


