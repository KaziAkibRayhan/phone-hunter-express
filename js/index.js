const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const displayPhones = (phones) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    // display phone 20
    phones = phones.slice(0, 20);
    phones.forEach(phone => {
        const divPhone = document.createElement('div');
        divPhone.classList.add('col');
        divPhone.innerHTML = `
            <div class="col">
                <div class="card p-4">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        `;
        phonesContainer.appendChild(divPhone);
    });
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = '';
})

