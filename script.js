// script.js

document.getElementById('apply-changes').addEventListener('click', function () {
  const textInput = document.getElementById('text-input').value;
  const fontSelection = document.getElementById('font-selection').value;
  const textColor = document.getElementById('text-color').value;
  const bgColor = document.getElementById('bg-color').value;
  const animationSelection = document.getElementById(
    'animation-selection'
  ).value;

  // Applying changes to the preview
  const previewText = document.getElementById('preview-text');
  previewText.textContent = textInput;
  previewText.style.fontFamily = fontSelection;
  previewText.style.color = textColor;
  document.querySelector('.preview').style.backgroundColor = bgColor;
  previewText.style.animationName = animationSelection;
  previewText.style.animationDuration = '1s';
});
