document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const diagramContainer = document.getElementById('diagramContainer');

  toggleButton.addEventListener('click', () => {
    // Toggle the display state of the diagram container
    if (diagramContainer.style.display === "none" || diagramContainer.style.display === "") {
      diagramContainer.style.display = "block";
      toggleButton.textContent = "- Close Diagram";
    } else {
      diagramContainer.style.display = "none";
      toggleButton.textContent = "+ View Diagram";
    }
  });
});
