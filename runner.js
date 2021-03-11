const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);

let entries = [];

function handleSubmit(e) {
    e.preventDefault();
    const entry = Number(document.getElementById('entry').value)
    // console.log(entry)
    if(!entry) return
        document.querySelector('form').reset();
        entries.push(entry);
        addNewEntry(entry)
}


function addNewEntry(newEntry) {
    // console.log(newEntry)
   const createList = document.createElement('li')
   const value = document.createTextNode(newEntry)
}