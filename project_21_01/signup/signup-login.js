
window.onload=function(){

/*변수 선언*/
const form = document.getElementById('#signup');
const id = document.getElementById('#sign_email');
const pw = document.getElementById('#sign_pw');
const pw2 = document.getElementById('#sign_pw_confirm');
const userName = document.getElementById('#sign_name');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces

	const idValue = id.value.trim();
	const pwValue = pw.value.trim();
	const pw2Value = pw2.value.trim();
    const userNameValue = userName.value.trim();
	
	
	if(idValue === '') {
		setErrorFor(id, 'Email cannot be blank');
	} else if (!isId(idValue)) {
		setErrorFor(id, 'Not a valid email');
	} else {
		setSuccessFor(id);
	}
	
	if(pwValue === '') {
		setErrorFor(pw, 'Password cannot be blank');
	} else {
		setSuccessFor(pw);
	}
	
	if(pw2Value === '') {
		setErrorFor(pw2, 'Password2 cannot be blank');
	} else if(pwValue !== pw2Value) {
		setErrorFor(pw2, 'Passwords does not match');
	} else{
		setSuccessFor(pw2);
	}

    if(userNameValue === '') {
		setErrorFor(userName, 'Username cannot be blank');
	} else {
		setSuccessFor(userName);
	}
}

function setErrorFor(input, message) {
	const fieldWrap = input.parentElement;
	const small = fieldWrap.querySelector('small');
	fieldWrap.className = 'field_wrap error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const fieldWrap = input.parentElement;
	fieldWrap.className = 'field_wrap success';
}
	
function isId(id) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(id);
}


};






