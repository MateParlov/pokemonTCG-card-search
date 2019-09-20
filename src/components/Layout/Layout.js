import React from 'react';
import styles from './Layout.module.css';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <main className={styles.Content}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
