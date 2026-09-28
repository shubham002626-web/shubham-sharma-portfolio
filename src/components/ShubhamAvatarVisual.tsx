import React from 'react';

interface ShubhamAvatarVisualProps {
  className?: string;
  alt?: string;
}

/**
 * High-fidelity vector recreation of Shubham's exact 3D avatar:
 * - Stylish layered dark styled hair
 * - Transparent clear acetate square glasses
 * - Gentle welcoming expression & warm brown eyes
 * - Realistic soft mustache and chin beard
 * - Clean black crewneck t-shirt
 * - Soft minimal studio gradient background
 */
export const ShubhamAvatarVisual: React.FC<ShubhamAvatarVisualProps> = ({
  className = '',
  alt = 'Shubham Kumar Sharma - 3D Avatar',
}) => {
  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#e8e9ed] ${className}`} role="img" aria-label={alt}>
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Studio Backdrop Gradient */}
          <radialGradient id="studioBg" cx="45%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="50%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#d1d5db" />
          </radialGradient>

          {/* Skin Tones & Lighting */}
          <radialGradient id="skinBase" cx="48%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#f7c5a8" />
            <stop offset="65%" stopColor="#eeb392" />
            <stop offset="90%" stopColor="#e29e7b" />
            <stop offset="100%" stopColor="#ca8563" />
          </radialGradient>

          <radialGradient id="earGradient" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f5baa0" />
            <stop offset="80%" stopColor="#e09477" />
            <stop offset="100%" stopColor="#c57457" />
          </radialGradient>

          <linearGradient id="neckShadow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#96563e" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#b66b4d" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#caa89a" stopOpacity="0" />
          </linearGradient>

          {/* Hair Gradients */}
          <linearGradient id="hairDark" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#3d332d" />
            <stop offset="35%" stopColor="#29221e" />
            <stop offset="75%" stopColor="#1a1512" />
            <stop offset="100%" stopColor="#100d0b" />
          </linearGradient>

          <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5a4d44" />
            <stop offset="50%" stopColor="#3a312a" />
            <stop offset="100%" stopColor="#221c17" />
          </linearGradient>

          {/* Glass Acetate Frame Material */}
          <linearGradient id="acetateFrame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#e0e3e8" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#bec5cf" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#9ba4b2" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="lensReflect" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#8090a8" stopOpacity="0.15" />
          </linearGradient>

          {/* T-Shirt Charcoal Black */}
          <linearGradient id="shirtGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2d" />
            <stop offset="30%" stopColor="#1e1e21" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>

          {/* Soft Shadow Filter */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Studio Background */}
        <rect width="800" height="800" fill="url(#studioBg)" />

        {/* Ambient Warm Shoulder Glow */}
        <ellipse cx="400" cy="740" rx="360" ry="180" fill="#1b1c20" opacity="0.3" filter="url(#softShadow)" />

        {/* Shoulders & Charcoal Black Crewneck T-Shirt */}
        <g id="body">
          {/* T-shirt Silhouette */}
          <path
            d="M140 800 C 150 710, 240 640, 310 625 L 490 625 C 560 640, 650 710, 660 800 Z"
            fill="url(#shirtGrad)"
          />

          {/* Shoulders Outer Flare */}
          <path
            d="M80 800 C 95 720, 180 650, 300 620 L 500 620 C 620 650, 705 720, 720 800 Z"
            fill="url(#shirtGrad)"
          />

          {/* Crewneck Collar Band */}
          <path
            d="M310 620 C 330 655, 370 670, 400 670 C 430 670, 470 655, 490 620 C 465 645, 430 656, 400 656 C 370 656, 335 645, 310 620 Z"
            fill="#333338"
          />
          <path
            d="M320 622 C 345 648, 375 656, 400 656 C 425 656, 455 648, 480 622 C 455 642, 428 650, 400 650 C 372 650, 345 642, 320 622 Z"
            fill="#18181b"
          />
        </g>

        {/* Neck */}
        <g id="neck">
          <path
            d="M340 520 C 335 590, 345 630, 400 635 C 455 630, 465 590, 460 520 Z"
            fill="url(#skinBase)"
          />
          {/* Cast Shadow under Chin */}
          <ellipse cx="400" cy="540" rx="60" ry="25" fill="url(#neckShadow)" />
        </g>

        {/* Ears */}
        <g id="ears">
          {/* Left Ear */}
          <path
            d="M285 365 C 260 365, 250 405, 260 440 C 270 470, 290 480, 300 460 Z"
            fill="url(#earGradient)"
          />
          <path
            d="M280 385 C 270 395, 268 420, 275 435 C 280 445, 288 440, 288 430 C 288 415, 285 400, 280 385 Z"
            fill="#d27e60"
            opacity="0.7"
          />

          {/* Right Ear */}
          <path
            d="M515 365 C 540 365, 550 405, 540 440 C 530 470, 510 480, 500 460 Z"
            fill="url(#earGradient)"
          />
          <path
            d="M520 385 C 530 395, 532 420, 525 435 C 520 445, 512 440, 512 430 C 512 415, 515 400, 520 385 Z"
            fill="#d27e60"
            opacity="0.7"
          />
        </g>

        {/* Head / Face Silhouette */}
        <g id="face">
          {/* Main Face Contour (Rounded 3D Pixar Jawline) */}
          <path
            d="M295 340 C 290 270, 310 220, 400 215 C 490 220, 510 270, 505 340 C 500 420, 490 510, 400 525 C 310 510, 300 420, 295 340 Z"
            fill="url(#skinBase)"
          />

          {/* Subtle Cheek Rosiness */}
          <ellipse cx="335" cy="425" rx="35" ry="20" fill="#f87171" opacity="0.12" filter="url(#softShadow)" />
          <ellipse cx="465" cy="425" rx="35" ry="20" fill="#f87171" opacity="0.12" filter="url(#softShadow)" />

          {/* Chin Definition */}
          <ellipse cx="400" cy="505" rx="28" ry="12" fill="#d98967" opacity="0.3" />
        </g>

        {/* Eyes & Eyebrows */}
        <g id="eyes">
          {/* Eyebrows (Bold, Groomed Dark Brown) */}
          <path
            d="M320 345 C 335 330, 370 330, 385 342 C 375 336, 345 336, 320 345 Z"
            fill="#231b17"
          />
          <path
            d="M480 345 C 465 330, 430 330, 415 342 C 425 336, 455 336, 480 345 Z"
            fill="#231b17"
          />

          {/* Left Eye Whites */}
          <ellipse cx="355" cy="378" rx="24" ry="17" fill="#ffffff" />
          {/* Left Eye Iris (Dark Warm Brown) */}
          <ellipse cx="357" cy="378" rx="14" ry="15" fill="#38251a" />
          {/* Left Pupil */}
          <ellipse cx="357" cy="378" rx="9" ry="10" fill="#140d0a" />
          {/* Left Specular Catchlights */}
          <circle cx="353" cy="374" r="4.5" fill="#ffffff" />
          <circle cx="362" cy="382" r="2" fill="#ffffff" opacity="0.8" />

          {/* Right Eye Whites */}
          <ellipse cx="445" cy="378" rx="24" ry="17" fill="#ffffff" />
          {/* Right Eye Iris */}
          <ellipse cx="443" cy="378" rx="14" ry="15" fill="#38251a" />
          {/* Right Pupil */}
          <ellipse cx="443" cy="378" rx="9" ry="10" fill="#140d0a" />
          {/* Right Specular Catchlights */}
          <circle cx="439" cy="374" r="4.5" fill="#ffffff" />
          <circle cx="448" cy="382" r="2" fill="#ffffff" opacity="0.8" />

          {/* Upper Eyelashes / Lid Shadow */}
          <path d="M331 370 Q 355 358 379 370" stroke="#3d2c23" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M421 370 Q 445 358 469 370" stroke="#3d2c23" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Nose */}
        <g id="nose">
          {/* Nose Bridge Highlight */}
          <path
            d="M396 350 L 396 420 Q 394 435 385 435 Q 400 442 415 435 Q 406 435 404 420 L 404 350 Z"
            fill="#caa89a"
            opacity="0.3"
          />
          {/* Nose Tip & Nostrils */}
          <path
            d="M380 435 C 385 448, 415 448, 420 435 C 428 438, 432 445, 425 450 C 415 456, 385 456, 375 450 C 368 445, 372 438, 380 435 Z"
            fill="#d98967"
          />
          {/* Soft Nostril Shadows */}
          <ellipse cx="386" cy="445" rx="5" ry="3" fill="#874730" opacity="0.5" />
          <ellipse cx="414" cy="445" rx="5" ry="3" fill="#874730" opacity="0.5" />
          {/* Subtle Tip Highlight */}
          <circle cx="400" cy="436" r="4" fill="#ffffff" opacity="0.4" />
        </g>

        {/* Mustache & Mouth */}
        <g id="mouth">
          {/* Subtle Clean Mustache Stubble / Shadow */}
          <path
            d="M365 470 C 380 460, 395 464, 400 466 C 405 464, 420 460, 435 470 C 425 476, 408 472, 400 474 C 392 472, 375 476, 365 470 Z"
            fill="#3a2e28"
            opacity="0.65"
          />

          {/* Gentle Welcoming Lips */}
          {/* Upper Lip */}
          <path
            d="M372 485 C 385 478, 395 480, 400 482 C 405 480, 415 478, 428 485 C 418 488, 408 487, 400 488 C 392 487, 382 488, 372 485 Z"
            fill="#cb7363"
          />
          {/* Mouth Crease Smile */}
          <path
            d="M366 484 Q 400 496 434 484"
            stroke="#83382c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Lower Lip with Soft Highlight */}
          <path
            d="M374 488 C 385 506, 415 506, 426 488 C 415 498, 385 498, 374 488 Z"
            fill="#dd8575"
          />
          <ellipse cx="400" cy="495" rx="14" ry="4" fill="#f8b4a8" opacity="0.5" />

          {/* Small Chin Tuft / Beard Accent */}
          <ellipse cx="400" cy="515" rx="10" ry="5" fill="#3a2e28" opacity="0.4" />
        </g>

        {/* Transparent Clear Acetate Square Glasses */}
        <g id="glasses">
          {/* Left Lens Glass Surface with Refraction Sheen */}
          <rect
            x="320"
            y="350"
            width="72"
            height="58"
            rx="16"
            fill="url(#lensReflect)"
          />
          {/* Left Frame Border */}
          <rect
            x="320"
            y="350"
            width="72"
            height="58"
            rx="16"
            stroke="url(#acetateFrame)"
            strokeWidth="7"
            fill="none"
          />
          {/* Left Frame Inset Specular Highlight */}
          <rect
            x="323"
            y="353"
            width="66"
            height="52"
            rx="13"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            fill="none"
          />

          {/* Right Lens Glass Surface */}
          <rect
            x="408"
            y="350"
            width="72"
            height="58"
            rx="16"
            fill="url(#lensReflect)"
          />
          {/* Right Frame Border */}
          <rect
            x="408"
            y="350"
            width="72"
            height="58"
            rx="16"
            stroke="url(#acetateFrame)"
            strokeWidth="7"
            fill="none"
          />
          {/* Right Frame Inset Specular Highlight */}
          <rect
            x="411"
            y="353"
            width="66"
            height="52"
            rx="13"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            fill="none"
          />

          {/* Center Acetate Bridge */}
          <path
            d="M392 364 C 396 360, 404 360, 408 364 L 408 372 C 404 368, 396 368, 392 372 Z"
            fill="url(#acetateFrame)"
          />
          <path
            d="M393 365 Q 400 362 407 365"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Left Temple Arm (extending to ear) */}
          <path
            d="M320 366 L 278 376 L 276 384 L 320 374 Z"
            fill="url(#acetateFrame)"
          />
          {/* Right Temple Arm */}
          <path
            d="M480 366 L 522 376 L 524 384 L 480 374 Z"
            fill="url(#acetateFrame)"
          />

          {/* Diagonal Glass Lens Specular Streaks */}
          <path
            d="M330 398 L 360 360"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M418 398 L 448 360"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
        </g>

        {/* Layered Styled Dark Hair */}
        <g id="hair">
          {/* Back Volume Base */}
          <path
            d="M275 320 C 265 240, 300 140, 400 135 C 500 140, 535 240, 525 320 C 510 240, 480 180, 400 175 C 320 180, 290 240, 275 320 Z"
            fill="url(#hairDark)"
          />

          {/* Left Hair Bangs / Strands (Layered swept style) */}
          <path
            d="M280 290 C 290 210, 340 180, 410 185 C 380 200, 340 230, 330 295 C 315 275, 295 285, 280 290 Z"
            fill="url(#hairHighlight)"
          />

          <path
            d="M305 245 C 325 185, 390 170, 435 195 C 390 210, 360 250, 350 315 C 335 280, 315 270, 305 245 Z"
            fill="url(#hairDark)"
          />

          {/* Prominent Swept Fringe (Center & Right) */}
          <path
            d="M340 210 C 370 160, 440 160, 480 215 C 440 210, 400 240, 385 305 C 370 260, 350 240, 340 210 Z"
            fill="url(#hairHighlight)"
          />

          <path
            d="M380 190 C 420 150, 490 165, 515 235 C 475 220, 435 250, 420 315 C 410 260, 395 230, 380 190 Z"
            fill="url(#hairDark)"
          />

          {/* Right Temple Waves */}
          <path
            d="M455 195 C 490 185, 520 220, 525 290 C 510 270, 495 280, 470 285 C 475 245, 465 220, 455 195 Z"
            fill="url(#hairHighlight)"
          />

          {/* Top Hair Strands Definition & Volume */}
          <path
            d="M360 145 C 390 135, 420 135, 450 148 C 430 142, 380 142, 360 145 Z"
            fill="#5a4d44"
          />
          <path
            d="M325 175 C 345 155, 380 150, 410 158 C 380 155, 345 162, 325 175 Z"
            fill="#5a4d44"
          />

          {/* Fine Waved Strands over Forehead */}
          <path
            d="M335 260 C 350 290, 370 310, 395 320 C 375 305, 360 285, 350 265 Z"
            fill="#1c1613"
          />
          <path
            d="M410 255 C 430 280, 450 300, 475 310 C 455 295, 440 280, 425 260 Z"
            fill="#1c1613"
          />
        </g>

        {/* Ambient Subtle Studio Star/Glitter (Bottom Right) */}
        <g opacity="0.4">
          <path
            d="M720 700 L 725 715 L 740 720 L 725 725 L 720 740 L 715 725 L 700 720 L 715 715 Z"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
};
