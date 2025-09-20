export const formatPriceUSD = (priceStr) => {
  const priceNum = parseFloat(priceStr)/1 ; // assuming priceStr is in paise
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits:4,
  }).format(priceNum);
};