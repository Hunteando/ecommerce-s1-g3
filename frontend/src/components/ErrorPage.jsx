import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
	const error = useRouteError()
	return (
		<div>
		<h1>Hubo un error</h1>
			<div>{error.statusText || error.message}</div>
		</div>
	)
}
