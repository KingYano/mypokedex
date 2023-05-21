import { createRouter, createWebHistory } from 'vue-router';
import PokemonList from './components/PokemonList/PokemonList.vue';
import PokemonInfo from './components/PokemonInfo/PokemonInfo.vue';

const routes = [
  {
    path: '/',
    name: 'PokemonList',
    component: PokemonList
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonInfo',
    component: PokemonInfo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
