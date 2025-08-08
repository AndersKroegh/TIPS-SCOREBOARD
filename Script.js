document.addEventListener('DOMContentLoaded', () => {
    const addPlayerBtn = document.getElementById('add-player');
    const tableBody = document.getElementById('scoreboard-body');

    function createPlayerRow(name = '') {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = name;
        nameTd.appendChild(nameInput);

        tr.appendChild(nameTd);

        for (let i = 0; i < 5; i++) { // assuming 5 rounds
            const scoreTd = document.createElement('td');
            const select = document.createElement('select');
            for (let j = 0; j <= 10; j++) {
                const option = document.createElement('option');
                option.value = j;
                option.textContent = j;
                select.appendChild(option);
            }
            scoreTd.appendChild(select);
            tr.appendChild(scoreTd);
        }

        const actionTd = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '-';
        removeBtn.addEventListener('click', () => {
            tableBody.removeChild(tr);
        });
        actionTd.appendChild(removeBtn);
        tr.appendChild(actionTd);

        tableBody.appendChild(tr);
    }

    addPlayerBtn.addEventListener('click', () => {
        createPlayerRow();
    });
});
