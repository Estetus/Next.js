import { Header } from './Header/Header';
import { type LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.body}>
        <motion.div
          className={styles.card}
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
