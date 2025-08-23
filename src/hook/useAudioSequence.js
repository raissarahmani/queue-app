import { useRef } from "react";

const useAudioSequence = () => {
  const prevAudio = useRef(null)

  const getAudioSequence = (name, number) => {
    const parts = [];
    parts.push('bell')

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
    console.log("Sequence:", srcList);

    if (prevAudio.current) {
      prevAudio.current.pause();
      prevAudio.current.currentTime = 0;
    }

    for (let i = 0; i < srcList.length; i++) {
      await new Promise((resolve) => {
        const audio = new Audio(srcList[i]);
        prevAudio.current = audio;

        audio.onended = () => {
          if (i < srcList.length - 1 && srcList[i].includes('antrian')) {
            setTimeout(resolve, 200)
          } else {
            resolve();
          }
        };

        audio.onerror = resolve;
        audio.play();
      });
      console.log("Playing:", srcList[i]);
    }
    
    prevAudio.current = null;
  };

  return { getAudioSequence, playAudioSequence };
};

export default useAudioSequence;