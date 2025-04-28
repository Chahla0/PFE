 // Toggle Sidebar
 function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('main');
    sidebar.classList.toggle('active');
    container.classList.toggle('active');
  }
  
  // Avatar Image Preview
  const avatarUpload = document.getElementById('avatarUpload');
  const avatarPreview = document.getElementById('avatarPreview');
  
  avatarUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        avatarPreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = e.target.result;
        avatarPreview.appendChild(img);
      }
      
      reader.readAsDataURL(file);
    }
  });
  
  // Form Submission
  document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you can add form validation and submission logic
    alert('تم إنشاء الملف بنجاح! سيتم مراجعته من قبل الإدارة');
    
    // Redirect to profile page after creation
    window.location.href = 'profile.html';
  });