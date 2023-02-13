import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";

import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png"
import CoursesSectionCard from "./CoursesSectionCard";
import styles from './CoursesSection.module.scss'
const cx = classNames.bind(styles)
const CoursesSection = () => {
    const coursesData = [
        {
          id: "01",
          title: "Web Design BootCamp-2022 for Beginners",
          lesson: 12,
          students: 12.5,
          rating: 5.9,
          imgUrl: courseImg1,
        },
      
        {
          id: "02",
          title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
          lesson: 12,
          students: 12.5,
          rating: 5.9,
          imgUrl: courseImg2,
        },
      
        {
          id: "03",
          title: "UI/UX BootCamp for Beginners in 2022",
          lesson: 12,
          students: 12.5,
          rating: 5.9,
          imgUrl: courseImg3,
        },
      ];
    return(
        <>
            <section className={cx('coursesSection')}>
                <Container>
                    <Row>
                        <Col lg="12" className="">
                            <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Our Popular Courses</h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                                consequatur libero quod voluptatibus ullam quia quas, vitae
                                voluptatem recusandae reprehenderit!
                                </p>
                            </div>

                            <div className="w-50 text-end">
                                <button className="btn">See All</button>
                            </div>
                            </div>
                        </Col>
                        {
                            coursesData.map((item, array, index)=> {
                                return(
                                    <Col key={item.id} lg='4'>
                                        <CoursesSectionCard item={item}/>
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
export default CoursesSection