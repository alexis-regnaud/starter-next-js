import React from "react";
import { jsx, Box, Heading, Flex, Input } from "theme-ui";
import { motion } from "framer-motion";
import { UIFlex, UIText, UIButton, MotionUIBloc } from "./ui";

/** @jsx jsx */

const BlocNewsletter = () => {
  return (
    <MotionUIBloc image="/img-contact.png" parallax>
      <UIFlex color="white">
        <Box sx={{ maxWidth: 500, textAlign: "center" }}>
          <Heading variant="h2">Restons en contact</Heading>
          <UIText variant="text3" fontFamily="alegreya">
            Profitez d’une remise de 15% sur votre première commande en vous abonnant à notre infolettre.
          </UIText>
          <Flex sx={{ marginTop: 30, marginBottom: 30 }}>
            <Input
              defaultValue="Votre e-mail"
              sx={{ flex: "1 1 auto", marginRight: "10px", width: "initial" }}
            />
            <UIButton variant="secondary">s'abonner</UIButton>
          </Flex>
        </Box>
        <UIText variant="text6">
          En cliquant sur le bouton vous acceptez la{" "}
          <UIText as="span" color="primary">
            Politique de confidentialité
          </UIText>{" "}
          et les{" "}
          <UIText as="span" color="primary">
            Termes et Conditions
          </UIText>
        </UIText>
      </UIFlex>
    </MotionUIBloc>
  );
};

export default BlocNewsletter;
