async function start() {
    let result = await fetch('https://wearpark.alicoder.uz/api/trades');
    result = await result.json();
    let TradesBody = document.querySelector('.TradesBody');
    let loading = document.querySelector('.loading');
    if (result.data) {
        loading.classList.add('d-none');
        let i = 1;
        (result.data).forEach(data => {
            let tr = document.createElement('tr');
            let item = `
            <td>${i}</td>
            <td>${data.date}</td>
            <td>${data.cash}</td>
            <td>${data.terminal}</td>
            <td>${+data.cash + +data.terminal}</td>
            <td>${data.product}</td>
            <td>${data.cost}</td>
            <td>${(+data.cash + +data.terminal) - data.cost}</td>
            <td>del</td>
            `;
            i++;
            tr.innerHTML = item;
            TradesBody.append(tr);
        });
    } else {
        loading.classList.remove('d-none');
    }

}
start();