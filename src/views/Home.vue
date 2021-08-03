<template>
  <div class="input-todo">
    <input-todo></input-todo>
  </div>
  <div class="todo-container">
    <display-todo></display-todo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputTodo from '@/components/InputTodo.vue';
import DisplayTodo from '@/components/DisplayTodo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    DisplayTodo,
    InputTodo
  },
});
</script>

<style lang="scss" scoped>
.input-todo {
  height: 50px;
}

.todo-container {
  height: calc(100% - 50px);
}
</style>
