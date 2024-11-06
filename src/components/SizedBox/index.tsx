type Prosp = {
  width?: number | string;
  height?: number | string;
};

export default function SizedBox({ width, height }: Prosp) {
  return <div style={{ width, height }} />;
}
