# test-1

npm run start  - запуск в одном потоке.
npm run cluster  - запуск кластера, кол-во воркеров зависит от кол-ва ядер у процессора.

Нагрузка на сервер проверялась с помощью  "autocannon -c 200 -d 10 http://localhost:3000".
на intel i7-6700HQ: 
для 1 потока - 20000 запросов в секунду, 75МБ/сек;
для кластера = 25000 запросов в секунду, 91МБ/сек;

Так же задеплоил на бесплатный сервер(уходит в спячку)
https://kolbert.herokuapp.com/.
