// List Leader + Details Customer Fixed
const users = [
  {
    username: 'mayawilianti',
    password: '5140',
    level: 'LADY MILLION',
    customer_name: 'Maya Wilianti',
    customer_phone: '0127331312',
    customer_email: 'mieyamaisara89@gmail.com',
    onpay_link: 'https://www.wanitasoultiey.com/order/form/ladymillions'
  },
  {
    username: 'zarinarusli',
    password: 'vip456',
    level: 'LADY MILLION',
    customer_name: 'Zarina Rusli',
    customer_phone: '0139876543',
    customer_email: 'zarina@example.com',
    onpay_link: 'https://www.wanitasoultiey.com/order/form/ladymillions'
  },
  {
    username: 'agentleader',
    password: 'agent456',
    level: 'AGENT',
    customer_name: 'Leader Agent',
    customer_phone: '0142223344',
    customer_email: 'agentleader@example.com',
    onpay_link: 'https://www.wanitasoultiey.com/order/form/ladymillions'
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

      // Simpan details dalam localStorage untuk page seterusnya
      localStorage.setItem('customer_name', validUser.customer_name);
      localStorage.setItem('customer_phone', validUser.customer_phone);
      localStorage.setItem('customer_email', validUser.customer_email);

      setTimeout(() => {
        window.location.href = validUser.onpay_link;
      }, 500);

    } else {
      errorMsg.style.color = 'red';
      errorMsg.textContent = 'Username / Password Invalid!';
    }
  });
});
