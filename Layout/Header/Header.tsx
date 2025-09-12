import { useContext, type  JSX } from 'react';
import { type HeaderProps } from './Header.props';
import GitIcon from './gitIcon.svg';
import MyBlogIcon from './my_blog.svg'; 
import styles from './Header.module.css';
import { AppContext } from '@/context/app.context';


export const Header = ({...props}: HeaderProps):JSX.Element => {
  const context = useContext(AppContext);
  const gitUrl = context?.gitUrl; // optional chaining
  return (
    <>
      <div {... props} className={styles.header}>
        <MyBlogIcon/>
        <a href={gitUrl} target='_blank'>
        <GitIcon />
        </a>
      </div>
    </>
  );
};
