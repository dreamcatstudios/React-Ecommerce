const FormatPrice = ({ currency }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(currency / 100);
};

export default FormatPrice;
