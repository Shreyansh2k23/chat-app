import MagnetLines from "../animate/MagniteLine";
const AuthImagePattern = ({title, subtitle}) => {
  return (
    <div className="hidden lg:flex item-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-4 mt-8">
            {[...Array(9)].map((_, i) => (
              <MagnetLines
  rows={9}
  columns={9}
  containerSize="17vmin"
  lineColor="green"
  lineWidth="0.3vmin"
  lineHeight="1.3vmin"
  baseAngle={0}
  style={{ margin: "0.5rem auto" }}
/>
              //   <div
              //   key={i}
              //   className={`aspect-square rounded-2xl bg-primary/10 ${
              //     i % 2 === 0 ? "animate-pulse" : ""
              //   }`}
              // />
              
            ))}
        </div>
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
  );
}

export default AuthImagePattern;    