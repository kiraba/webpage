var dev = process.env.NODE_ENV === 'development' ? true : false
module.exports = {
	'apiUrl' : dev ? 'http://localhost:3000' : '',
	'env': dev ? 'dev' : 'prod'
};