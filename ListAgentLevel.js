
    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const inputUser = document.getElementById('username').value.trim();
      const inputPass = document.getElementById('password').value.trim();

      const validUser = users.find(user => user.username === inputUser && user.password === inputPass);

      if (validUser) {
        errorMsg.style.color = 'green';
        errorMsg.textContent = `Login berjaya sebagai ${validUser.level}! Sedang redirect...`;

        // Redirect selepas 1 saat
          setTimeout(() => {
    window.open(validUser.link, "_blank"); // Buka tab baru (confirm jalan)
  }, 1000);
} else {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Username / Password Invalid!';
      }
    });
