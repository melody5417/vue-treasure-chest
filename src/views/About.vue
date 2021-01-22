<template>
  <div class="about">
    <h1>About</h1>
    <p @click="handleClick">About page content</p>
  </div>
</template>

<script>
import { queryList } from '@/api/test'

export default {
  name: 'About',
  components: {
  },
  methods: {
    handleClick() {
      const params = {
        pageNum: 1,
        pageSize: 10,
        userId: "XXX"
      };
      queryList(params).then(rsp => {
        console.log(rsp);
      });
    }
  }
};
</script>
