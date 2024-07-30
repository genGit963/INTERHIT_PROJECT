type ShadowEffectType = {
  X_off: number;
  Y_off: number;
  Radius: number;
  Color: string;
  Opacity: number;
};

export default function supplyIOSShadowEffect({
  X_off,
  Y_off,
  Radius,
  Color,
  Opacity,
}: ShadowEffectType) {
  return {
    shadowOffset: {
      height: Y_off,
      width: X_off,
    },
    shadowRadius: Radius,
    shadowColor: Color,
    shadowOpacity: Opacity,
  };
}
