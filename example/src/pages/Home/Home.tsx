import { Button } from '@mui/material';
import { ToastService } from 'react-mui-toast';
import styles from './Home.module.scss';

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div className={styles.Home}>
      <p>Home works!</p>
      <Button variant="contained" onClick={() => ToastService.info('123')}>
        info
      </Button>
    </div>
  );
}
