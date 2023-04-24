import { createRouter, createWebHistory } from 'vue-router';
import PokemonList from './components/PokemonList/PokemonList.vue';
import PokemonInfoCard from './components/PokemonInfoCard/PokemonInfoCard.vue';

const routes = [
  {
    path: '/',
    name: 'PokemonList',
    component: PokemonList
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonInfoCard',
    component: PokemonInfoCard,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
