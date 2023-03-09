import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    lefticon,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const prop = {
        onClick,
        ...passProps,
    };

    // remove event listener when disabled btn
    if (disabled) {
        Object.keys(prop).forEach((key) => {
            if (key.startsWith('on') && typeof prop[key] === 'function') {
                delete prop[key];
            }
        });
    }

    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        //khi có class nam thì nó sẽ láy giá trị cảu className làm key
        [className]: className,
        primary,
        text,
        outline,
        disabled,
        rounded,
        small,
        large,
    });
    return (
        <Comp className={classes} {...prop}>
            {lefticon && <span className={cx('lefticon')}>{lefticon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    lefticon: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
