<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索"/>
        <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.id">
            <router-link v-bind:to="'/blog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.body | sinppet}}</article>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "show-blogs",
        data(){
            return{
                blogs:[],
                search:""
            }
        },
        created(){
            axios.get("http://jsonplaceholder.typicode.com/posts")
                .then((data)=> {
                    //截取10个数据
                   this.blogs = data.body.slice(0,10);
                    console.log(this.blogs);
                })
        },
        computed:{
          filteredBlogs:function () {
              return this.blogs.filter((blog)=>{
                  return blog.title.match(this.search);
              })
          }
        },
        //局部自定义过滤器
        filters:{
            "to-uppercase":function (value) {
                return value.toUpperCase();
            }
        },
        //局部自定义指令
        directives:{
            'rainbow':{
                bind(el,binding,vnode){
                    el.style.color="#" + Math.random().toString(16).slice(2,8);
                }
            }
        }
    }
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin:20px 0;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }
    #show-blogs a{
        color: #444;
        text-decoration: none;
    }
    input[type="text"]{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }
</style>