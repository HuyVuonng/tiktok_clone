import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menuitem')} lefticon={data.icon} topicon={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
