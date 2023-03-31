function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const branch = document.getElementById("branch").value;
    document.getElementById("dis").style.display = "block";
    document.getElementById("dis-name").textContent = name;
    document.getElementById("dis-email").textContent = email;
    document.getElementById("dis-pwd").textContent = password;
    document.getElementById("dis-branch").textContent =branch;
    
}