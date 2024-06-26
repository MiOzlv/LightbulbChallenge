document.getElementById('bulb').addEventListener('click', toggleBulb);

function toggleBulb() {
    var bulb = document.getElementById('bulb');
    var body = document.body;
    if (bulb.src === 'https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500') {
        bulb.src = 'https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png';
        body.classList.remove('dark-mode');
    } else {
        bulb.src = 'https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500';
        body.classList.add('dark-mode');
    }
}

