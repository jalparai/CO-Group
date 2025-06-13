import './BackgroundGradientAnimation.css'

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgba(41, 127, 255, 0.5)",
    gradientBackgroundEnd = "rgba(191, 56, 255, 0.3)",
    size = "150%",
    blendingValue = "soft-light",
    className,
  }) => {
    return (
      <div className={className}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: size,
            height: size,
            background: `radial-gradient(circle at 50% 50%, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
            filter: "blur(100px)",
            opacity: "0.3",
            borderRadius: "50%",
            mixBlendMode: blendingValue,
          }}
        ></div>
        <div className="absolute left-16 top-20 overflow-visible opacity-30">
            <div className="circle-obj h-[900px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
        </div>
        <div className="absolute right-52 bottm-32 overflow-visible opacity-30">
            <div className="circle-obj2 h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
        </div>
        <div className="absolute left-20 -top-32 overflow-visible opacity-30">
            <div className="circle-obj4 h-[900px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
        </div>
        <div className="absolute -left-20 top-32 overflow-visible opacity-30">
            <div className="circle-obj3 h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
        </div>
        </div>
    );
  };
  
