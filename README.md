Para iniciar o projeto e fazer os testes de carga

1- instale o k6 no cmd    ----   (choco install k6)
2- na pasta test.js você pode mudar a quantidade de requisições ex:

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

