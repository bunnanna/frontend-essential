const fetchData = Promise.resolve("resoved");

const getData = async () => {
	try {
		console.log("a");
		const res = await fetchData;
		const res2 = await fetchData;
		const res3 = await fetchData;
		console.log(res, res2, res3);
	} catch (error) {
		console.log("err");
		console.log(error);
	}
};

getData();
