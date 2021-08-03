import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

export interface TODO {
  id: number,
  userId?: number,
  title: string,
  completed: boolean
}

const todoInit: TODO[] = [];
const store = createStore({
  state: {
    todo: todoInit,
  },
  mutations: {
    getTodoData(state, todoData) {
      state.todo = todoData;
    },
    addTodo(state, newTodo) {
      let newTitleAdd = {
        id: Math.floor(Math.random() * 1000),
        title: newTodo,
        completed: false
      };
      state.todo.push(newTitleAdd);
    },
    changeTodoStatus(state, todoId) {
      state.todo.map(val => {
        if (val.id === todoId) {
          val.completed = true;
        }
      });
    },
    deleteTodo(state, todoId) {
      state.todo = state.todo.filter(val => val.id !== todoId);
    }
  },
  getters: {},
  actions: {
    getAllTodoApi({ commit }) {
      axios(baseURL)
        .then(response => {
          const data = response.data.filter((item: { userId: number; completed: boolean }) => item.userId === 1 && !item.completed);
          commit('getTodoData', data);
        });
    },
  },
  modules: {}
});

export default store;
