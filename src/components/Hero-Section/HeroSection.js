import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";

import heroImages from "../../assests/images/hero-img1.png"
import styles from "./HeroSection.module.scss";
const cx = classNames.bind(styles)
const HeroSection = () => {
    return(
        <>
            <section className={cx('herosection')}>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className={cx('hero_content')}>
                                <h2 className={cx('mb-4')}>Anytime Anywhere <br/> 
                                Learn on your <br/> Suitable</h2>
                                <p className={cx('mb-4')}>
                                    Lorem ipsum dolor sit amet consectetur <br /> 
                                    adipisicing elit.
                                    Aut saepe voluptatum earum delectus <br /> 
                                    deserunt id iste,
                                    quas officiis et repellat!
                                </p>
                                <div className={cx('search')}>
                                    <input type='text' placeholder="Search"/>
                                    <button className={cx('btn')}>Search</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <img src={heroImages} alt="" className={cx('w-100')}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HeroSection