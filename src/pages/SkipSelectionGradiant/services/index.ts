export const calculateFinalPrice = (priceBeforeVat: any, vat: any) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
};
