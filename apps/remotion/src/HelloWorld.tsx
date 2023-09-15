import { SequentialSeries } from "@zeevo/remotion";

const sequences = [
  {
    durationInFrames: 60,
    render: <p style={{ fontSize: "20rem" }}>1</p>,
  },
  {
    durationInFrames: 60,
    render: <p style={{ fontSize: "20rem" }}>2</p>,
  },
  {
    durationInFrames: 60,
    render: <p style={{ fontSize: "20rem" }}>3</p>,
  },
  {
    durationInFrames: 60,
    render: <p style={{ fontSize: "20rem" }}>4</p>,
  },
];

export function HelloWorld() {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      }}
    >
      <SequentialSeries sequences={sequences} />
      <div />
    </div>
  );
}
