// DOM Elements
const openModalBtn = document.getElementById('openModalBtn');
const courseModal = document.getElementById('courseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const courseForm = document.getElementById('courseForm');

const editCourseModal = document.getElementById('editCourseModal');
const closeEditModalBtn = document.getElementById('closeEditModalBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const editCourseForm = document.getElementById('editCourseForm');

const deleteConfirmationModal = document.getElementById('deleteConfirmationModal');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

const courseDetailsModal = document.getElementById('courseDetailsModal');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');

const videoUploadArea = document.getElementById('videoUploadArea');
const videoInput = document.getElementById('videoInput');
const videoPreviewContainer = document.getElementById('videoPreviewContainer');

const fileUploadArea = document.getElementById('fileUploadArea');
const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');

// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  
  sidebar.classList.toggle('active');
  main.classList.toggle('sidebar-active');
}





// Event Listeners
openModalBtn.addEventListener('click', () => {
  courseModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  courseModal.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
  courseModal.style.display = 'none';
});

closeEditModalBtn.addEventListener('click', () => {
  editCourseModal.style.display = 'none';
});

cancelEditBtn.addEventListener('click', () => {
  editCourseModal.style.display = 'none';
});

cancelDeleteBtn.addEventListener('click', () => {
  deleteConfirmationModal.style.display = 'none';
});

closeDetailsBtn.addEventListener('click', () => {
  courseDetailsModal.style.display = 'none';
});

videoUploadArea.addEventListener('click', () => {
  videoInput.click();
});

videoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const videoElement = document.createElement('video');
      videoElement.src = event.target.result;
      videoElement.controls = true;
      
      videoPreviewContainer.innerHTML = '';
      const previewWrapper = document.createElement('div');
      previewWrapper.className = 'video-preview';
      
      const removeBtn = document.createElement('span');
      removeBtn.className = 'remove-video';
      removeBtn.innerHTML = '&times;';
      removeBtn.addEventListener('click', () => {
        videoPreviewContainer.innerHTML = '';
        videoInput.value = '';
      });
      
      previewWrapper.appendChild(videoElement);
      previewWrapper.appendChild(removeBtn);
      videoPreviewContainer.appendChild(previewWrapper);
    };
    reader.readAsDataURL(file);
  }
});

fileUploadArea.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    filePreview.innerHTML = '';
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileItem = document.createElement('div');
      fileItem.className = 'attachment-item';
      
      const fileName = document.createElement('div');
      fileName.className = 'attachment-name';
      
      let iconClass = 'fas fa-file';
      if (file.type.startsWith('image/')) {
        iconClass = 'fas fa-image';
      } else if (file.type === 'application/pdf') {
        iconClass = 'fas fa-file-pdf';
      }
      
      fileName.innerHTML = `
        <i class="${iconClass}"></i>
        <span>${file.name}</span>
      `;
      
      const removeFile = document.createElement('span');
      removeFile.className = 'remove-attachment';
      removeFile.innerHTML = '&times;';
      removeFile.addEventListener('click', () => {
        fileItem.remove();
        // In a real app, you would need to update the file input
      });
      
      fileItem.appendChild(fileName);
      fileItem.appendChild(removeFile);
      filePreview.appendChild(fileItem);
    }
  }
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === courseModal) {
    courseModal.style.display = 'none';
  }
  if (e.target === editCourseModal) {
    editCourseModal.style.display = 'none';
  }
  if (e.target === deleteConfirmationModal) {
    deleteConfirmationModal.style.display = 'none';
  }
  if (e.target === courseDetailsModal) {
    courseDetailsModal.style.display = 'none';
  }
});

// Sample data and functions for demonstration
document.querySelectorAll('.action-btn.view').forEach(btn => {
  btn.addEventListener('click', () => {
    courseDetailsModal.style.display = 'flex';
  });
});

document.querySelectorAll('.action-btn.edit').forEach(btn => {
  btn.addEventListener('click', () => {
    editCourseModal.style.display = 'flex';
  });
});

document.querySelectorAll('.action-btn.delete').forEach(btn => {
  btn.addEventListener('click', () => {
    deleteConfirmationModal.style.display = 'flex';
  });
});

confirmDeleteBtn.addEventListener('click', () => {
  deleteConfirmationModal.style.display = 'none';
  // In a real app, you would remove the course from the DOM and database here
  alert('تم حذف الدورة بنجاح');
});

courseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  courseModal.style.display = 'none ';
        // In a real app, you would add the course to the DOM and database here
  alert('تم إضافة الدورة بنجاح');
});

editCourseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  editCourseModal.style.display = 'none';
  alert('تم تحديث الدورة بنجاح');
  // In a real app, you would update the course in the DOM and database here
});

// Drag and drop functionality for file upload
fileUploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileUploadArea.style.borderColor = 'var(--primary-color)';
  fileUploadArea.style.backgroundColor = 'rgba(133, 186, 226, 0.1)';
});

fileUploadArea.addEventListener('dragleave', () => {
  fileUploadArea.style.borderColor = 'var(--medium-gray)';
  fileUploadArea.style.backgroundColor = 'transparent';
});

fileUploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  fileUploadArea.style.borderColor = 'var(--medium-gray)';
  fileUploadArea.style.backgroundColor = 'transparent';
  
  if (e.dataTransfer.files.length) {
    fileInput.files = e.dataTransfer.files;
    const event = new Event('change');
    fileInput.dispatchEvent(event);
  }
});

// Course status indicators
document.querySelectorAll('.course-card').forEach(card => {
  const status = card.getAttribute('data-status');
  if (status === 'inactive') {
    const inactiveBadge = document.createElement('span');
    inactiveBadge.className = 'status-badge inactive';
    inactiveBadge.innerHTML = '<i class="fas fa-pause-circle"></i> غير نشط';
    card.querySelector('.course-card-body').prepend(inactiveBadge);
  }
});

// Filter functionality
const instructorFilter = document.getElementById('instructorFilter');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');
const searchInput = document.getElementById('searchInput');

function filterCourses() {
  const instructorValue = instructorFilter.value;
  const categoryValue = categoryFilter.value;
  const statusValue = statusFilter.value;
  const searchValue = searchInput.value.toLowerCase();

  document.querySelectorAll('.course-card').forEach(card => {
    const cardInstructor = card.getAttribute('data-instructor');
    const cardCategory = card.getAttribute('data-category');
    const cardStatus = card.getAttribute('data-status');
    const cardTitle = card.querySelector('.course-card-title').textContent.toLowerCase();
    const cardDesc = card.querySelector('.course-card-description').textContent.toLowerCase();

    const instructorMatch = instructorValue === 'all' || cardInstructor === instructorValue;
    const categoryMatch = categoryValue === 'all' || cardCategory === categoryValue;
    const statusMatch = statusValue === 'all' || cardStatus === statusValue;
    const searchMatch = searchValue === '' || 
      cardTitle.includes(searchValue) || 
      cardDesc.includes(searchValue);

    if (instructorMatch && categoryMatch && statusMatch && searchMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

instructorFilter.addEventListener('change', filterCourses);
categoryFilter.addEventListener('change', filterCourses);
statusFilter.addEventListener('change', filterCourses);
searchInput.addEventListener('input', filterCourses);

// Responsive adjustments
function handleResponsive() {
  const screenWidth = window.innerWidth;
  const filtersContainer = document.querySelector('.filters-container');
  
  if (screenWidth < 768) {
    filtersContainer.style.flexDirection = 'column';
    document.querySelectorAll('.filter-group').forEach(group => {
      group.style.minWidth = '100%';
    });
  } else {
    filtersContainer.style.flexDirection = 'row';
    document.querySelectorAll('.filter-group').forEach(group => {
      group.style.minWidth = '200px';
    });
  }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();

// Course progress indicators (for enrolled courses)
function addProgressIndicators() {
  const enrolledCourses = document.querySelectorAll('.course-card[data-enrolled="true"]');
  
  enrolledCourses.forEach(course => {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-container';
    
    const progressText = document.createElement('span');
    progressText.className = 'progress-text';
    progressText.textContent = '50% مكتمل';
    
    const progress = document.createElement('div');
    progress.className = 'progress-bar';
    
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.style.width = '50%';
    
    progress.appendChild(progressFill);
    progressBar.appendChild(progressText);
    progressBar.appendChild(progress);
    
    course.querySelector('.course-card-body').appendChild(progressBar);
  });
}

// Initialize progress indicators
addProgressIndicators();

// Course enrollment functionality
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('enroll-btn')) {
    const courseCard = e.target.closest('.course-card');
    courseCard.setAttribute('data-enrolled', 'true');
    e.target.textContent = 'مسجل';
    e.target.disabled = true;
    addProgressIndicators();
    alert('تم تسجيلك في الدورة بنجاح');
  }
});

// Course rating system
function initializeRatingSystem() {
  document.querySelectorAll('.rating-stars').forEach(starsContainer => {
    const stars = starsContainer.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
        // In a real app, you would save the rating
      });
    });
  });
}

// Initialize rating system
initializeRatingSystem();