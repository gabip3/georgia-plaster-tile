/**
 * Decorative pool-edge divider between sections:
 * stone coping lip -> glass-mosaic waterline tile -> water.
 * `flip` mirrors it vertically (water on top) for coming "up" out of the pool.
 * `toColor` fades the water into the next section's background.
 */
export default function PoolEdge({
  flip = false,
  toColor = 'abyss',
  className = '',
}: {
  flip?: boolean;
  toColor?: 'abyss' | 'deep' | 'marine';
  className?: string;
}) {
  const fade =
    toColor === 'deep' ? 'to-deep' : toColor === 'marine' ? 'to-marine' : 'to-abyss';

  return (
    <div
      aria-hidden
      className={`pool-edge ${flip ? '-scale-y-100' : ''} ${className}`}
    >
      <div className="pool-coping tex-travertine grain" />
      <div className="waterline" />
      <div className="pool-water tex-water">
        <div className="absolute inset-0 tex-caustics opacity-40" />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${fade}`} />
      </div>
    </div>
  );
}
