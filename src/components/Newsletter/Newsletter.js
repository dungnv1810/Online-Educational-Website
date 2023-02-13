import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";
import styles from "./Newsletter.module.scss"
const cx = classNames.bind(styles)
const Newsletter = () => {
    return(
        <>
            <section className={cx('newsletter')}>
                <Container className={cx('container_subscribe')}>
                    <Row>
                        <Col lg='12' className={cx('text-center')}>
                            <h2>Subscribe Our Newsletter</h2>
                            <div className={cx('subscribe')}>
                                <input type='text' placeholder="Email"/>
                                <button className={cx('btn')}>Subscribe</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Newsletter