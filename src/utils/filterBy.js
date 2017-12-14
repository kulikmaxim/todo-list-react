export function filterBy(list, {showComplited, searchText, dateFrom, dateTo}) {
    return list.filter((item) => showComplited || !item.importance);
}