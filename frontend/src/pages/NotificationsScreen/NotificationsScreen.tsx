import Collapsible from '@/components/Collapsible/CollapsibleMenu';
import styler from './NotificationsScreen.module.css';

function NotificationsScreen() {
  return (
    <>
      <div className={styler.MainContainer}>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:700" />
        </head>
        <a href='/'>
          <div className={styler.Button}>X</div>
        </a>
        <img src='/images/blue_text.svg' alt='Areas' className={styler.Image} />
        <p className={styler.Text}>Notifications</p>
        
        
      </div>
    </>
  );
}

export default NotificationsScreen;
