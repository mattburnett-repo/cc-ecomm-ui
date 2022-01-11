
// USAGE: formatAsCurrency.format(3.005); // "3.01"
const formatAsCurrency = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const formatDate =   new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
});

module.exports = {
    formatAsCurrency: formatAsCurrency,
    formatDate: formatDate
}