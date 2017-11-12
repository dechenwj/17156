<template>
	<div id="comment-wrapper">
		<div id="comments" v-for="item in comments" :key="item.id">
	  		<div class="comment-head">
				<span class="comment-head-scoring"><i class="users-scoring">{{item.score}}</i>分</span>
				<span class="user-fell font-color">{{item.fell}}</span>
				<span class="morecomments">></span>
				<span class="users-comments">用户评论<i class="comments-count">({{item.count}})</i></span>
			</div>
	  		<div class="comment-mid">
				<span class="start icon-ico_praise iconfont"></span>
				<span class="comments-date">b*5&nbsp;&nbsp;{{currentDate}}</span>
	  		</div>
	  		<div class="comment-con">{{item.commentContent}}</div>
  		</div>
	</div>
</template>

<script>


export default {
	data(){
		return {
			comments:[{"id":1,"score":4.9,"fell":"非常满意","count":282,"commentContent":"兵阿哥的导游服务超级棒，贴心，诙谐幽默，知识渊博，出口成章，引经据典，留下了美好的回忆"}]
		}
	},
	computed:{
		currentDate(){
			return new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();
		}
	}
}
</script>

<style scoped>
#comment-wrapper{
	margin-bottom:.2rem;
}
 #comments{
 	margin-top: .2rem;
 	padding: .2rem;
 	background: #fff;
 }
 .comment-head{
 	line-height: .8rem;
 	border-bottom: 1px solid #eee;
 }
 .comment-head-scoring{
 	width: .8rem;
 	font-size: .28rem;
 	color: #00afc7;
 }
 .users-scoring{
 	font-size: .54rem;
 }
 .font-color{
 	color: #616161;
 }
 .users-comments{
 	float: right;
 	color: #9e9e9e;
 }
 .morecomments{
 	float: right;
 	font-size: .52rem;
 	line-height: .86rem;
 	margin-left: .2rem;
 	color: #9e9e9e;
 }
 .start{
 	color: #00afc7;
 	font-size:.24rem;
 }
 .comments-date{
 	float: right;
 }
 .comment-mid{
	margin: .28rem 0 .2rem;
 }
 .comment-con{
 	height: .8rem;
 	line-height: .4rem;
 	overflow: hidden;
 	text-overflow: ellipsis;
 }
</style>
