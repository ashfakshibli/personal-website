// src/components/shared/ProfileImage.tsx
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
      <Image
        src="/api/placeholder/400/400"
        alt="Ashfak Md Shibli"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}