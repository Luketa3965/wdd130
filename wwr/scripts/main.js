// Atualiza automaticamente o ano dos direitos autorais.
const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
