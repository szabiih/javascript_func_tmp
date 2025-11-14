/**
 * @typedef {{brand:string,model:string,year:string,designer1:string,designer2?:string}} CountryWriters
 */

function createFormElement (from, id, LabelContent){
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = LabelContent;
    from.appendChild(label);

    const input = document.createElement('input');
    input.id = id;
    from.appendChild(input);
}

/**
 * @param {*} tablebody
 * @param {*} CountryWriters
 */
function renderTableRow (tablebody, CountryWriters){
    const tr2 = document.createElement('tr');
    tablebody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = CountryWriters.nationality;
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
    tr2_td2.innerText = CountryWriters.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = CountryWriters.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (CountryWriters.author2 != undefined && CountryWriters.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = CountryWriters.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = CountryWriters.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}

/**
 * @param {'td' | 'th'} cellType 
 * @param {*} cellContent 
 * @param {*} parameter 
 * @returns 
 */
function createCell (cellType, cellContent, parameter){
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parameter.appendChild(cell);
    return cell;
}

function createHeader (table, headerList){
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    for (let element of headerList){
        //  createCell
        const cell = document.createElement('th');
        cell.innerText = element;
        tr.appendChild(cell);
    }
}

/**
 * 
 * @param {Event} e 
 */
function HTMLFormEventLister (e){
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
}