import React from "react";
import { BoxProps, jsx, useThemeUI } from "theme-ui";
import { motion, MotionProps } from "framer-motion";
import { useRouter } from "next/router";
import { UIHeading, UIText, UIAspectRatio, MotionUICard, UICardContent, UIImage } from "../ui";
import { Product } from "../../data/products";

interface CardProps {
  item: Product;
  price: string;
  image: string;
}

const ProductCard = React.forwardRef(({ item }: CardProps, ref: React.MutableRefObject<HTMLInputElement>) => {
  const router = useRouter();
  return (
    <Card
      ref={ref}
      onClick={() => router.push("/catalogue/[categories]/[id]", `/catalogue/olives/${item.id}`)}
    >
      <UIAspectRatio ratio={6 / 5}>
        <UIImage src={item.image} sx={{ height: "100%" }} />
      </UIAspectRatio>
      <UICardContent sx={{ textAlign: "center", marginTop: 45 }}>
        <UIHeading variant="h3" fontFamily="alegreya">
          {item.title}
        </UIHeading>
        <UIText variant="text3" color="primary">
          ${item.price}
        </UIText>
      </UICardContent>
    </Card>
  );
});

const MotionProductCard = motion.custom(ProductCard);
export { ProductCard, MotionProductCard };

const Card = React.forwardRef(({ children, ...props }: BoxProps & MotionProps, ref) => {
  const { theme } = useThemeUI();

  return (
    <MotionUICard
      ref={ref}
      {...props}
      sx={{
        height: "100%",
        padding: "24px",
        backgroundImage: `linear-gradient(to bottom, ${theme.colors?.tertiaries[500]}, ${theme.colors?.tertiaries[500]})`,
        userSelect: "none",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      whileHover={{
        backgroundImage: `linear-gradient(to bottom, ${theme.colors?.tertiaries[500]}, #fff)`,
        boxShadow: "0 0 80px rgba(0,0,0,0.1)",
      }}
      whileTap={{
        backgroundImage: `linear-gradient(to bottom, ${theme.colors?.tertiaries[700]}, ${theme.colors?.tertiaries[900]})`,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionUICard>
  );
});
