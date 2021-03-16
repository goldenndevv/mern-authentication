import { Maybe, Product as ProductType } from "@/graphql/sdk";
import { theme } from "@/infrastructure/theme";
import { formatMoney } from "@/lib/index";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface StyledTextProps {
  theme?: typeof theme;
}

const PriceTag = styled(Text)<StyledTextProps>`
  background: ${(props) => props.theme.colors.brand.primary};
  transform: rotate(3deg);
  color: ${(props) => props.theme.colors.text.inverse};
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 2.5rem;
  display: inline-block;
  top: -3px;
  right: -3px;
`;

interface ProductProps {
  product: Maybe<ProductType>;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Box>
      <Flex justify="flex-end">
        <PriceTag>{formatMoney(product?.price as number | undefined)}</PriceTag>
      </Flex>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          boxSize="400px"
          objectFit="cover"
          src={product?.photo?.image?.publicUrlTransformed as string | undefined}
          alt={product?.photo?.altText as string | undefined}
          fallbackSrc="https://via.placeholder.com/400"
        />
        <Heading p="1" mt="1" fontWeight="semibold" size="md" as="h3" isTruncated>
          {product?.name}
        </Heading>
        <Text p="1" isTruncated>
          {product?.description}
        </Text>
      </Box>
    </Box>
  );
};
