 const users = [
      { username: 'mayawilianti', password: '890324145140', level: 'LADY MILLION', link: 'https://www.wanitasoultiey.com/order/form/ladymillions' },
      { username: 'zarinarusli', password: 'vip456', level: 'LADY MILLION', link: 'https://www.wanitasoultiey.com/order/form/ladymillions' },
      { username: 'sitihajar', password: 'agent123', level: 'LADY MILLION', link: 'https://www.wanitasoultiey.com/order/form/ladymillions' },
      { username: 'agentleader', password: 'agent456', level: 'AGENT', link: 'https://onpay.my/agent-order' },
      { username: 'customer1', password: 'cust123', level: 'CUSTOMER', link: 'https://onpay.my/customer-order' },
      { username: 'customer2', password: 'cust456', level: 'CUSTOMER', link: 'https://onpay.my/customer-order' }
    ];

    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const inputUser = document.getElementById('username').value.trim();
      const inputPass = document.getElementById('password').value.trim();

      const validUser = users.find(user => user.username === inputUser && user.password === inputPass);

      if (validUser) {
        errorMsg.style.color = 'green';
        errorMsg.textContent = `Login berjaya sebagai ${validUser.level}! Link dibuka...`;

        // Force buka link tab baru (bypass sandbox)
        setTimeout(() => {
          window.open(validUser.link, "_blank");
        }, 500);

      } else {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Username / Password Invalid!';
      }
    });
