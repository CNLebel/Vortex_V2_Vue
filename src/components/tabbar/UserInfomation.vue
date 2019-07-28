<template>
    <div>
        <div class="user_img">
            <div class="u_i_radius">
                <img src="../../assets/users/register_vortex.png" alt="120x120">
            </div>
        </div>
        <div class="user_box">
            <ul>
                <li>
                    <div class="ub_icon">
                        <p>用户名:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_name }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>昵称:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_nickname }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>手机号:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_mobile }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>微信号:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_wechat }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>QQ号:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_qq }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>联系地址:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_address }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>职业:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_occupation }}</p>
                    </div>    
                </li>

                 <li>
                    <div class="ub_icon">
                        <p>兴趣爱好:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_interest }}</p>
                    </div>    
                </li>

                 <li>
                    <div class="ub_icon">
                        <p>个人简介:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_aboutme }}</p>
                    </div>    
                </li>

                <li>
                    <div class="ub_icon">
                        <p>创建时间:</p>
                    </div>
                    <div class="ub_text">
                        <p>{{ user_ctime }}</p>
                    </div>    
                </li>
            </ul>
        </div>
        <mt-button plain type="primary" size="large" @click="getMore">编辑个人信息</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    data(){
        return{
            user_id: '',
            user_name: '',
            user_photo: '',
            user_mobile: '',
            user_wechat: '',
            user_qq: '',
            user_nickname: '',
            user_address: '',
            user_occupation: '',
            user_interest: '',
            user_aboutme: '',
            user_ctime: '',
        }
    },
    created(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo(){
            this.$http.get('api/userinfo').then(result => {
                if(result.body.errno === '0'){
                    
                    this.user_id = result.body.message.user_id;
                    this.user_name = result.body.message.user_name;
                    this.user_mobile = result.body.message.user_mobile;
                    this.user_wechat = result.body.message.user_wechat;
                    this.user_qq = result.body.message.user_qq;
                    this.user_nickname = result.body.message.user_nickname;
                    this.user_address = result.body.message.user_address;
                    this.user_occupation = result.body.message.user_occupation;
                    this.user_interest = result.body.message.user_interest;
                    this.user_aboutme = result.body.message.user_aboutme;
                    this.user_ctime = result.body.message.user_ctime;
                    this.user_ctime = result.body.message.user_photo;
                }else{
                    Toast('获取用户个人信息失败!');
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>

.user_img{
    margin-top: 33px;
    display: flex;
    justify-content: center;
    .u_i_radius{
        width: 125px;
        height: 125px;
        border-radius: 50%;
        background-color:#02d9f987;
        img{
            width: 125px;
            height: 125px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    
}

.user_box{
    width: 85%;
    margin: auto;
    margin-top:28px;
    margin-bottom: 66px; 
    ul{
        margin: 0;
        padding: 0;
        list-style: none; 
        li{
            display: flex;
            justify-content: center;
            .ub_icon{
                width: 33%;
                height: 45px;
                line-height: 45px;
                
                p{
                    font-size: 18px;
                    color: #888;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                
            }
            .ub_text{
                width: 60%;
                height: 45px;
                line-height: 45px;
                
                p{
                    font-size: 18px;
                    color: #888;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }

}
    
</style>
