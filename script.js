function toggleLamp() {
    const lampImage = document.getElementById('lampImage');
    const statusText = document.getElementById('statusText');
    
    if (lampImage.src.includes('bulb-off.png')) {
        lampImage.src = 'bulb-on.png';
        statusText.textContent = 'Lampan är tänd';
    } else {
        lampImage.src = 'bulb-off.png';
        statusText.textContent = 'Lampan är släckt';
    }
}
