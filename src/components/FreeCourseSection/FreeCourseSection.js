import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png"
import courseImg02 from "../../assests/images/ui-ux.png"
import courseImg03 from "../../assests/images/kids-learning.png"
import courseImg04 from "../../assests/images/seo.png"
import FreeCourseSectionCard from "./FreeCourseSectionCard";
import styles from "./FreeCourseSection.module.scss"
const cx = classNames.bind(styles)
const FreeCourseSection = () => {
    const freeCourseData = [
        {
          id: "01",
          title: "Basic Web Development Course",
          imgUrl: courseImg01,
          students: 5.3,
          rating: 1.7,
        },
        {
          id: "02",
          title: "Coding for Junior Basic Course",
          imgUrl: courseImg02,
          students: 5.3,
          rating: 1.7,
        },
      
        {
          id: "03",
          title: "Search Engine Optimization - Basic",
          imgUrl: courseImg03,
          students: 5.3,
          rating: 1.7,
        },
      
        {
          id: "04",
          title: "Basic UI/UX Design - Figma",
          imgUrl: courseImg04,
          students: 5.3,
          rating: 1.7,
        },
      ];
    return(
        <>
            <section className={cx('FreeCourseSection')}>
                <Container>
                    <Row>
                        <Col lg='12' className={cx('text-center mb-2')}>
                            <h2 className={cx('fw-bold')}>Our Free Courses</h2>
                        </Col>
                        {
                            freeCourseData.map((item, index) => {
                                return(
                                    <Col lg='3' key={index}>
                                        <FreeCourseSectionCard item={item}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default FreeCourseSection