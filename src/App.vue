<template>
  <div id="app">
    <!--写博客-->
    <!--<add-blog></add-blog>-->
    <!--展示博客-->
    <!--<show-blogs></show-blogs>-->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import BlogHeader from "./components/BlogHeader";
export default {
  name: 'App',
  components: {
      BlogHeader,
      AddBlog,
      ShowBlogs
  }
}
</script>

<style>

</style>
