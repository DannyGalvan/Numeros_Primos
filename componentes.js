
export const row = (data)=>{
    let inicio = 0;
    let final = 6;
    let datos = [];

    for (let index = 0; index < parseInt(data.length/6)+1; index++) {
        datos.push(data.slice(inicio,final));
        inicio = inicio + 6;
        final = final + 6;
    }

    return  datos.map(element => {      
        const tr = document.createElement('tr');
        const tds = element.map(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        return  td;
        })
        tr.append(...tds);
        return tr;
    });
}

export const tableSpinner = ()=>{
    return `<th scope="row" colspan="6">
                <div class="d-flex justify-content-center" colspan="2">
                    <strong>Cargando espera un momento...</strong>
                    <div class="spinner-border" colspan="4" role="status">
                    </div>
                </div>
            </th>`
}