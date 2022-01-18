import React, {useRef, useState} from 'react';
import axios from "axios";
import "../../lib/styles/LectureRegisterForm.css";

const LectureRegisterForm = () => {
    const [courseName, setCourseName] = useState("");
    const [explanation, setExplanation] = useState("");
    const [coursePrice, setCoursePrice] = useState(0); //21억,,? 1000만원
    const [headCount, setHeadCount] = useState(1); //500
    const [startDate, setStartDate] = useState(""); //현시점 <
    //const [categoryIds, setCategoryIds] = useState("");
    const [endDate, setEndDate] = useState(""); //startDate <
   // const [commentValue, setCommentValue] = useState("");
    const [files, setFiles] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const handleChangeCourseName = ({target: {value}}) => setCourseName(value);
    const handleChangeExplanation = ({target: {value}}) => setExplanation(value);
    const handleChangeCoursePrice = ({target: {value}}) => setCoursePrice(value);
    const handleChangeHeadCount = ({target: {value}}) => setHeadCount(value);
    const handleChangeStartDate = ({target: {value}}) => setStartDate(value);
    const handleChangeEndDate = ({target: {value}}) => setEndDate(value);

    const courseNameRef = useRef(null);
    const explanationRef = useRef(null);
    const coursePriceRef = useRef(null);
    const headCountRef = useRef(null);

    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(files);
        setFiles([...files, {uploadedFile: file}]);
    }

    const handleSubmitMultiFile = async ( //값 넘어오는거 체크하기
        e, courseName, explanation, coursePrice, headCount, startDate, endDate
    ) => {
        e.preventDefault();
        const formData = new FormData();
        // const courseName = document.getElementById("courseName");
        formData.append("thumbnailImageFile", files.length && files[3].uploadedFile);
        formData.append("detailImageFile", files.length && files[0].uploadedFile);
        formData.append("videoFile", files.length && files[2].uploadedFile);
        formData.append("proofImageFile", files.length && files[1].uploadedFile);

        formData.append("courseName", courseName);
        formData.append("explanation", explanation);
        formData.append("coursePrice", coursePrice);
        formData.append("headCount", headCount);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);

        await axios({
            method: "post",
            url: 'https://api.latelier.cf/api/courses',
            data: formData,
            headers: {"Content-Type": "multipart/form-data", Authorization: localStorage.getItem("access_token")}
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
       // setCommentValue("");
        setFiles([]);

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        // client.post('https://api.latelier.cf:8080/api/courses', formData)
        //     .then(response => {console.log(response)})
        //     .catch(error => {console.log(error.response.data)});
        // return axios.post()
    }

    const handleSubmit = async (e, formData) => {
        setDisabled(true);
        e.preventDefault();

        console.log(courseNameRef.current.value);
        console.log(explanationRef.current.value);
        console.log(coursePriceRef.current.value);
        console.log(headCountRef.current.value);

        //중복 제출 방지(1초 딜레이)
        await new Promise((r) => setTimeout(r, 1000));

        if (courseName.length >= 50) {
            alert("강의명은 50자 이내로 작성해야 합니다.")
        } else if (courseName.length <= 2) {
            alert("강의명은 2자 이상 작성해야 합니다.")
        } else if (explanation.length >= 500) {
            alert(`강의 설명은 10000자 이내로 작성해야 합니다. 현재 : ${explanation.length}`);
        } else if (explanation.length <= 1) {
            alert(`강의 설명은 100자 이상 작성해야 합니다. 현재 : ${explanation.length}`)
        } else {
            alert("강의 등록 신청이 완료되었습니다.");
        }

        setDisabled(false);
    }

    return (
        <form
            onSubmit={handleSubmit}
            id="contactForm"
        >
            <form
                name="files"
                encType="multipart/form-data"
                onSubmit={handleSubmitMultiFile}
            >
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="text"
                        name="courseName"
                        id="courseName"
                        placeholder="강의명"
                        value={courseName}
                        onChange={handleChangeCourseName}
                    />
                    <label htmlFor="courseName">강의명</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="text"
                        name="explanation"
                        placeholder="강의에 간단한 설명"
                        value={explanation}
                        onChange={handleChangeExplanation}
                    />
                    <label htmlFor="Explanation">강의에 대한 간단한 설명</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="file"
                        name="detailImageFile"
                        placeholder="강의 상세 설명 이미지"
                        //value={files}
                        accept="image/*,png,audio/*,video/mp4,video/x-mv4,application/pdf,application/vds.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                        onChange={handleUpload}
                    />
                    <label htmlFor="detailImageFile">강의 상세 설명 이미지 첨부</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="file"
                        name="proofImageFile"
                        placeholder="최종 결과물 이미지"
                        //value={files}
                        accept="image/*,png,audio/*,video/mp4,video/x-mv4,application/pdf,application/vds.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                        onChange={handleUpload}
                    />
                    <label htmlFor="proofImageFile">최종 결과물 이미지</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="file"
                        name="videoFile"
                        placeholder="강의 예시 영상"
                        //value={files}
                        accept="audio/*,video/mp4,mov,wmv,video/x-mv4,application/pdf,application/vds.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                        onChange={handleUpload}
                    />
                    <label htmlFor="videoFile">강의 예시 영상</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="date"
                        name="startDate"
                        placeholder="강의 시작 날짜"
                        value={startDate}
                        onChange={handleChangeStartDate}
                    />
                    <label htmlFor="startDate">강의 시작 날짜</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="date"
                        name="endDate"
                        placeholder="강의 종료 날짜"
                        value={endDate}
                        onChange={handleChangeEndDate}
                    />
                    <label htmlFor="endDate">강의 종료 날짜</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="number"
                        name="headCount"
                        placeholder="강의 인원수"
                        value={headCount}
                        onChange={handleChangeHeadCount}
                    />
                    <label htmlFor="headCount">강의 정원수</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="number"
                        name="coursePrice"
                        placeholder="강의 가격"
                        value={coursePrice}
                        onChange={handleChangeCoursePrice}
                    />
                    <label htmlFor="coursePrice">강의 가격</label>
                </div>
                <div className="form-floating mb-1">
                    <input
                        className="form-control"
                        type="file"
                        name="thumbnailImageFile"
                        placeholder="강의 썸네일 이미지"
                        //value={files}
                        accept="image/*,png,audio/*,video/mp4,video/x-mv4,application/pdf,application/vds.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                        onChange={handleUpload}
                    />
                    <label htmlFor="thumbnailImageFile">강의 썸네일 이미지</label>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={disabled}
                    >
                        강의 등록 신청하기
                    </button>
                </div>
            </form>
        </form>
    );
};

export default LectureRegisterForm;

// <form>
//     <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
//         <div className="container">
//             <a className="navbar-brand" href="#page-top">강의 등록 신청하기</a>
//             <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
//                     type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
//                     aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                 Menu
//             </button>
//             <div className="collapse navbar-collapse" id="navbarResponsive">
//                 <ul className="navbar-nav ms-auto">
//                     <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
//                                                              href="#about">[강사]</a></li>
//                 </ul>
//             </div>
//         </div>
//     </nav>