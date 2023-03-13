import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('see-more')}>See all</p>
        </div>
    );
}
SuggestedAccount.propTypes = {
    lable: PropTypes.string.isRequired,
};
export default SuggestedAccount;
