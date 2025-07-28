const useAudioSequence = () => {
  const getAudioSequence = (name, number) => {
    const parts = [];

    parts.push('pasien');

    if (name.toLowerCase() === 'umum') {
      parts.push('umum');
    } else if (name.toLowerCase() === 'gigi') {
      parts.push('gigi');
    }

    parts.push('antrian');

    if (number >= 1 && number <= 11) {
      parts.push(number.toString());
    } else if (number >= 12 && number <= 19) {
      const lastDigit = number % 10;
      parts.push(lastDigit.toString(), 'belas');
    } else {
      const firstDigit = Number(number.toString()[0]);
      const lastDigit = number % 10;
      parts.push(firstDigit.toString(), 'puluh');
      if (lastDigit !== 0) {
        parts.push(lastDigit.toString());
      }
    }

    parts.push('masuk');

    return parts.map(word => `/audio/${word}.mp3`);
  };

  const playAudioSequence = async (srcList) => {
    for (const src of srcList) {
      await new Promise((resolve) => {
        const audio = new Audio(src);
        audio.onended = resolve;
        audio.onerror = resolve;
        audio.play();
      });
    }
  };

  return { getAudioSequence, playAudioSequence };
};

export default useAudioSequence;