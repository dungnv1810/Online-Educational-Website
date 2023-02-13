import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png"
import styles from "./Testimonial.module.scss"
const cx = classNames.bind(styles)
const Testimonial = () => {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      };
    return(
        <>
            <section className={cx('testimonial')}>
                <Container>
                    <Row>
                        <Col lg='10' className="m-auto">
                            <div className={cx('testimonial_wrapper')}>
                                <div className={cx('testiniamol_img w-50')}>
                                    <img src={img} alt="" className={cx('w-100')}/>
                                </div>
                                <div className={cx('testimonial_content w-50')}>
                                    <h2 className={cx('mb-4')}>Our Students voice</h2>
                                    <Slider {...settings}>
                                        <div className={cx('single_testimonial')}>
                                            <h6 className={cx('mb-3 fw-bold')}>Excellent course of materials</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>
                                            <div className={cx('student_info mt-4')}>
                                                <h6 className={cx('fw-bold')}>Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                        <div className={cx('single_testimonial')}>
                                            <h6 className={cx('mb-3 fw-bold')}>Excellent course of materials</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>
                                            <div className={cx('student_info mt-4')}>
                                                <h6 className={cx('fw-bold')}>Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                        <div className={cx('single_testimonial')}>
                                            <h6 className={cx('mb-3 fw-bold')}>Excellent course of materials</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>
                                            <div className={cx('student_info mt-4')}>
                                                <h6 className={cx('fw-bold')}>Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                        <div className={cx('single_testimonial')}>
                                            <h6 className={cx('mb-3 fw-bold')}>Excellent course of materials</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis saepe id voluptas molestiae. Aperiam corrupti
                                                voluptas earum at molestiae neque!
                                            </p>
                                            <div className={cx('student_info mt-4')}>
                                                <h6 className={cx('fw-bold')}>Jhon Doe</h6>
                                                <p>California, United State</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Testimonial