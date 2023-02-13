import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";

import styles from "./FeatureSection.module.scss"
const cx = classNames.bind(styles)
const FeatureSection = () => {
    const FeatureData = [
        {
          title: "Quick Learning",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
          icon: "ri-draft-line",
        },
      
        {
          title: "All Time Support",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
          icon: "ri-discuss-line",
        },
      
        {
          title: "Certification",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
          icon: "ri-contacts-book-line",
        },
      ];
    return(
        <>
            <section className={cx('FeatureSection')}>
                <Container>
                    <Row>
                        {
                            FeatureData.map((item, index) => {
                                return(
                                    <Col lg='4' md='6' key={index}>
                                        <div className={cx('single_feature')}>
                                            <h2>
                                                <i className={item.icon}></i>
                                            </h2>
                                            <h6>{item.title}</h6>
                                            <p>{item.desc}</p>
                                        </div>
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
export default FeatureSection