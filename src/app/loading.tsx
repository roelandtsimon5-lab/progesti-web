/** Barre discrète — évite le flash « Chargement… » plein écran entre pages marketing. */
export default function Loading() {
  return (
    <div
      className="fixed inset-x-0 top-[4.25rem] z-[45] h-0.5 overflow-hidden bg-blue-mist/30 md:top-[4.5rem]"
      aria-hidden
    >
      <div className="h-full w-1/4 animate-pulse bg-blue-royal motion-reduce:animate-none" />
    </div>
  );
}
