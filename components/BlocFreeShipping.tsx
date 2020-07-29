import React from "react";
import { Box } from "theme-ui";
import { UIFlex, UIText, UIButton, UIBloc, UIImage } from "./ui";

export default function BlocFreeShipping() {
  return (
    <UIBloc image="/img-terroir.png">
      <UIFlex>
        <Box sx={{ maxWidth: 500, textAlign: "center" }}>
          <UIImage src="/svg/logo.svg" />
          <UIText variant="text2" sx={{ marginTop: 30, marginBottom: 30 }}>
            Livraison gratuite pour toute commande supérieure à 60$
          </UIText>
          <UIButton>En savoir plus</UIButton>
        </Box>
      </UIFlex>
    </UIBloc>
  );
}
