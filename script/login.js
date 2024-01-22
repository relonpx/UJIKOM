const user = {
  username: '1',
  password: '1'
}

const login = () => {
  const nameInput = document.getElementById('username')
  const passInput = document.getElementById('password')

  if(nameInput.value == '' || passInput.value == ''){
    alert('Username atau password harus diisi')
  } else if(nameInput.value != user.username || passInput.value != user.password){
    alert('Username atau password salah')
  } else {
    window.location.href = 'menu.html'
  }
}