export default (words: string[]): string =>
	words.reduce((p: string, c: string) => {
		const isCapital = c.match(/[A-Z]/);

		if (!p.length) return c;

		return isCapital ? `${p}-${c}` : `${p}${c}`;
	}, '');
