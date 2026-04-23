for (const [k, v] of Object.entries(statistics)) {
 
	if (k.startsWith("r") || v % 2 != 0) {

		console.log(`${v}`);

	}

} 
