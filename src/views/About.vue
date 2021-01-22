<template>
  <div class="about">
    <h1>About</h1>
    <p @click="handleClick">Click me</p>
    <div :v-if="content.length > 0">{{content}}</div>
  </div>
</template>

<script>
import { queryStudents } from '@/api/test'

export default {
  name: 'About',
  components: {
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleClick() {
      const params = {
        class: 'senior'
      };
      queryStudents(params).then(rsp => {
        this.content = JSON.stringify(rsp);
      });
    }
  }
};
</script>
