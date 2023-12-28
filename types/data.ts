export type PolledResult<T = any> = {
	loading: boolean,
	error?: string,
	value: T
}
