// List Leader + Details Customer Fixed
const users = [
  {
    username: 'mayawilianti',
    password: '5140',
    level: 'LADY MILLION',
    customer_name: 'Maya Wilianti',
    customer_phone: '0127331312',
    customer_email: 'mieyamaisara89@gmail.com',
    onpay_link: 'https://onpay.my/order'
  },
  {
    username: 'zarinarusli',
    password: 'vip456',
    level: 'LADY MILLION',
    customer_name: 'Zarina Rusli',
    customer_phone: '0139876543',
    customer_email: 'zarina@example.com',
    onpay_link: 'https://onpay.my/order'
  },
  {
    username: 'agentleader',
    password: 'agent456',
    level: 'AGENT',
    customer_name: 'Leader Agent',
    customer_phone: '0142223344',
    customer_email: 'agentleader@example.com',
    onpay_link: 'https://onpay.my/order'
  }
  // Tambah lagi kalau nak
];

// Login Logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const errorMsg = document.getElementById('errorMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputUser = document.getElementById('username').value.trim();
    const inputPass = document.getElementById('password').value.trim();

    const validUser = users.find(user => user.username === inputUser && user.password === inputPass);

    if (validUser) {
      errorMsg.style.color = 'green';
      errorMsg.textContent = `Login berjaya sebagai ${validUser.level}! Redirecting...`;

      // Bina OnPay Link dengan auto prefill
      const name = encodeURIComponent(validUser.customer_name);
      const phone = encodeURIComponent(validUser.customer_phone);
      const email = encodeURIComponent(validUser.customer_email);

      // Prefill OnPay (kalau form OnPay support name, phone, email)
      const redirectLink = `${validUser.onpay_link}?name=${name}&phone=${phone}&email=${email}`;

      // Redirect lepas 0.5 saat
      setTimeout(() => {
        window.location.href = redirectLink;
      }, 500);
    } else {
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Username / Password Invalid!';
    }
  });
});
