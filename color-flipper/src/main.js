import './style.css'

const COLOR_PALETTE = {
  '#dad7cd': 'Timberwolf',
  '#a3b18a': 'Sage',
  '#588157': 'Fern green',
  '#3a5a40': 'Hunter green',
  '#344e41': 'Brunswick green'
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

// Inicializa
addOptionsToColorPicker();
addEventListenerToColorPicker();
