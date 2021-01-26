<template>
  <div class="about">
    <h1>测试 mock</h1>
    <p @click="handleQueryClick">Query</p>
    <p @click="handleAddClick">Add</p>
    <p @click="handleDeleteClick">Delete</p>
    <div :v-if="content.length > 0">{{ content }}</div>
  </div>
</template>

<script>
import { queryStudents, addStudent, deleteStudent } from '@/api/students'

export default {
  name: 'About',
  components: {},
  data() {
    return {
      content: '',
    }
  },
  methods: {
    handleQueryClick() {
      const params = {
        class: 'senior',
      }
      queryStudents(params).then((rsp) => {
        this.content = JSON.stringify(rsp)
      })
    },
    handleAddClick() {
      const params = {
        name: 'sheldon',
      }
      addStudent(params).then((rsp) => {
        this.content = JSON.stringify(rsp)
      })
    },
    handleDeleteClick() {
      deleteStudent().then((rsp) => {
        this.content = JSON.stringify(rsp)
      })
    },
  },
}
</script>
