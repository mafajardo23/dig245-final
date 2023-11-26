document.addEventListener('DOMContentLoaded', function() {
    openPopup();
    });

    function openPopup() {
    document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
    document.getElementById('popup').style.display = 'none';
    }

        // const context = new (window.AudioContext || window.webkitAudioContext)();

        // const audioElement = new Audio('christmas.mp3');
        // audioElement.crossOrigin = "anonymous"; // Enable CORS for the audio file

        // const source = context.createMediaElementSource(audioElement);
        // source.connect(context.destination);

        // audioElement.play().catch(error => {
        //     console.error("Autoplay was prevented. Please allow autoplay in your browser settings.");
        //  });
/* javascript */
