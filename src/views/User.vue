<template>
  <div id="app">
    <h1>User page</h1>
    <p>This is the User page content</p>
    <p>id is {{ id }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      id: ''
    };
  },
  watch: {
    '$route'(to, from) {
      console.log('User 参数的变化可以被监听到, 只监听自己内部的子路由');
      console.log('watch $route', to, from, this.$route);
      this.id = this.$route.query.id;
    }
  },
  mounted() {
    this.id = this.$route.query.id;
  }
};
</script>
