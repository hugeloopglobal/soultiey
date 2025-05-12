<script>
  const users = [
    {
      username: 'mayawilianti',
      password: '5140',
      level: 'LADY MILLION',
      customer_name: 'Maya Wilianti',
      customer_phone: '0127331312',
      customer_email: 'mieyamaisara89@gmail.com'
    },
    {
      username: 'zarinarusli',
      password: 'vip456',
      level: 'LADY MILLION',
      customer_name: 'Zarina Rusli',
      customer_phone: '0139876543',
      customer_email: 'zarina@example.com'
    },
    {
      username: 'agentleader',
      password: 'agent456',
      level: 'AGENT',
      customer_name: 'Leader Agent',
      customer_phone: '0142223344',
      customer_email: 'agentleader@example.com'
    }
  ];

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
        errorMsg.textContent = `Login berjaya sebagai ${validUser.level}! Field telah diisi & dikunci.`;

        // ✅ Inject value dalam form OnPay
        document.getElementById('client_fullname').value = validUser.customer_name;
        document.getElementById('client_phone_number').value = validUser.customer_phone;
        document.getElementById('client_email').value = validUser.customer_email;

        // 🔒 Kunci field (tak boleh edit)
        document.getElementById('client_fullname').readOnly = true;
        document.getElementById('client_phone_number').readOnly = true;
        document.getElementById('client_email').readOnly = true;

      } else {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Username / Password Invalid!';
      }
    });
  });
</script>
