import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";
import ReactPlayer from 'react-player'

import chooseImg from "../../assests/images/why-choose-us.png"
import styles from "./ChooseUs.module.scss";
const cx = classNames.bind(styles)
const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false)
    return(
        <>
            <section className={cx('chooseUs')}>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className={cx('choose_content')}>
                                <h2>Why Choose US</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                                    aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                                    minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolores cupiditate facilis provident quidem accusamus impedit
                                    tenetur laboriosam debitis nisi eius!
                                </p>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className={cx('choose_img')}>
                                {
                                    showVideo ? (
                                        <ReactPlayer 
                                            url='https://www.youtube.com/watch?v=qpwJ6LqJn1w' 
                                            controls
                                            width='100%'
                                            height='300px'
                                            className={cx('w-100')}/>
                                    ) : (
                                        <img src={chooseImg} alt='' className={cx('w-100')}/>
                                    )
                                }
                                {
                                    !showVideo && (
                                        <span className={cx('play_icon')}>
                                            <i class="ri-play-circle-line" onClick={()=>setShowVideo(!showVideo)}></i>
                                        </span>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default ChooseUs