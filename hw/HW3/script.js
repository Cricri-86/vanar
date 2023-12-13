color = prompt('Enter color name or code')
size = +prompt('Enter size in pixels')
borderWidth = +prompt('Enter border width in pixels')
borderColor = prompt('Enter border color')

document.write(
    `<div style="
    background: ${color};
    width: ${size}px;
    height: ${size}px;
    border: ${borderWidth}px solid ${borderColor};
    
    ">
    </div>`
)
