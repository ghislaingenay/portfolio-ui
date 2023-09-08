type AnimationPlaceHolderProps = {
  children: React.ReactNode;
};

export const AnimationPlaceHolder = ({
  children,
}: AnimationPlaceHolderProps) => {
  return <main className="container">{children}</main>;
};
