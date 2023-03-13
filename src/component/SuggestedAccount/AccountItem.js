import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccount.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1678852800&x-signature=JorQfzuS6Xj8s02bmaxdSyw5BQw%3D"
                alt=""
            />
            <div className={cx('account-info')}>
                <p className={cx('nickname')}>
                    <strong>hoaa.hanassii</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
