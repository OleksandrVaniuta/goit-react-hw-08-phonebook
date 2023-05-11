import { Oval } from 'react-loader-spinner';
import css from '../components/ContactsItem/ContactsItem.module.css';

function Loader() {
  return (
    <div className={css.Loader}>
      <Oval
        height={25}
        width={25}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loader;
