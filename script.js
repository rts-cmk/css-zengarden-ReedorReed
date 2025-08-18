const pageWrapper = document.querySelector('.page-wrapper');
const intro = pageWrapper.querySelector('.intro');
const main = pageWrapper.querySelector('.main');
const sideBar = pageWrapper.querySelector('.sidebar');
const data = 'http://127.0.0.1:5500/data.json';

fetch(data)
	.then((response) => {
		return response.json();
	})
    .then((data) => {
        console.log(data);
    });


