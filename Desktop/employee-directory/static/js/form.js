document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const errorDiv = document.getElementById("formError");

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const department = form.department.value.trim();
  const role = form.role.value.trim();

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!firstName || !lastName || !email || !department || !role) {
    errorDiv.textContent = "All fields are required.";
    return;
  }

  if (!emailPattern.test(email)) {
    errorDiv.textContent = "Please enter a valid email address.";
    return;
  }

  errorDiv.textContent = "";

  const newEmployee = { firstName, lastName, email, department, role };

  // Load existing
  let existing = JSON.parse(localStorage.getItem("employees") || "[]");

  // If editing, replace existing by email
  const editData = JSON.parse(localStorage.getItem("editEmployee") || "null");
  if (editData) {
    existing = existing.filter(emp => emp.email.toLowerCase() !== editData.email.toLowerCase());
  }

  // Add new/edited employee
  existing.push(newEmployee);
  localStorage.setItem("employees", JSON.stringify(existing));

  // Clear edit state
  localStorage.removeItem("editEmployee");

  alert("Employee saved successfully!");
  window.location.href = "dashboard.html";
});
