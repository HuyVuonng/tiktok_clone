import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive placement="bottom-start" offset={[-20, 0]} delay={[1000, 0]} render={renderPreview}>
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
            </Tippy>
        </div>
    );
}
export default AccountItem;
