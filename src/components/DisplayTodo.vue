<template>
  <table class="table">
    <thead>
    <tr>
      <th><abbr title="Position">Id</abbr></th>
      <th>Title</th>
      <th><abbr title="Played">Status</abbr></th>
    </tr>
    </thead>
    <tfoot>
    <tr>
      <th><abbr title="Position">Id</abbr></th>
      <th>Title</th>
      <th><abbr title="Played">Status</abbr></th>
    </tr>
    </tfoot>
    <tbody>
    <tr v-for="item in $store.state.todo" :key="item.id">
      <th>{{ item.id }}</th>
      <td>{{ item.title }}</td>
      <td>
        <button @click="onCompleteTodoBtnClick(item.id)" class="button is-primary" :disabled="item.completed">
          {{ item.completed ? 'Completed' : 'Complete?' }}
        </button>
        <button @click="onDeleteTodoBtnClick(item.id)" class="button is-danger ml-2">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

import store from '@/store';

export default {
  name: 'DisplayTodo',
  created() {
    store.dispatch('getAllTodoApi');
  },
  methods: {
    onCompleteTodoBtnClick(id) {
      const confirm = window.confirm('Are you sure ?');
      confirm && store.commit('changeTodoStatus', id);
    },
    onDeleteTodoBtnClick(id) {
      const confirm = window.confirm('Are you sure ?');
      confirm && store.commit('deleteTodo', id);
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
