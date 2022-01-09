
// USAGE: formatAsCurrency.format(3.005); // "3.01"
const formatAsCurrency = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

module.exports = {
    formatAsCurrency: formatAsCurrency
}