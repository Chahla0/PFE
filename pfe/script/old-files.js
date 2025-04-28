
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('main');
    sidebar.classList.toggle('active');
    container.classList.toggle('active');
  }
  
  // Search functionality
  document.querySelector('.search-container button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    const childCards = document.querySelectorAll('.child-card');
    
    childCards.forEach(card => {
      const childName = card.querySelector('.child-name').textContent.toLowerCase();
      const fileNumber = card.querySelector('.child-details span:first-child').textContent.toLowerCase();
      
      if (childName.includes(searchTerm) || fileNumber.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  // Modal functionality
  const modal = document.getElementById('childModal');
  const closeModalBtn = document.getElementById('closeModal');
  const viewButtons = document.querySelectorAll('.view-btn');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      // In a real app, you would fetch the child details based on data-id
      modal.style.display = 'flex';
    });
  });
  
  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Delete functionality
  const confirmDialog = document.getElementById('confirmDialog');
  const cancelDeleteBtn = document.getElementById('cancelDelete');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const deleteButtons = document.querySelectorAll('.delete-btn');
  let currentCardToDelete = null;
  
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      currentCardToDelete = this.closest('.child-card');
      confirmDialog.style.display = 'flex';
    });
  });
  
  cancelDeleteBtn.addEventListener('click', function() {
    confirmDialog.style.display = 'none';
    currentCardToDelete = null;
  });
  
  confirmDeleteBtn.addEventListener('click', function() {
    if (currentCardToDelete) {
      currentCardToDelete.remove();
      confirmDialog.style.display = 'none';
      currentCardToDelete = null;
      
      // Show a success message (in a real app, you would handle server deletion first)
      alert('تم حذف ملف الطفل بنجاح');
    }
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === confirmDialog) {
      confirmDialog.style.display = 'none';
      currentCardToDelete = null;
    }
  });