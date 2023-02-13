import React from "react";
import classNames from "classnames/bind";
import styles from "./CoursesSection.module.scss";
const cx = classNames.bind(styles)
const CoursesSectionCard = (props) => {
    const {item} = props
    const {imgUrl, title, lesson, students, rating} = item
    return (
        <>
            <div className={cx('single_course_item')}>
                <div className={cx('course_img')}>
                    <img src={imgUrl} alt="" className={cx('images')}/>
                </div>
                <div className={cx('course_details')}>
                    <h6 className="course_title">
                        {title}
                    </h6>
                    <div className={cx('d-flex justify-content-between align-items-center')}>
                        <p className={cx('lesson')}>
                            <i class="ri-book-open-line"></i> 
                            {lesson} Lessons
                        </p>
                            <p className={cx('students')}>
                                <i class="ri-user-line"></i> 
                                {students} K
                            </p>
                        </div>
                        <div className={cx('d-flex justify-content-between align-items-center')}>
                            <p className={cx('rating')}>
                                <i class="ri-star-fill"></i> 
                                {rating} K
                            </p>
                            <p className={cx('enroll')}>
                                <a href="#">Enroll Now</a>
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default CoursesSectionCard