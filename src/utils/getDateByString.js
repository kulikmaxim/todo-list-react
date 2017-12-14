export default (dateString) => {
    let pattern = /\d{2}\.\d{2}\.\d{4}/;
    let match = dateString.trim().match(pattern);

    if (!match) {
        return null;
    }

   return new Date(match[3], match[2], match[1]);
}