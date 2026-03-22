document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (!username || !password) {
        alert('请输入账号和密码！');
        return;
    }
  
    alert('登录成功！欢迎回来，' + username);
    

});