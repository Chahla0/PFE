// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('main');
    sidebar.classList.toggle('active');
    container.classList.toggle('active');
  }
  
  // Tab Filtering
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      // Here you would filter sessions based on the selected tab
    });
  });
  
  // Session Actions
  function startSession() {
    alert('جاري بدء الجلسة...');
    // Redirect to session interface
  }
  
  // Feedback Modal Functions
  function openFeedbackModal() {
    // Set patient info in modal (in real app, you would get this from the clicked session)
    document.getElementById('feedbackModal').style.display = 'flex';
  }
  
  function closeFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'none';
  }
  
  function sendFeedback() {
    const feedback = document.getElementById('feedbackMessage').value;
    const nextSession = document.getElementById('nextSession').value;
    
    if (!feedback) {
      alert('الرجاء كتابة التقييم قبل الإرسال');
      return;
    }
    
    // Here you would send the feedback to the server
    alert(`تم إرسال التقييم بنجاح!\nالجلسة القادمة مقترحة: ${nextSession || 'لم تحدد'}`);
    closeFeedbackModal();
  }
  
  // Cancel Modal Functions
  function openCancelModal() {
    document.getElementById('cancelModal').style.display = 'flex';
  }
  
  function closeCancelModal() {
    document.getElementById('cancelModal').style.display = 'none';
  }
  
  function confirmCancel() {
    alert('تم إلغاء الجلسة بنجاح');
    closeCancelModal();
    // Here you would send cancellation to the server
  }
  
  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('feedbackModal')) {
      closeFeedbackModal();
    }
    if (event.target === document.getElementById('cancelModal')) {
      closeCancelModal();
    }
  });