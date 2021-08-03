<template>
  <div class="input-container">
    <input v-model="todoTile" class="input" type="text" placeholder="Text input">
    <button @click="$store.commit('addTodo',todoTile)" class="button is-link">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'InputTodo',
  data() {
    return {
      todoTile: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;

  button {
    margin-left: 20px;
  }
}
</style>
