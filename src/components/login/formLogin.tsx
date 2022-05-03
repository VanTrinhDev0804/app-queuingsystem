import { Form, Input, Button, Space } from 'antd';
import { db } from '../../firebase/cofig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom'
import iconErr from '../../assets/icon/errlogin.png'
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { addUser } from 'redux/slice/authSlice';

const FormLogin = () => {
    const [checkUser, setCheckUser] = useState(true);
    const history = useHistory();


    const { currentUser } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()


    const userList: any = []
    const dataCollectionRef = collection(db, 'User')
    useEffect(() => {
        const getUser = async () => {
            const querySnapshot = await getDocs(dataCollectionRef)
            querySnapshot.forEach((doc) => {
                let item = { id: `${doc.id}`, ...doc.data() }
                userList.push(item)
            })
        }
        getUser()
    }, [])

    const onFinish = (values: any) => {
        const user = userList.filter((user: any) => {
            return user.username === values.username && user.password === values.password
        })

        if (!user?.[0]) {
            setCheckUser(false)
        }
        else {
            dispatch(addUser(user))
            window.localStorage.setItem('author', JSON.stringify(user))
            history.push('/home')
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Tên đăng nhập *"
                name="username"
                className='lableInput'
                initialValue={'lequynhaivan01'}
            >
                <Input required />
            </Form.Item>
            <Form.Item
                label="Mật khẩu *"
                name="password"
                initialValue={'311940211'}

            >
                <Input
                    type="password"
                    required
                />
            </Form.Item>
            <Form.Item >
                {
                    checkUser ?
                        <>
                            <Link className="login-form-forgot" to={`/forgot-password`}>
                                Quên mật khẩu?
                            </Link>
                        </> :
                        <div className='login__Status'>
                            <img src={iconErr} />
                            <span>
                                Sai mật khẩu hoặc tên đăng nhập
                            </span>
                        </div>

                }

            </Form.Item>

            <Form.Item >
                <div className='btn-group'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Đăng nhập
                    </Button>

                    {
                        !checkUser ?
                            <>
                                <Link className="login-form-forgot" to={`/forgot-password`}>
                                    Quên mật khẩu?
                                </Link>
                            </> : ""
                    }


                </div>


                {/* Or <a href="">register now!</a> */}
            </Form.Item>
        </Form>
    );
};

export default FormLogin






