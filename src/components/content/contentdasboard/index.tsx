import React from 'react'
import { Layout } from 'antd';
import './styles.scss'
import DasboardChartArea from './chartArea';
import DasboardSelect from './controll';
import { IDataCharts, IParams, ItemCharts } from 'types';
import { useParams } from 'react-router-dom';

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const DasboardContent = () => {
    const { Content } = Layout;
    const { control } :IParams= useParams()


    const data :IDataCharts[] =[]
    for (let i = 1; i <= 100; i++) {
        if(control=== undefined|| control ==='day'){
            data.push({
                x: i,
                y: randomIntFromInterval(1000, 4000)
            })
            
        }
        if(control ==='week'){
            data.push({
                x: 'Tuần ' + i,
                y: randomIntFromInterval(1000, 4000)
            })
        }
        if(control ==='month'){
            data.push({
                x: 'Tháng    ' + i,
                y: randomIntFromInterval(1000, 4000)
            })
        }
       
    
    
    }

    console.log(data)
   
    return (

        <Content>
            <div className="TagGroup">
                {/* Số thứ tự đã cấp */}
                <div className="TagItem">
                    <div className="TagItem-top">
                        <div className="TagItem-image">
                            <div>
                                <img src={require('../../../assets/icon/dasboard/iconSTTdacap.png')} />
                            </div>

                        </div>

                        <div className="TagItem-name">
                            Số thứ tự đã cấp
                        </div>
                    </div>

                    <div className="TagItem-bottom">
                        <h3>4.221 </h3>
                        <div className="TagItem-Status">
                            <img src={require('../../../assets/icon/dasboard/increase.png')} />
                            <p>32,41%</p>
                        </div>
                    </div>

                </div>
                {/* /đã  sử dụng */}
                <div className="TagItem TagItem-used">
                    <div className="TagItem-top">
                        <div className="TagItem-image">
                            <div>
                                <img src={require('../../../assets/icon/dasboard/iconSTTdasudung.png')} />
                            </div>

                        </div>

                        <div className="TagItem-name">
                            Số thứ tự đã sử dụng
                        </div>
                    </div>

                    <div className="TagItem-bottom">
                        <h3>3.721 </h3>
                        <div className="TagItem-Status">
                            <img src={require('../../../assets/icon/dasboard/decrease.png')} />
                            <p>32,41%</p>
                        </div>
                    </div>

                </div>
                {/* dang chờ */}
                <div className="TagItem TagItem-waited">
                    <div className="TagItem-top">
                        <div className="TagItem-image">
                            <div>
                                <img src={require('../../../assets/icon/dasboard/iconSTTdangdung.png')} />
                            </div>

                        </div>

                        <div className="TagItem-name">
                            Số thứ tự đang chờ
                        </div>
                    </div>

                    <div className="TagItem-bottom">
                        <h3>468 </h3>
                        <div className="TagItem-Status">
                            <img src={require('../../../assets/icon/dasboard/increase.png')} />
                            <p>56,41%</p>
                        </div>
                    </div>

                </div>
                {/* bỏ qua */}
                <div className="TagItem TagItem-skip">
                    <div className="TagItem-top">
                        <div className="TagItem-image">
                            <div>
                                <img src={require('../../../assets/icon/dasboard/iconSTTboqua.png')} />
                            </div>

                        </div>

                        <div className="TagItem-name">
                            Số thứ tự đã đã bỏ qua
                        </div>
                    </div>

                    <div className="TagItem-bottom">
                        <h3>4.221 </h3>
                        <div className="TagItem-Status">
                            <img src={require('../../../assets/icon/dasboard/decrease.png')} />
                            <p>22,41%</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="Dasboard-chartArea">
                <div className="Dasboard-chartArea-Header">

                    <div className="Dasboard-chartArea-title">
                        <h3>Bảng thống kê theo ngày</h3>
                        <p className='asboard-chartArea-monthyear'>Tháng 11/2021</p>
                    </div>

                <DasboardSelect/>
                </div>
                <div className="Dasboard-chartArea-main">
                    <DasboardChartArea data={data}/>
                </div>

            </div>
        </Content >


    )
}

export default DasboardContent