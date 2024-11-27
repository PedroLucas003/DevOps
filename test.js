import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // Número de usuários virtuais
  iterations: 10, // Número total de iterações (requisições)
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1); // Pausa de 1 segundo entre as requisições
}
