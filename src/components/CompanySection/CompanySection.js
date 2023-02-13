import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";
import styles from "./CompanySection.module.scss"
const cx = classNames.bind(styles)
const CompanySection = () => {
    return(
        <>
            <section className={cx('companySection')}>
                <Container>
                    <Row>
                        <Col lg='2' md='3'>
                            <h3 className={cx('title')}><i class="ri-vimeo-line"></i>Vimeo</h3>
                        </Col>
                        <Col lg='2' md='3'>
                            <h3 className={cx('title')}><i class="ri-pinterest-line"></i>Pinterest</h3>
                        </Col>
                        <Col lg='2' md='3'>
                            <h3 className={cx('title')}><i class="ri-dribbble-line"></i>Dribbble</h3>
                        </Col>
                        <Col lg='2' md='3'>
                            <h3 className={cx('title')}><i class="ri-apple-fill"></i>Apple</h3>
                        </Col>
                        <Col lg='2' md='3'>
                            <h3 className={cx('title')}><i class="ri-finder-fill"></i>Finder</h3>
                        </Col>
                        <Col lg='2' md='3'>
                            <h3 className={cx('title')}><i class="ri-google-fill"></i>Google</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default CompanySection