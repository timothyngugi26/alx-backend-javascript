export default function handleResponssnseFromAPI(promise){
	return promise
	.then(() =>({ status: 200, body: 'successFUL'}))
	.catch(() => new Error())
	.finally(() => console.log('Got API response'));
}
