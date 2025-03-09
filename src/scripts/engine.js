document.addEventListener('DOMContentLoaded', () => {
  const pianoKeys = document.querySelectorAll('.piano-keys .key');
  const volumeSlider = document.querySelector('.volume-slider input');
  const keysCheck = document.querySelector('.keys-check input');

  let mappedKeys = [];
  const audio = new Audio('src/tunes/a.wav');

  const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
      clickedKey.classList.add('active');
      setTimeout(() => {
        clickedKey.classList.remove('active');
      }, 150);
    }
  };

  const handleKeyPress = (event) => {
    if (mappedKeys.includes(event.key)) {
      playTune(event.key);
    }
  };

  const handleVolumeChange = (event) => {
    audio.volume = event.target.value;
  };

  const toggleKeysVisibility = () => {
    pianoKeys.forEach((key) => key.classList.toggle('hide'));
  };

  const initializePiano = () => {
    pianoKeys.forEach((key) => {
      key.addEventListener('click', () => playTune(key.dataset.key));
      mappedKeys.push(key.dataset.key);
    });

    document.addEventListener('keydown', handleKeyPress);
    volumeSlider.addEventListener('input', handleVolumeChange);
    keysCheck.addEventListener('click', toggleKeysVisibility);
  };

  initializePiano();
});
