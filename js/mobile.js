const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';
    if (searchText == '') {
        console.log("Please enter what you want to search");
    }

    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));
    }


}


const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (data.length == 0) {
        console.log("Not found!");
    }
    else {
        data.forEach(data => {

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            
            <div onclick="loadPhoneDetail('${data.slug}')" class="card h-100">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <p class="card-text">${data.brand}</p>
            </div>
        </div>
       
            `;
            searchResult.appendChild(div);
        })
    }



}

const loadPhoneDetail = slug => {

    const url = `https://openapi.programming-hero.com/api/phone/'${data.slug}'`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data[0]));
}

const displayPhoneDetail = data => {
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.phone_name}</h5>
        

        <p class="card-text">${data.releaseDate}</p>
        <p class="details"> ${data.mainFeatures}</p>
        <a href="#" class="btn btn-primary">
        Details</a>
    </div>
    `;

    phoneDetails.appendChild(div);
}