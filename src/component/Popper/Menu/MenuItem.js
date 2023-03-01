import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menuitem', {
        separate: data.separate,
    });
    return (
        <Button className={classes} lefticon={data.icon} topicon={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
