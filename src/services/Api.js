import axios from 'axios'

const url = 'http://127.0.0.1/api';

export default function api() {
	return axios.create({
		baseURL: url
	});
}
