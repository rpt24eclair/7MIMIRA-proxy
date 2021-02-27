import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '30s',
};

export default function () {
  http.get('http://localhost:3013/#footer-container');
  sleep(1);
}
