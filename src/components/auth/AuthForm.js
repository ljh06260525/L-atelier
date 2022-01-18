import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: ${palette.gray[8]};
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

// const PhoneNumberRequest = styled.input`
//   font-size: 1rem;
//   border: 1px solid #f03e3e;
// `;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: ${palette.gray[6]};
    text-decoration: underline;

    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입'
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

// function checkedRole(form, e, c){
//     if(e){
//         form.role = "user";
//     }else if(c){
//         form.role = "instructor";
//     }
// }

// Object.defineProperty(checkedRole, 'role', {
//     writable: true
// });

// function checkedRole(form, e){
//     if(e){
//         const formObj = {form}
//         formObj.role = "user";
//         console.log(form);
//     }else{
//         form.role = "instructor";
//     }
// }

const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                {/*<form style={{display: "flex", flexDirection: "column"}}>*/}
                {/*    <div>*/}
                {/*        <label htmlFor="role">*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                id="role"*/}
                {/*                name="role"*/}
                {/*                value="user"*/}
                {/*                //onClick={(e) => {*/}
                {/*                        //checkedRole(form, e.target.checked)*/}

                {/*            />수강생*/}
                {/*        </label>*/}
                {/*        <label htmlFor="role">*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                id="role"*/}
                {/*                name="role"*/}
                {/*                value="instructor"*/}
                {/*                // onClick={(c) => {*/}
                {/*                //     checkedRole(form, c.target.checked)*/}
                {/*            />강사*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*</form>*/}
                <br/>
                <StyledInput
                    autoComplete="email"
                    name="email"
                    placeholder="이메일"
                    type="email"
                    onChange={onChange}
                    value={form.email}
                />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호(영문,숫자,특수문자 8~16자 이내)"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인(영문,숫자,특수문자 8~16자 이내)"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="username"
                        name="username"
                        placeholder="이름"
                        type="username"
                        onChange={onChange}
                        value={form.username}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="phoneNumber"
                        name="phoneNumber"
                        placeholder="핸드폰 번호"
                        onChange={onChange}
                        value={form.phoneNumber}
                    />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan fullWidth style={{marginTop: '1rem'}}>
                    {text}
                </ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
