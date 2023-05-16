import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.Loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#00a9c7"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
