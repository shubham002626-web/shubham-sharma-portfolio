import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/sound';

export const AudioToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [enabled, setEnabled] = useState(sound.isEnabled());

  useEffect(() => {
    setEnabled(sound.isEnabled());
  }, []);

  const handleToggle = () => {
    const next = sound.toggle();
    setEnabled(next);
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      title={enabled ? 'Mute Interface Soundscapes' : 'Enable Interface Soundscapes'}
      aria-label={enabled ? 'Mute Interface Sounds' : 'Enable Interface Sounds'}
      className={`liquid-glass-btn relative inline-flex items-center justify-center p-2 rounded-full cursor-pointer select-none ${className}`}
    >
      {enabled ? (
        <Volume2 className="w-3.5 h-3.5 text-[#e51d24] group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-neutral-700 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
};
