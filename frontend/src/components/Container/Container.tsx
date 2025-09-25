import { ReactNode } from 'react';
import styles from './Container.module.scss';
interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
