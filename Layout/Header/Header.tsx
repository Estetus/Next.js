import type { KeyboardEvent} from 'react';
import { useContext, type  JSX } from 'react';
import { type HeaderProps } from './Header.props';
import GitIcon from './gitIcon.svg';
import MyBlogIcon from './my_blog.svg'; 
import styles from './Header.module.css';
import { AppContext } from '@/context/app.context';


export const Header = ({...props}: HeaderProps):JSX.Element => {
  const context = useContext(AppContext);
  const gitUrl = context?.gitUrl;

  const handleClick = () => {
    if(gitUrl) {
      window.open(gitUrl, '_blank', 'noopener, noreferrer');
    }
  };

  const openLink = (key: KeyboardEvent) => {
    if ((key.code == 'Space' || key.code == 'Enter') && gitUrl) {
      key.preventDefault();
      handleClick();
    }
  };
  
  return (
    <>
      <div {...props} className={styles.header}>
        <MyBlogIcon />
        <button 
        className={styles.button} 
        onKeyDown={openLink}
        aria-label = 'Открыть репозиторий Git'
        >
            <GitIcon />
        </button>
      </div>
    </>
  );
};
