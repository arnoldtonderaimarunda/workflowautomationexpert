document.addEventListener('DOMContentLoaded', () => {
  const toggleButton1 = document.getElementById('toggleButton1');
  const toggleButton2 = document.getElementById('toggleButton2');
  const toggleButton3 = document.getElementById('toggleButton3');  

  const diagramContainer1 = document.getElementById('diagramContainer1');
  const diagramContainer2 = document.getElementById('diagramContainer2');
  const diagramContainer3 = document.getElementById('diagramContainer3');  

  toggleButton1.addEventListener('click', () => {
    // Toggle the display state of the diagram container
    if (diagramContainer1.style.display === "none" || diagramContainer1.style.display === "") {
      diagramContainer1.style.display = "block";
      toggleButton1.textContent = "- Close sketch";
    } else {
      diagramContainer1.style.display = "none";
      toggleButton1.textContent = "+ View sketch";
    }
  });
    toggleButton2.addEventListener('click', () => {
    // Toggle the display state of the diagram container
    if (diagramContainer2.style.display === "none" || diagramContainer2.style.display === "") {
      diagramContainer2.style.display = "block";
      toggleButton2.textContent = "- Close sketch";
    } else {
      diagramContainer2.style.display = "none";
      toggleButton2.textContent = "+ View sketch";
    }
  });
      toggleButton3.addEventListener('click', () => {
    // Toggle the display state of the diagram container
    if (diagramContainer3.style.display === "none" || diagramContainer3.style.display === "") {
      diagramContainer3.style.display = "block";
      toggleButton3.textContent = "- Close sketch";
    } else {
      diagramContainer3.style.display = "none";
      toggleButton3.textContent = "+ View sketch";
    }
  });
});
