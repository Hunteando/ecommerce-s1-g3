export const formateado = (number) => {
	return number?.toLocaleString('ES-es', {
	 style: 'currency',
	 currency: 'USD',

	})
}