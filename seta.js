function toggleSection(id, header) {
  const section = document.getElementById(id);
  const arrow = header.querySelector('.arrow');

  // Abilitar a visibilidade das abas
  section.style.display = section.style.display === 'none' ? 'block' : 'none';

  // Para rotacionar a seta
  arrow.classList.toggle('rotated');
}

// Inicializa a visibilidade das abas
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.plans').forEach(section => {
    section.style.display = 'none';
  });
  // Definir o estado da seta como fechado
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.classList.add('rotated');
  });
});
