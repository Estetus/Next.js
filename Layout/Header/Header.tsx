import { type  JSX } from 'react';
import { type HeaderProps } from './Header.props';
import GitIcon from './gitIcon.svg';
import MyBlogIcon from './my_blog.svg'; 
import styles from './Header.module.css';


export const Header = ({...props}: HeaderProps):JSX.Element => {
  return (
    <>
      <div {... props} className={styles.header}>
        <MyBlogIcon/>
        <GitIcon/>
      </div>
    </>
  );
};
