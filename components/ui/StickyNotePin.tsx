export default function StickyNotePin() {
  return (
    <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2">
      {/* Shadow */}

      <div className="absolute left-1/2 top-1 h-5 w-5 -translate-x-1/2 rounded-full bg-black/15 blur-sm" />

      {/* Pin */}

      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700 shadow-lg">

        {/* Highlight */}

        <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/80" />

        {/* Needle */}

        <div className="absolute top-5 h-5 w-[2px] rounded-full bg-gray-500" />

      </div>
    </div>
  );
}