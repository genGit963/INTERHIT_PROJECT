type ShadowEffectType = {
  X_off: number;
  Y_off: number;
  Radius: number;
  Color: string;
  Opacity: number;
  Elevation: number;
};

export default function supplyShadowEffect({
  X_off,
  Y_off,
  Radius,
  Color,
  Opacity,
  Elevation,
}: ShadowEffectType) {
  return {
    shadowColor: Color,
    shadowOffset: {
      width: X_off,
      height: Y_off,
    },
    shadowOpacity: Opacity,
    shadowRadius: Radius,
    elevation: Elevation,
  };
}
