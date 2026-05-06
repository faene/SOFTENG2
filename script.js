document.getElementById('signup-btn').addEventListener('click', function() {
    // 1. Capture the data from your UI capsules
    const fullName = document.getElementById('reg-fullname').value;
    const username = document.getElementById('reg-username').value;
    const rawPassword = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;

    // 2. Validation (The "Guardrail")
    if (!fullName || !username || !rawPassword || role === "Role") {
        alert("Wait! Please fill out all fields and select a role.");
        return;
    }

    // 3. The Security Part (SHA-256 Encryption)
    // This turns "password123" into "ef92b778ba22fb72..."
    const encryptedPassword = sha256(rawPassword);

    // 4. Success Feedback
    console.log("--- New Account Data ---");
    console.log("Name:", fullName);
    console.log("User:", username);
    console.log("Role:", role);
    console.log("Encrypted Pass:", encryptedPassword);

    alert("Account created successfully for " + fullName + "!");
    
    // Logic for the Designer: Clear the fields after success
    document.getElementById('reg-fullname').value = "";
    document.getElementById('reg-username').value = "";
    document.getElementById('reg-password').value = "";
    document.getElementById('reg-role').selectedIndex = 0;
});