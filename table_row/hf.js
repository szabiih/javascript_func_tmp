/**
 * @type {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}[]}
 */

const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        literarypiece1: 'A köpönyeg',
        author2: 'Csehov',
        literarypiece2: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        literarypiece1: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        literarypiece1: 'gyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svácj',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const a = ['Nemzetiség', 'Szerző', 'Mű'];
for(let i of a) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = i;
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for(let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = a.nationality;
    //  eseménykezelés
    tr2_td1.addEventListener('click', function(e) {
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target;
        a.classList.add('marked');
    });
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = a.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = a.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (a.author2 != undefined && a.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = a.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = a.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}

const element = document.getElementById('htmlform');
element.addEventListener('submit', function(e) {
    e.preventDefault();     //  alapértelmezett működés meggátolása
    /**
     * @type {HTMLFormElement}
     */
    const a = e.target;

    /**
     * @type {HTMLInputElement}
     */
    const alma = a.querySelector('#nemzetiseg');

    /**
     * @type {HTMLInputElement}
     */
    const korte = a.querySelector('#szerzo1');

    /**
     * @type {HTMLInputElement}
     */
    const banan = a.querySelector('#szerzo2');

    /**
     * @type {HTMLInputElement}
     */
    const mango = a.querySelector('#mu1');

    /**
     * @type {HTMLInputElement}
     */
    const szollo = a.querySelector('#mu2');

    /**
     * @type {string}
     */
    const almaValue = alma.value;

    /**
     * @type {string}
     */
    const korteValue = korte.value;

    /**
     * @type {string}
     */
    const bananValue = banan.value;

    /**
     * @type {string}
     */
    const mangoValue = mango.value;

    /**
     * @type {string}
     */
    const szolloValue = szollo.value;

    /**
     * @type {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}}
     */
    const obj = {}

    obj.nationality = almaValue;
    obj.author1 = korteValue;
    obj.author2 = bananValue;
    obj.literarypiece1 = mangoValue;
    obj.literarypiece2 = szolloValue;

    const tbody = document.getElementById('mano');
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = obj.nationality;
    //  eseménykezelés
    tr2_td1.addEventListener('click', function(e) {
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target;
        a.classList.add('marked');
    });
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = obj.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = obj.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (a.author2 != '' && obj.literarypiece2 != '') {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = obj.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = obj.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
});

function createFormElement (from, id, LabelContent){
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = LabelContent;
    from.appendChild(label);

    const input = document.createElement('input');
    input.id = id;
    from.appendChild(input);
}

const formNew = document.createElement('form');
document.body.appendChild(formNew);

createFormElement(formNew, 'nemzetiseg', 'Nemzetiség:');
createFormElement(formNew, 'szerzo1', 'Szerző neve:');
createFormElement(formNew, 'szerzo2', 'Szerző neve:');
createFormElement(formNew, 'mu1', 'Mű címe:');
createFormElement(formNew, 'mu2', 'Mű címe:');