const db = {
    'user': [
        { id: '1', name: 'Dayanna' },
        { id: '2', name: 'Erika' },
        { id: '3', name: 'Victoria' },
    ],
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    db[tabla].push(data);
}

async function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
