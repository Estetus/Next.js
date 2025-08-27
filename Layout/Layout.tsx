
import { Header } from './Header/Header';
import { type LayoutProps } from './Layout.props';
import styles from './Layout.module.css';

export const Layout = ( {children}: LayoutProps)  => {
return (
  <>
  <Header/>
  <div className={styles.container}>
    {children}
  </div>
  </>
);
};


