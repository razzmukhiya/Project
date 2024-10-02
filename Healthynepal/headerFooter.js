function loadHeaderFooter() {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');
  
    fetch('header.html')
      .then(response => response.text())
      .then(html => headerContainer.innerHTML = html);
  
    fetch('footer.html')
      .then(response => response.text())
      .then(html => footerContainer.innerHTML = html);
  }
  
  document.addEventListener('DOMContentLoaded', loadHeaderFooter);