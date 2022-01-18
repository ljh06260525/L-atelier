import client from './client';

// 로그인
export const signIn = ({email, password}) =>
    client.post('/api/auth/sign-in', {email, password});

// 회원가입
export const register = ({email, username, password, phoneNumber}) =>
    client.post('/api/auth/members', {email, username, password, phoneNumber})
        .then(response => {
            console.log(response)
        })
        .then((res) => res.data)
        .catch((error) => {
            console.log(error.response.data)
        });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/sign-out');

//!mypassword486@