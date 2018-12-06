var modal_open = document.querySelector(".contact-info-button");
var modal_overlay = document.querySelector(".modal-overlay");
var modal_window = document.querySelector(".modal-window");
var close = document.querySelector(".modal-close");
var form = modal_window.querySelector("form");
var clientName = modal_window.querySelector("[name=name]");
var clientEmail = modal_window.querySelector("[name=email]");
var storage_name = localStorage.getItem("clientName");
var storage_email = localStorage.getItem("clientEmail");
var modal_alert = document.querySelector(".modal-alert");

modal_open.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_overlay.classList.add("show-modal");
	modal_window.classList.add("modal-animation");
	if (storage_name) {
		clientName.value = storage_name;
		clientEmail.focus();
	} else {
		clientName.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_overlay.classList.remove("show-modal");
	modal_window.classList.remove("modal-error");
});
		
form.addEventListener("submit", function (evt) {
	if (!clientName.value || !clientEmail.value) {
		evt.preventDefault();
		modal_window.classList.remove("modal-error");
		void modal_window.offsetWidth;
		modal_window.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("clientName", clientName.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault(); 
		if (modal_overlay.classList.contains("show-modal")) {
			modal_overlay.classList.remove("show-modal");
		}
	}
});