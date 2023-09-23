import { Buffer } from 'node:buffer';

export default {
	from_string: (string, encoding) => {
		return Buffer
			.from(string, encoding)
			.toString('base64')
			.replace(/=/g, '')
			.replace(/\+/g, '-')
			.replace(/\//g, '_');
	},
	from_base64: (base64) => {
		return base64
			.replace(/=/g, '')
			.replace(/\+/g, '-')
			.replace(/\//g, '_');
	},
	to_unsafe_buffer: base64 => {
		// Add removed at end '='
		base64 += Array(5 - base64.length % 4).join('=');

		base64 = base64
			.replace(/\-/g, '+') // Convert '-' to '+'
			.replace(/\_/g, '/'); // Convert '_' to '/'

		return Buffer.from(base64, 'base64');
	},
};
