<template>
  <li :class="`task ${editing ? 'editing' : ''}`">
    <span class="task__text">
      {{ task.text }}
    </span>
    <button class="task__edit-btn" @click="handleEditTask(task.index, task.text)">Edit</button>
    <button class="task__remove-btn" @click="handleRemoveTask(task.index)">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object,
    editing: Boolean,
    handleEditTask: Function,
    handleRemoveTask: Function
  }
}
</script>

<style lang="scss" scoped>
@import './Task.module.scss';
</style>
