import React, {useRef} from "react";
import { Container } from "reactstrap";
import classNames from "classnames/bind";

import styles from "./Header.module.scss"
const cx = classNames.bind(styles)
const Header = () => {
    const navLink = [
        {
            display: 'Home',
            url: '#'
        },
        {
            display: 'Abount',
            url: '#'
        },
        {
            display: 'Courses',
            url: '#'
        },
        {
            display: 'Pages',
            url: '#'
        },{
            display: 'Blog',
            url: '#'
        },
    ]
    const menuRef = useRef()
    console.log('menuRef === ', menuRef)
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
    console.log('menuToggle === ', menuToggle)
    return(
        <>
            <header className={cx('header')}>
                <Container>
                    <div className={cx('navigation')}>
                        <div className={cx('logo')}>
                            <h2 className={cx('logo_title')}><i className="ri-pantone-line"></i>Learners</h2>
                        </div>
                        <div className={cx('nav')}>
                            <div className={cx('nav_menu')} ref={menuRef} onClick={menuToggle}>
                                <ul className={cx('nav_list')}>
                                    {
                                        navLink.map((item, index) => {
                                            return(
                                                <li key={index} className={cx('nav_item')}>
                                                    <a href={item.url}>{item.display}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className={cx('nav_right')}>
                                <p className={cx('phone')}>
                                    <i className="ri-phone-line"></i> 0345630366
                                </p>
                            </div>
                            <div className={cx('mobile_menu')}>
                                <span>
                                    <i className="ri-menu-line" onClick={menuToggle}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}
export default Header