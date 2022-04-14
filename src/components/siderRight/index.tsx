import React from 'react'
import { Progress } from 'antd'
import { Link } from 'react-router-dom'
import HeaderAccount from 'components/header/account'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss'



const SiderRinght = () => {

    return (

        <div className='SiderRight'>
            <HeaderAccount />

            <div className="SiderRight-ContentTitle">
                <h3>Tổng quan</h3>
            </div>

            <div className="SiderRight-Progress">
                <Link to={'/thietbi'}>
                    <div className="SiderRight-ProgressItem">
                        <Progress
                            className='Progress-antd'
                            type="circle"
                            percent={90}
                            width={60}
                            strokeColor='#FF7506'
                            format={percent =>
                                <Progress
                                    width={50}
                                    type='circle'
                                    strokeColor='#7E7D88'
                                    percent={percent ? 100 - percent : 0}
                                    format={percent => percent ? `${100 - percent}%` : 0}
                                />} />
                        <div className="">
                            <p className='Active-device'>4.221</p>

                            <div className='Progress-name'>
                                <img src={require('../../assets/icon/dasboard/monitor.png')} />
                                <p>Thiết bị</p>
                            </div>

                        </div>
                        <div className="Progress-description">
                            <div className="Progress-description-active">
                                <img src={require('../../assets/icon/dasboard/circleyellow.png')} />
                                <p>Đang hoạt động: <span>3.799</span></p>
                            </div>
                            <div className="Progress-description-noactive">
                                <img src={require('../../assets/icon/dasboard/circlenoactive.png')} />
                                <p>Ngưng hoạt động: <span>422</span></p>
                            </div>
                        </div>


                    </div>
                </Link>

                <Link to={'/dichvu'}>
                    <div className="SiderRight-ProgressItem ">
                        <Progress
                            className='Progress-antd'
                            type="circle"
                            percent={76}
                            width={60}
                            strokeColor='#4277FF'
                            format={percent =>
                                <Progress
                                    width={50}
                                    type='circle'
                                    strokeColor='#7E7D88'
                                    percent={percent ? 100 - percent : 0}
                                    format={percent => percent ? `${100 - percent}%` : 0}
                                />} />
                        <div className="">
                            <p className='Active-device'>276</p>

                            <div className='Progress-name dichvu'>
                                <img src={require('../../assets/icon/dasboard/dichvu.png')} />
                                <p>Dịch vụ</p>
                            </div>

                        </div>
                        <div className="Progress-description ">
                            <div className="Progress-description-active dichvu">
                                <img src={require('../../assets/icon/dasboard/circleblue.png')} />
                                <p>Đang hoạt động: <span>210</span></p>
                            </div>
                            <div className="Progress-description-noactive dichvu">
                                <img src={require('../../assets/icon/dasboard/circlenoactive.png')} />
                                <p>Ngưng hoạt động: <span>422</span></p>
                            </div>
                        </div>


                    </div>
                </Link>

                <Link to={'/capso'}>
                    <div className="SiderRight-ProgressItem">
                        <Progress
                            className='Progress-antd'
                            type="circle"
                            percent={86}
                            width={60}
                            strokeColor='#35C75A'
                            format={percent =>
                                <Progress
                                    width={50}
                                    type='circle'
                                    strokeColor='#7E7D88'
                                    percent={percent ? 100 - percent : 0}
                                    format={percent =>
                                        <Progress
                                            width={40}
                                            type='circle'
                                            strokeColor='#F178B6'
                                            percent={10}
                                            format={percent =>
                                                `${86}%`
                                            }
                                        />}
                                />} />
                        <div className="">
                            <p className='Active-device'>4.221</p>

                            <div className='Progress-name capso'>
                                <img src={require('../../assets/icon/dasboard/capso.png')} />
                                <p>Cấp số</p>
                            </div>

                        </div>
                        <div className="Progress-description">
                            <div className="Progress-description-active capso">
                                <img src={require('../../assets/icon/dasboard/circleyellow.png')} />
                                <p>Đang chờ: <span>3.799</span></p>
                            </div>

                            <div className="Progress-description-noactive capso">
                                <img src={require('../../assets/icon/dasboard/circleyellow.png')} />
                                <p>Đã sử dụng: <span>3.721</span></p>
                            </div>
                            <div className="Progress-description-active capso">
                                <img src={require('../../assets/icon/dasboard/circlepink.png')} />
                                <p>Đã sử dụng: <span>32</span></p>
                            </div>
                        </div>


                    </div>
                </Link>
            </div>

            <div className="SiderRight-Calendar">
                <Calendar />
            </div>

        </div>


    )
}

export default SiderRinght