const modal = document.getElementById('multiStepModal') as HTMLElement | null;
const modalLayout = document.querySelector('.modal') as HTMLElement | null;
const steps = document.querySelectorAll('.step');
const findBtn = document.getElementById('find');
const nextBtns = document.querySelectorAll('.next');

let currentStep = 0;
if (findBtn && modal) {
  findBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    showStep(0);
  });
}

if (modalLayout && modal) {
  modalLayout.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target?.classList.contains('modal')) {
      currentStep = 0;
      modal.classList.add('hidden');
    }
  });
}

nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentStep++;
    if (currentStep < steps.length) {
      showStep(currentStep);
    }
  });
});

function showStep(index: number) {
  steps.forEach((step) => step.classList.remove('active'));
  steps[index].classList.add('active');
}

document.querySelectorAll('.job-header').forEach((header) => {
  header.addEventListener('click', () => {
    const jobItem = header.parentElement;
    if (!jobItem) return;
    jobItem.classList.toggle('open');
    header.classList.toggle('open');
  });
});
