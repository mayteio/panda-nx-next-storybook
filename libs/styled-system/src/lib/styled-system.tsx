import styles from './styled-system.module.css';

/* eslint-disable-next-line */
export interface StyledSystemProps {}

export function StyledSystem(props: StyledSystemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StyledSystem!</h1>
    </div>
  );
}

export default StyledSystem;
