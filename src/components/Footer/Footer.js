import React from "react";
import {Row, Col, Container, ListGroup, ListGroupItem } from "reactstrap";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss"
const cx = classNames.bind(styles)
const Footer = () => {
    const footerQuickLinks = [
        {
            display: 'Home',
            url: '#'
        },
        {
            display: 'About Us',
            url: '#'
        },
        {
            display: 'Courses',
            url: '#'
        },
        {
            display: 'Pages',
            url: '#'
        },
        {
            display: 'Blog',
            url: '#'
        },
    ]
    const footerInfoLinks = [
        {
            display: 'Privacy Policy',
            url: '#'
        },
        {
            display: 'Membership',
            url: '#'
        },
        {
            display: 'Purchases Guide',
            url: '#'
        },
        {
            display: 'Terms of Service',
            url: '#'
        },
    ]
     return(
        <>
            <footer className={cx('footer')}>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h2 className={cx('d-flex align-item-senter gap-2')}>
                                <i className="ri-pantone-line"></i> 
                                Learner.
                            </h2>
                            <div className={cx('follows')}>
                                <p className={cx('mb-0')}>Follow Us</p>
                                <div className={cx('d-flex align-item-senter gap-3')}>
                                    <span>
                                        <a href="facebook.com">
                                            <i className="ri-facebook-line"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="facebook.com">
                                            <i class="ri-instagram-line"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="facebook.com">
                                            <i class="ri-linkedin-line"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="facebook.com">
                                            <i class="ri-twitter-line"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <h6 className={cx('fw-bold')}>Explore</h6>
                            <ListGroup className={cx('link__list')}>
                                {
                                    footerQuickLinks.map((item, index) => {
                                        return(
                                            <ListGroupItem className={cx('link__item')} key={index}>
                                                <a href={item.url}>{item.display}</a>
                                            </ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col lg='3'>
                            <h6 className={cx('fw-bold')}>Information</h6>
                            <ListGroup className={cx('link__list')}>
                                {
                                    footerInfoLinks.map((item, index) => {
                                        return(
                                            <ListGroupItem className={cx('link__item')} key={index}>
                                                <a href={item.url}>{item.display}</a>
                                            </ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col lg='3'>
                            <h6 className={cx('fw-bold')}>Get in Touch</h6>
                            <p>Address: My Duc - Ha Noi - VietNam</p>
                            <p>Phone: 0345630366</p>
                            <p>Email: dungcoi@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer;