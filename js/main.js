let elForm = document.querySelector('.form');
let elNameInput = document.querySelector('.input-name');
let elMobileInput = document.querySelector('.input-mobile');
let elEmailInput = document.querySelector('.input-email');
let elTextarea = document.querySelector('.textarea');
let elSpan = document.querySelector('.form-span');


elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	let nameValue = elNameInput.value.trim();
    let mobileValue = elMobileInput.value.trim();
	let emailValue = elEmailInput.value.trim();
	let textareaValue = elTextarea.value.trim();
	

	if (nameValue.length < 2 || nameValue.length >30 ) {
		alert('Name Invalid');
		return;
	}

    if (mobileValue.length < 13 || mobileValue.startsWith(+998)) {
		alert(
			"Telefon raqam +998 bilan boshlanishi kerak va 13ta raqamdan iborat bo'lishi zarur");
		return;
	}

	if (!emailValue.endsWith('@gmail.com')) {
		alert('Email xato yozilgan');
		return;
	}


	if (textareaValue.length > 50) {
		alert('50 tadan oshmasligi kerak');
		return;
	}
});