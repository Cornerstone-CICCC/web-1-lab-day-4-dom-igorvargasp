 function addEmployeeToTable(firstname, lastname, email, hireDate, photoSrc) {
      const employeeList = document.getElementById('employeeList');
      const tr = document.createElement('tr');
      
      const tdPhoto = document.createElement('td');
      const img = document.createElement('img');
      img.src = photoSrc;
      img.alt = firstname + ' ' + lastname;
      img.className = 'employee-photo';
      tdPhoto.appendChild(img);
      
      const tdFirstName = document.createElement('td');
      tdFirstName.textContent = firstname;
      
      const tdLastName = document.createElement('td');
      tdLastName.textContent = lastname;
      
      const tdEmail = document.createElement('td');
      tdEmail.textContent = email;
      
      const tdHireDate = document.createElement('td');
      tdHireDate.textContent = hireDate;
      
      const tdActions = document.createElement('td');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this employee?')) {
          tr.remove();
        }
      });
      tdActions.appendChild(deleteBtn);
      
      tr.appendChild(tdPhoto);
      tr.appendChild(tdFirstName);
      tr.appendChild(tdLastName);
      tr.appendChild(tdEmail);
      tr.appendChild(tdHireDate);
      tr.appendChild(tdActions);
      
      employeeList.appendChild(tr);
    }

   window.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstname = document.getElementById('firstname').value;  
    const lastname = document.getElementById('lastname').value;    
    const email = document.getElementById('email').value;          
    const hireDate = document.getElementById('hire_date').value;   
    const photoInput = document.getElementById('photo');           
    
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        addEmployeeToTable(firstname, lastname, email, hireDate, event.target.result);
        form.reset();
      };
      reader.readAsDataURL(photoInput.files[0]);
    }
  });
});