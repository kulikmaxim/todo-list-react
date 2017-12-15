export function filterBy(list, {showComplited, searchText, dateFrom, dateTo}) {
    return list.filter((item) => {
        let pattern = new RegExp(searchText, 'i');
        
        return (showComplited || !item.done) &&
            (dateFrom ? dateFrom <= item.date : true) &&
            (dateTo ? dateTo >= item.date : true) &&
            (searchText ? (pattern.test(item.title) || pattern.test(item.description)) : true);
    });
}