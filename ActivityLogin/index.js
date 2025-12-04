document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('loginForm');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const message = document.getElementById('message');

	function showMessage(text, type = 'error') {
		message.textContent = text;
		message.className = type; // 'error' or 'success'
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		message.textContent = '';
		message.className = '';

		const username = usernameInput.value.trim();
		const password = passwordInput.value;

		const errors = [];
		if (!username) errors.push('Username is required.');
		if (username && !/^[\w.@-]{3,}$/.test(username)) {
			errors.push('Username must be at least 3 characters and contain only letters, numbers, ., @, _, or -');
		}

		if (!password) errors.push('Password is required.');
		if (password && password.length < 6) errors.push('Password must be at least 6 characters.');

		if (errors.length) {
			message.innerHTML = errors.map(err => `<div>${err}</div>`).join('');
			message.classList.add('error');
			return;
		}

		// Demo credential check (client-side only). Replace with real auth logic.
		const demoUser = { username: 'student', password: 'student123' };
		if (username === demoUser.username && password === demoUser.password) {
			showMessage('Login successful — redirecting...', 'success');
			setTimeout(() => {
				// For demo we can redirect to a welcome page or another local file
				window.location.href = 'welcome.html';
			}, 800);
			return;
		}

		showMessage('Invalid username or password.', 'error');
	});
});
