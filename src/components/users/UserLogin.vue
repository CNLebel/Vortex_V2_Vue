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

                <mt-button type="primary" size="large" @click="userLogin">立即登录</mt-button>
                <div class="r_b_target">
                    <p>还没有帐号，<router-link to="/register">前往注册</router-link></p>   
                </div>
            </form>

        </div>
        
    </div>

</template>

<script>
import { Toast } from "mint-ui";

export default {
    data(){
        return {
            phonecode: '',
            password: '',
            password2: '',
        }
    },
    methods: {
        userLogin(){
            this.$http.post('api/login',{data:JSON.stringify({mobile:this.phonecode, 
                                                            password:this.password, 
                                                            password2:this.password2})}).then(result => {
                console.log(result.body)                                                
                if(result.body.errcode === '0'){
                    Toast('登录成功!')
                }else if(result.body.errcode === '3'){
                    Toast('手机号未注册!')    
                }else{
                    Toast('密码不正确!')
                }
            })
        }
    },

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
            
        }
        .r_b_target{
            height: 50px;
            margin: 15px auto;
            display: flex;
            justify-content:flex-end;
            margin-bottom: 180px; 
        
            p{
                font-size: 16px;
            }
        
        }
        
    }
</style>
