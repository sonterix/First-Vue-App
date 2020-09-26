<template>
  <section class="todo">
    <h1 class="todo__title">To Do List</h1>

    <div class="todo__add-form">
      <template v-if="editing">
        <input type="text" name="edit-task" v-model="editTask.text" />
        <button @click="handleSaveEditTask">Save</button>
      </template>

      <template v-else>
        <input type="text" name="task" v-model="task" />
        <button @click="handleAddTask">Add</button>
      </template>
    </div>

    <ul class="todo__list">
      <Task
        v-for="(task, index) in list"
        :key="index"
        :task="{ index, text: task }"
        :editing="editTask.index === index"
        :handleEditTask="handleEditTask"
        :handleRemoveTask="handleRemoveTask"
      />
    </ul>
  </section>
</template>

<script>
import { getItem, setItem } from '../../helpers/localStorage'
import Task from '../Task/Task'

export default {
  components: {
    Task
  },
  data() {
    return {
      editing: false,
      task: '',
      editTask: {
        index: -1,
        text: ''
      },
      list: getItem('list')
    }
  },
  methods: {
    handleUpdateLSList(list) {
      setItem('list', list)
    },
    handleAddTask() {
      const { task } = this

      if (task.length) {
        this.list.push(task)
        this.task = ''

        this.handleUpdateLSList(this.list)
      }
    },
    handleSaveEditTask() {
      const {
        editTask: { text, index }
      } = this

      if (text.length) {
        this.list[index] = text

        this.editing = false
        this.editTask.index = -1
        this.editTask.text = ''

        this.handleUpdateLSList(this.list)
      }
    },
    handleEditTask(index, text) {
      if (!(typeof index == 'number')) return

      this.editing = true
      this.editTask.index = index
      this.editTask.text = text

      this.handleUpdateLSList(this.list)
    },
    handleRemoveTask(index) {
      if (!(typeof index == 'number')) return
      this.list.splice(index, 1)

      this.handleUpdateLSList(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './ToDo.module.scss';
</style>
