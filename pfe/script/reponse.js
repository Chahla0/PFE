 // Toggle Sidebar
 function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('main');
    sidebar.classList.toggle('active');
    container.classList.toggle('active');
  }
  
  // Filter Consultations
  function filterConsultations(status) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const cards = document.querySelectorAll('.consultation-card');
    cards.forEach(card => {
      if (status === 'all') {
        card.style.display = 'block';
      } else {
        if (card.getAttribute('data-status') === status) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }
  
  // Reply Modal Functions
  function openReplyModal() {
    const modal = document.getElementById('replyModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function closeReplyModal() {
    const modal = document.getElementById('replyModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  function submitReply() {
    alert('تم إرسال الرد بنجاح');
    closeReplyModal();
    // Here you would typically send the reply to the server
  }
  
  // Consultation Details Modal
  function openConsultationModal() {
    const modal = document.getElementById('consultationModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function closeConsultationModal() {
    const modal = document.getElementById('consultationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Close modals when clicking outside
  window.onclick = function(event) {
    const replyModal = document.getElementById('replyModal');
    if (event.target == replyModal) {
      closeReplyModal();
    }
    
    const consultationModal = document.getElementById('consultationModal');
    if (event.target == consultationModal) {
      closeConsultationModal();
    }
  }
