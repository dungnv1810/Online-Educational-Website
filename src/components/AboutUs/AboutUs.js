import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";
import CountUp from 'react-countup';

import aboutImg from "../../assests/images/about-us.png"
import styles from "./AboutUs.module.scss"
const cx = classNames.bind(styles)
const AboutUs = () => {
    return(
        <>
            <section className={cx('aboutUs')}>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <did className={cx('about_img')}>
                                <img src={aboutImg} alt="" className={cx('w-100')}/>
                            </did>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="about_content">
                                <h2>About Us</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Excepturi cupiditate animi deserunt libero nesciunt corporis
                                    explicabo nobis ex quo molestiae!
                                </p>
                                <div className={cx('about_counter')}>
                                    <div className={cx('singe_counter')}>
                                        <span className={cx('counter')}>
                                            <CountUp 
                                                start={0}
                                                end={25}
                                                duration={2}
                                                suffix='K'
                                            />
                                        </span>
                                        <p className={cx('counter_title')}>Completed Projects</p>
                                    </div>
                                    <div className={cx('singe_counter')}>
                                        <span className={cx('counter')}>
                                            <CountUp 
                                                start={0}
                                                end={12}
                                                duration={2}
                                                suffix='M'
                                            />
                                        </span>
                                        <p className={cx('counter_title')}>Patiemt Around World</p>
                                    </div>
                                </div>
                                <div className={cx('about_counter')}>
                                    <div className={cx('singe_counter')}>
                                        <span className={cx('counter')}>
                                            <CountUp 
                                                start={0}
                                                end={25}
                                                duration={2}
                                                suffix='K'
                                            />
                                        </span>
                                        <p className={cx('counter_title')}>Completed Projects</p>
                                    </div>
                                    <div className={cx('singe_counter')}>
                                        <span className={cx('counter')}>
                                            <CountUp 
                                                start={0}
                                                end={12}
                                                duration={2}
                                                suffix='M'
                                            />
                                        </span>
                                        <p className={cx('counter_title')}>Patiemt Around World</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AboutUs