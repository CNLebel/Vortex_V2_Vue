<template>
    <div>

        <div class="vortex_img">
            <img src="../../assets/users/register_vortex.png" alt="">
        </div>

        <div class="form_box">
            <form action="">

                <div class="mui-input-row row_block">
                    <div class="r_b_icon">
                        <img src="../../assets/users/register_moblie.png" alt="">
                    </div>
                    <div class="r_b_input">
                        <input type="text" placeholder="手机号码" v-model="phonecode">
                    </div>    
                </div>

                <div class="mui-input-row row_block">
                    <div class="r_b_icon">
                        <img src="../../assets/users/register_img.png" alt="">
                    </div>

                    <div class="r_b_img">
                        <div class="img_input">
                            <input type="text" placeholder="图形验证" v-model="image_code_text">
                        </div>
                        <div class="img_img">
                            <img v-bind:src="img_url" alt=""  @click="getAgain">
                        </div>
                    </div>
                   
                </div>

                <div class="mui-input-row row_block">
                    <div class="r_b_icon">
                        <img src="../../assets/users/register_message.png" alt="">
                    </div>
                    <div class="r_b_moblie">
                        <div class="mobile_input">
                            <input type="text" placeholder="短信验证" v-model="smscode">
                        </div>
                        <div class="mobile_button">
                            <button v-show="show_sms" @click="getPhoneCode">获取验证码</button>
                            <button v-show="!show_sms" @click="getPhoneCode">{{ count }}s</button>
                        </div>
                    </div>
                </div>


                <div class="mui-input-row row_block">
                    <div class="r_b_icon">
                        <img src="../../assets/users/register_password.png" alt="">
                    </div>
                    <div class="r_b_input">
                        <input type="password" placeholder="密       码" v-model="password">
                    </div>    
                </div>

                <div class="mui-input-row row_block">
                    <div class="r_b_icon">
                        <img src="../../assets/users/register_password.png" alt="">
                    </div>
                    <div class="r_b_input">
                        <input type="password" placeholder="确认密码" v-model="password2">
                    </div>    
                </div>

                <mt-button type="primary" size="large" @click="userRegister">立即注册</mt-button>
                <div class="r_b_target">
                    <p>已有帐号，<router-link to="/login">立即登录</router-link></p>   
                </div>
            </form>

        </div>
        
    </div>

</template>

<script>
import { Toast } from "mint-ui";
import { setInterval } from 'timers';

export default {
    
    data(){
        return {
            phonecode: '',
            code_id: '',
            pcode_id: '',
            img_url: '',
            image_code_text: '',
            count: '',
            timer: null,
            show_sms: true,
            smscode: '',
            password: '',
            password2: '',
        }
    },
    created() {
        this.getImageCode();
    },
    methods:{
        uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for(var i=0; i<36; i++){
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            return uuid;
        },
        smsDisabling(){
            const TIME_COUNT = 60;
            if(!this.timer){
                this.count = TIME_COUNT;
                this.show_sms = false;
                this.timer = setInterval(() => {
                    if(this.count > 0 && this.count <= TIME_COUNT){
                        this.count--;
                    }else{
                        this.show_sms = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        },
        getImageCode() {
            this.code_id = this.uuid();
            this.img_url = 'http://192.168.46.124:8000/api/imagecode?code_id='+ this.code_id + '&pcode_id=' + this.pcode_id;
        },
        getAgain(){
            this.pcode_id = this.code_id;
            this.code_id = this.uuid();
            this.img_url = 'http://192.168.46.124:8000/api/imagecode?code_id='+ this.code_id + '&pcode_id=' + this.pcode_id;
        }, 
        getPhoneCode(){
            this.$http.post('api/smscode',{data:JSON.stringify({mobile:this.phonecode, 
                                                                image_code_id:this.code_id, 
                                                                image_code_text:this.image_code_text})}).then(result => {
                if(result.body.errcode === '0'){
                    this.smsDisabling();
                    Toast('获取短信成功请留意查收!');
                }else{
                    Toast('获取短信验证码失败!');
                }
            })
        },
        userRegister() {
            this.$http.post('api/register',{data:JSON.stringify({mobile:this.phonecode, smscode:this.smscode, password:this.password, password2:this.password2})}).then(result => {
                if(result.body.errno === '0'){
                    Toast('手机号注册成功!');
                }else if(result.body.errno === '3'){
                    Toast('手机号已注册!');
                }else{
                    Toast('手机号注册失败!');
                }
                console.log(result.body);
            })
        }
        
    }
}
</script>

<style lang="scss" scoped>
    
    .vortex_img{
        margin: 33px auto;
        display: flex;
        justify-content: center;
        img{
            height: 125px;
        }
    }

    .form_box{
        width: 85%;
        margin: auto;

        .row_block{
            border: #26a2ff 1px solid;
            border-radius: 25px;
            margin-bottom: 28px;
            height: 45px; 
            display: flex;
            justify-content: center;
            .r_b_icon{
                width: 22%;
                height: 45px;
                img{
                    width: 45px;
                    height: 45px;
                }
                display: flex;
                justify-content: center;
            }
            .r_b_input{
                height: 45px;
                input{
                    background: 0 0;
                    border: none;
                }
            }

            .r_b_img{
                width: 78%;
                .img_input{
                    width: 55%;
                    height: 45px;
                    input{
                        background: 0 0;
                        border: none;
                    }
                }
                .img_img{
                   
                    width: 45%;
                    height: 45px;
                    img{
                        height: 45px;
                    }

                    display: flex;
                    justify-content: center;
                }
                display: flex;
                justify-content: space-between;
            }
            .r_b_moblie{
                width: 78%;
                .mobile_input{
                    width: 55%;
                    height: 45px;
                    input{
                        background: 0 0;
                        border: none;
                    }
                }
                .mobile_button{
                    width: 45%;
                    height: 45px;
                    button{
                        background: #F0F8FF;
                        border: none;
                    }
                    display: flex;
                    justify-content: center;
                }
                display: flex;
                justify-content: space-between;
            }
            
        }
        .r_b_target{
            height: 50px;
            margin: 15px auto;
            display: flex;
            justify-content:flex-end;
        
            p{
                font-size: 16px;
            }
        
        }
        
    }
</style>
