import React from 'react';
import Footer from '../components/footer/index.tsx';
import Header from '../components/header/index.tsx';
import styles from './Layout.module.css';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
