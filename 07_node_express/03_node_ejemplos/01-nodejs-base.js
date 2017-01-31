
for (let i = 0; i < process.argv.length; i++) {
    console.log("Parámetro: " + i + " - " + process.argv[i]);
		
	
}
console.log("id del proceso: ", process.pid);
		console.log("title del proceso: ", process.title);
		console.log("version  del node: ", process.version);
		console.log("sistema operativo: ", process.platform);