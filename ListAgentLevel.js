const users = [
	  { username: 'mayawilianti', password: '890324145140', level: 'LADY MILLION', link: 'https://www.wanitasoultiey.com/order/form/ladymillions' },
	  { username: 'zarinarusli', password: 'vip456', level: 'LADY MILLION', link: 'https://www.wanitasoultiey.com/order/form/ladymillions' },
	  { username: 'sitihajar', password: 'agent123', level: 'LADY MILLION', link: 'https://www.wanitasoultiey.com/order/form/ladymillions' },
	  { username: 'agentleader', password: 'agent456', level: 'AGENT', link: 'https://onpay.my/agent-order' },
	  { username: 'customer1', password: 'cust123', level: 'CUSTOMER', link: 'https://onpay.my/customer-order' },
	  { username: 'customer2', password: 'cust456', level: 'CUSTOMER', link: 'https://onpay.my/customer-order' }
	  // Tambah user baru ikut format atas
	];
	
	const form = document.getElementById('loginForm');
	const errorMsg = document.getElementById('errorMsg');
	
	form.addEventListener('submit', function(e) {
	  e.preventDefault();
	  const inputUser = document.getElementById('username').value.trim();
	  const inputPass = document.getElementById('password').value.trim();
	
	  // Cari user yang matching
	  const validUser = users.find(user =&gt; user.username === inputUser &amp;&amp; user.password === inputPass);
	
	  if (validUser) {
	    alert(`Login berjaya sebagai ${validUser.level}!`);
	    window.location.href = validUser.link;
	  } else {
	    errorMsg.textContent = 'Username / Password Invalid!';
	  }
	});