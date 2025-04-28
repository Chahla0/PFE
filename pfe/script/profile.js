// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    
    sidebar.classList.toggle('active');
    main.classList.toggle('sidebar-active');
  }
  
  // Profile Form Toggle
  function enableEditing() {
    document.getElementById('profileHeader').style.display = 'none';
    document.getElementById('profileForm').style.display = 'block';
  }
  
  function cancelEditing() {
    document.getElementById('profileHeader').style.display = 'flex';
    document.getElementById('profileForm').style.display = 'none';
  }
  
  // Image Upload Preview
  document.getElementById('profileImageUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        document.getElementById('profileImagePreview').src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  function removeProfileImage() {
    document.getElementById('profileImagePreview').src = 'specialist.jpg';
    document.getElementById('profileImageUpload').value = '';
  }
  
  // Modal Functions
  let currentModalType = '';
  
  function openAddModal(type) {
    currentModalType = type;
    const modal = document.getElementById('addModal');
    const title = document.getElementById('modalTitle');
    
    if (type === 'qualification') {
      title.innerHTML = '<i class="fas fa-plus"></i> إضافة مؤهل';
    } else {
      title.innerHTML = '<i class="fas fa-plus"></i> إضافة شهادة';
    }
    
    modal.style.display = 'flex';
    document.getElementById('itemTitle').value = '';
    document.getElementById('itemDescription').value = '';
    document.getElementById('itemYear').value = new Date().getFullYear();
  }
  
  function closeModal() {
    document.getElementById('addModal').style.display = 'none';
  }
  
  // Form Submission
  document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('itemTitle').value;
    const description = document.getElementById('itemDescription').value;
    const year = document.getElementById('itemYear').value;
    
    const listId = currentModalType === 'qualification' ? 'qualificationsList' : 'certificationsList';
    const list = document.getElementById(listId);
    
    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <span>${title}${description ? ' - ' + description : ''} ${year ? year : ''}</span>
      <div class="info-item-actions">
        <button onclick="editQualification(this)"><i class="fas fa-edit"></i></button>
        <button onclick="removeQualification(this)"><i class="fas fa-trash"></i></button>
      </div>
    `;
    
    list.appendChild(newItem);
    closeModal();
  });
  
  // Edit/Remove Functions (placeholder implementations)
  function editQualification(button) {
    const itemText = button.closest('li').querySelector('span').textContent;
    alert('تعديل المؤهل: ' + itemText);
  }
  
  function removeQualification(button) {
    if (confirm('هل أنت متأكد من حذف هذا المؤهل؟')) {
      button.closest('li').remove();
    }
  }
  
  function editCertification(button) {
    const itemText = button.closest('li').querySelector('span').textContent;
    alert('تعديل الشهادة: ' + itemText);
  }
  
  function removeCertification(button) {
    if (confirm('هل أنت متأكد من حذف هذه الشهادة؟')) {
      button.closest('li').remove();
    }
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('addModal');
    if (event.target === modal) {
      closeModal();
    }
  });