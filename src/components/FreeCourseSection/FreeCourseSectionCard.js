import React from "react";
import classNames from "classnames/bind";
import styles from "./FreeCourseSection.module.scss"
const cx = classNames.bind(styles)
const FreeCourseSectionCard = (props) => {
    const {item} = props;
    const {title, imgUrl, students, rating} = item
    return(
        <>
            <div className={cx('single_free_curse')}>
                    <div className={cx('free_course_img')}>
                        <img src={imgUrl} alt="" className={cx('w-100')}/>
                        <button className={cx('free_btn')}>
                            Free
                        </button>
                    </div>
                    <div className={cx('free_course_details')}>
                        <h6>{title}</h6>
                    <div className={cx('d-flex align-items-center gap-5')}>
                        <span><i class="ri-user-line"></i> {students}k</span>
                        <span><i class="ri-star-fill"></i> {rating}k</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FreeCourseSectionCard;