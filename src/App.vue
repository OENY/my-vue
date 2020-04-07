<template>
  <div id="app">
    <!--写博客-->
    <!--<add-blog></add-blog>-->
    <!--展示博客-->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
export default {
  name: 'App',
  components: {
      AddBlog,
      ShowBlogs
  }
}
</script>

<style>

</style>
