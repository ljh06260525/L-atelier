import React from 'react';
import LectureRegisterForm from "../containers/auth/LectureRegisterForm";
import AuthTemplate from "../components/auth/AuthTemplate";

const LectureRegisterPage = () => {
    return (
        <AuthTemplate>
            <h2>강의 등록</h2>
            <LectureRegisterForm />
        </AuthTemplate>
    );
};

export default LectureRegisterPage;