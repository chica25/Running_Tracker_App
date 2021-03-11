
let entries = [];
const entriesWrapper = document.getElementById('entries');

function reducer(total, currentValue) {
    return total + currentValue
}

function totalCalc(entries) {
    const allValues = entries.reduce(reducer).toFixed(1)
    document.getElementById('total').innerText = allValues;
    document.getElementById('total-progress').innerText = allValues;
}

function Averagecalc(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1)
    document.getElementById('average').innerText = average
}

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const entry = Number(document.getElementById('entry').value)
    // console.log(entry)
    if(!entry) return
        document.querySelector('form').reset();
        entries.push(entry);
        addNewEntry(entry)
        totalCalc(entries)
        Averagecalc()
}


function addNewEntry(newEntry) {
   entriesWrapper.removeChild(entriesWrapper.firstElementChild);
   const createList = document.createElement('li')
   const listValue = document.createTextNode(newEntry.toFixed(1))
   createList.appendChild(listValue);
   
   entriesWrapper.appendChild(createList);
}