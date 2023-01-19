let count =0
let countEl=document.getElementById("count-en")
let previousEn=document.getElementById("previous-en")
function icrementCount() {
    count += 1
    countEl.textContent=count
}

function saveCount() {
    previousEn.textContent += count + ' - '
    count = 0;
    countEl.textContent = count
}
