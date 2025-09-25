import Form from '@/components/Form/Form';
import styles from './ChatInterface.module.scss';
const ChatInterface = () => {
  return (
    <main className={styles.chatInterface}>
      <div className={styles.chatInterfaceContainer}>
        {/* <Communication /> компонент с перепиской*/}
        <Form />
      </div>
    </main>
  );
};

export default ChatInterface;
