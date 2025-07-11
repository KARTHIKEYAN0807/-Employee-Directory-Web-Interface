document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const sortBy = document.getElementById("sortBy");
  const filterDept = document.getElementById("filterDepartment");
  const filterRole = document.getElementById("filterRole");
  const employeeList = document.getElementById("employeeList");
  const itemsPerPageDropdown = document.getElementById("itemsPerPage");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");

  let allEmployees = Array.from(employeeList.children);
  const savedEmployees = JSON.parse(localStorage.getItem("employees") || "[]");

  // If there are saved employees in localStorage, render them
  if (savedEmployees.length > 0) {
    employeeList.innerHTML = "";
    savedEmployees.forEach(emp => {
      const div = document.createElement("div");
      div.className = "employee-card";
      div.dataset.name = `${emp.firstName.toLowerCase()} ${emp.lastName.toLowerCase()}`;
      div.dataset.email = emp.email.toLowerCase();
      div.dataset.department = emp.department;
      div.dataset.role = emp.role;
      div.dataset.firstname = emp.firstName;
      div.innerHTML = `
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
        <div class="buttons">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
      employeeList.appendChild(div);
    });
    allEmployees = Array.from(employeeList.children);
  }

  let filtered = [...allEmployees];
  let currentPage = 1;
  let itemsPerPage = parseInt(itemsPerPageDropdown.value);

  function attachButtonHandlers() {
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {
      button.onclick = () => {
        const card = button.closest(".employee-card");
        const employeeData = {
          firstName: card.querySelector("h3").textContent.split(" ")[0],
          lastName: card.querySelector("h3").textContent.split(" ")[1],
          email: card.querySelector("p:nth-of-type(1)").textContent.replace("Email: ", ""),
          department: card.querySelector("p:nth-of-type(2)").textContent.replace("Department: ", ""),
          role: card.querySelector("p:nth-of-type(3)").textContent.replace("Role: ", "")
        };
        localStorage.setItem("editEmployee", JSON.stringify(employeeData));
        window.location.href = "form.html";
      };
    });

    deleteButtons.forEach(button => {
      button.onclick = () => {
        const card = button.closest(".employee-card");
        const name = card.querySelector("h3").textContent;
        if (confirm(`Are you sure you want to delete ${name}?`)) {
          const email = card.dataset.email;
          let stored = JSON.parse(localStorage.getItem("employees") || "[]");
          stored = stored.filter(emp => emp.email.toLowerCase() !== email);
          localStorage.setItem("employees", JSON.stringify(stored));
          card.remove();
          allEmployees = Array.from(employeeList.children);
          applyFilters();
        }
      };
    });
  }

  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const dept = filterDept.value;
    const role = filterRole.value;
    const sortField = sortBy.value;

    filtered = allEmployees.filter(emp => {
      const name = emp.dataset.name;
      const email = emp.dataset.email;
      const d = emp.dataset.department;
      const r = emp.dataset.role;
      return (
        (name.includes(query) || email.includes(query)) &&
        (dept === "" || d === dept) &&
        (role === "" || r === role)
      );
    });

    if (sortField) {
      filtered.sort((a, b) => {
        const valA = a.dataset[sortField].toLowerCase();
        const valB = b.dataset[sortField].toLowerCase();
        return valA.localeCompare(valB);
      });
    }

    currentPage = 1;
    renderPaginated();
  }

  function renderPaginated() {
    employeeList.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filtered.slice(start, end);

    pageItems.forEach(emp => employeeList.appendChild(emp));
    attachButtonHandlers();

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  [searchInput, sortBy, filterDept, filterRole].forEach(input =>
    input.addEventListener("input", applyFilters)
  );

  itemsPerPageDropdown.addEventListener("change", () => {
    itemsPerPage = parseInt(itemsPerPageDropdown.value);
    currentPage = 1;
    renderPaginated();
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPaginated();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderPaginated();
    }
  });

  // Init
  applyFilters();
});
