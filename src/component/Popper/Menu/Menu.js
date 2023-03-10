import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChangeClick = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // !! de convert sang boolean
            const isParrent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChangeClick(item);
                        }
                    }}
                />
            );
        });
    };

    const handleResetToFirstPage = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    const handleback = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onback={handleback} />}
                        <div className={cx('menu-body')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChangeClick: PropTypes.func,
};

export default Menu;
