import { Series } from "remotion";

export interface SeriesSequence {
  durationInFrames: number;
  render: React.ReactNode;
}

export function SequentialSeries({
  sequences,
}: {
  sequences: SeriesSequence[];
}) {
  return (
    <Series>
      {sequences.map((sequence, i) => (
        <Series.Sequence key={i} durationInFrames={sequence.durationInFrames}>
          {sequence.render}
        </Series.Sequence>
      ))}
    </Series>
  );
}
