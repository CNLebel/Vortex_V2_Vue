<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                    <img src="../../assets/shenghuo.png" alt="">
		            <div class="mui-media-body">生活</div>
                </router-link>
            </li>

		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photolist">
		            <img src="../../assets/notebook__eas.png" alt="">
		            <div class="mui-media-body">笔记</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodslist">
		            <img src="../../assets/jilu.png" alt="">
		            <div class="mui-media-body">记录</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
		            <img src="../../assets/jishurenyuan.png" alt="">
		            <div class="mui-media-body">技术</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
		            <img src="../../assets/gaoxiao.png" alt="">
		            <div class="mui-media-body">搞笑</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
		            <img src="../../assets/tucao.png" alt="">
		            <div class="mui-media-body">吐槽</div>
                </a>
            </li>
		</ul>

        <div class="table-title-label">文章 <img src="../../assets/tuijian2.png" alt=""> 推荐</div>
        

        <ul class="mui-table-view">
			
            <li class="mui-table-view-cell mui-media" v-for="item in articlelist" :key="item.id">
				<a href="javascript:;" class="">
					<img class="mui-media-object mui-pull-left" src="https://gitee.com/uploads/91/465191_vsdeveloper.jpg?1437703838">
					<div class="mui-media-body">
						<h1>{{ item.article_title }}</h1>
                        <p>{{ item.article_abstract }}</p>
						<p class="mui-ellipsis">
                            <span><img src="../../assets/yueduliang.png" alt="浏览量"> <p>{{ item.article_views }}</p> </span>
                            <span><img src="../../assets/dianzan_active.png" alt="点赞数"> <p>{{ item.article_like_count }}</p> </span>
                            <span><img src="../../assets/pinglun.png" alt="评论数"> <p>300</p>{{ item.vor_article_comment_count }} </span>
                        </p>
					</div>
				</a>
			</li>

		</ul>

        <mt-button plain type="primary" size="large" @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
import { Toast } from "mint-ui";
import { createHash } from 'crypto';

export default {
    data() {
        return {
            page_limit: 20,     //每页显示的数量
            page_start: 1,      //页码
            articlelist: []     //文章列表
        }
    },
    created() {
        this.getArticleList();
    },
    methods: {
        getArticleList(){
            this.$http.get('api/listarticle?page_limit=' + this.page_limit + '&page_start=' + this.page_start).then(result =>{
                if(result.body.errno === '0'){
                    this.articlelist = this.articlelist.concat(result.body.message);
                }else{
                    Toast('获取文章列表失败!')
                }
            })
        },
        getMore(){
            this.page_start++;
            this.getArticleList();
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    
    .mint-swipe-item{
        text-align: center;
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color:cyan;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.full{
    width: 100%;
}



.mui-grid-view.mui-grid-9{
 
    background-color: #fff;
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 16px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}

.table-title-label{
    img{
        width: 20px;
        height: 20px;
    }
    height: 20px;
    line-height: 20px;
    margin: 25px 0 15px 25px;
    font-size: 16px;
}

.mui-table-view{

    li{

        img{
            max-width: 100%;
            height: 120px;
        }
        border-radius: 5px;
        margin: 10px;
        h1{
            font-size:16px;
            color: #FF6060;
            text-align: center;
            
        }
        
        .mui-ellipsis{
            span{
                display: flex;
                img{
                    width: 25px;
                    height: 25px;
                }
                line-height: 25px;
                font-size: 11px;
            }
            display: flex;
            justify-content:space-between;
        }
    }
}
</style>
