import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import * as searchService from '~/apiServices/SearchService';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    // debounce de khi nguoi dung dung go moi hien thi tim kiem
    const debounce = useDebounce(searchValue, 800);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        // encodeURIComponent(searchValue) de tranh ky tu dac biet
        const fetchAPI = async () => {
            const result = await searchService.Search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchAPI();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResults = () => {
        setShowResults(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>

                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    onFocus={() => setShowResults(true)}
                />

                {/* !!searchvalue de convert searchvalue sang boolean y nghia la khi co searchValue thi moi hien clear */}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
