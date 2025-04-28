// DOM Elements
const openModalBtn = document.getElementById('openModalBtn');
const exerciseModal = document.getElementById('exerciseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const exerciseForm = document.getElementById('exerciseForm');

const editExerciseModal = document.getElementById('editExerciseModal');
const closeEditModalBtn = document.getElementById('closeEditModalBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const editExerciseForm = document.getElementById('editExerciseForm');

const deleteConfirmationModal = document.getElementById('deleteConfirmationModal');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

const exerciseDetailsModal = document.getElementById('exerciseDetailsModal');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');

const mediaUploadArea = document.getElementById('mediaUploadArea');
const mediaInput = document.getElementById('mediaInput');
const mediaPreviewContainer = document.getElementById('mediaPreviewContainer');

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  
  sidebar.classList.toggle('active');
  main.classList.toggle('sidebar-active');
}
// Event Listeners
openModalBtn.addEventListener('click', () => {
  exerciseModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  exerciseModal.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
  exerciseModal.style.display = 'none';
});

closeEditModalBtn.addEventListener('click', () => {
  editExerciseModal.style.display = 'none';
});

cancelEditBtn.addEventListener('click', () => {
  editExerciseModal.style.display = 'none';
});

cancelDeleteBtn.addEventListener('click', () => {
  deleteConfirmationModal.style.display = 'none';
});

closeDetailsBtn.addEventListener('click', () => {
  exerciseDetailsModal.style.display = 'none';
});

mediaUploadArea.addEventListener('click', () => {
  mediaInput.click();
});

mediaInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      let mediaElement;
      if (file.type.startsWith('image/')) {
        mediaElement = document.createElement('img');
        mediaElement.src = event.target.result;
      } else if (file.type.startsWith('video/')) {
        mediaElement = document.createElement('video');
        mediaElement.src = event.target.result;
        mediaElement.controls = true;
      }
      
      mediaPreviewContainer.innerHTML = '';
      const previewWrapper = document.createElement('div');
      previewWrapper.className = 'media-preview';
      
      const removeBtn = document.createElement('span');
      removeBtn.className = 'remove-media';
      removeBtn.innerHTML = '&times;';
      removeBtn.addEventListener('click', () => {
        mediaPreviewContainer.innerHTML = '';
        mediaInput.value = '';
      });
      
      previewWrapper.appendChild(mediaElement);
      previewWrapper.appendChild(removeBtn);
      mediaPreviewContainer.appendChild(previewWrapper);
    };
    reader.readAsDataURL(file);
  }
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === exerciseModal) {
    exerciseModal.style.display = 'none';
  }
  if (e.target === editExerciseModal) {
    editExerciseModal.style.display = 'none';
  }
  if (e.target === deleteConfirmationModal) {
    deleteConfirmationModal.style.display = 'none';
  }
  if (e.target === exerciseDetailsModal) {
    exerciseDetailsModal.style.display = 'none';
  }
});

// Sample data and functions for demonstration
document.querySelectorAll('.action-btn.view').forEach(btn => {
  btn.addEventListener('click', () => {
    exerciseDetailsModal.style.display = 'flex';
  });
});

document.querySelectorAll('.action-btn.edit').forEach(btn => {
  btn.addEventListener('click', () => {
    editExerciseModal.style.display = 'flex';
  });
});

document.querySelectorAll('.action-btn.delete').forEach(btn => {
  btn.addEventListener('click', () => {
    deleteConfirmationModal.style.display = 'flex';
  });
});

confirmDeleteBtn.addEventListener('click', () => {
  deleteConfirmationModal.style.display = 'none';
  // In a real app, you would remove the exercise from the DOM and database here
  alert('تم حذف التمرين بنجاح');
});

exerciseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  exerciseModal.style.display = 'none';
  alert('تم إضافة التمرين بنجاح');
  // In a real app, you would add the exercise to the DOM and database here
});

editExerciseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  editExerciseModal.style.display = 'none';
  alert('تم تحديث التمرين بنجاح');
  // In a real app, you would update the exercise in the DOM and database here
});