const cardtemplate = (data) => {
	const { courseNo, abbrName, department, credit, totalSeats, genEdType } =
		data;
	return `<section class="card">
	<h3>${courseNo} ${abbrName}</h3>
	<h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
	<p>${department}/p>
	<h4>จำนวนหน่วยกิต</h4>
	<p>${credit} หน่วยกิต</p>
	<h4>จำนวนที่นั่ง</h4>
	<p>${totalSeats}</p>
	<h4>ประเภทGenEd</h4>
	<p>${genEdType}</p>
</section>`;
};

const main = async () => {
	const datas = await fetch("https://api.minireg.thanayut.in.th/courses")
		.then((res) => res.json())
		.catch((err) => console.log(err));
	if (datas?.error) {
		console.log(datas?.error);
		return;
	}
	const allcard = datas?.courses.reduce((prev, curr) => {
		prev += cardtemplate(curr);
		return prev;
	}, "");

	const cardlist = document.getElementById("card-list");
	cardlist.innerHTML = allcard;
};
document.addEventListener("DOMContentLoaded", () => main());
