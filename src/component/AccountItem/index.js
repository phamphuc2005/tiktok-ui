import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/24f07c309a9a168c05bfceb9ecbbf794~c5_100x100.jpeg?x-expires=1664092800&x-signature=uy3cFKwGxUCdSgfz%2FH6f4Dz4o8s%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span> Nguyen Van A </span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
