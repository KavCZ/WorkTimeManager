document.getElementById("company-add").addEventListener("click", function() {
	var myModal = new bootstrap.Modal(document.getElementById('companyModal'));
	myModal.show();
});

document.getElementById("confirmAddCompany").addEventListener("click", function() {
  const ident = document.getElementById("ident").value; // Opraveno na document.getElementById
  const company = document.getElementById("company").value; // Opraveno na document.getElementById
  const category = document.getElementById("category").value; // Opraveno na document.getElementById
  const subcategory = document.getElementById("subcategory").value; // Opraveno na document.getElementById

  fetch('http://localhost:3000/companies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      CompanyIdent: company,
      Kategory: category,
      SubCategory: subcategory,
      Ident: ident
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    if (data.id) { // Kontrola, zda byl řádek přidán
      alert('Company added successfully!');
      
      // Zavolej endpoint na načtení společností po přidání
      return fetch('http://localhost:3000/companies');
    } else {
      alert('Error adding company');
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Zde zpracujte a zobrazte data
    const companiesList = document.getElementById('company-view'); // Předpokládám, že máte prvek pro zobrazení seznamu
    companiesList.innerHTML = ''; // Vyprázdnit seznam před přidáním nových položek
    data.data.forEach(company => {
      const li = document.createElement('li');
      li.textContent = `${company.CompanyIdent} - ${company.Category} - ${company.SubCategory}`;
      companiesList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Zavolání endpointu při načtení stránky
  fetch('http://localhost:3000/companies')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Zde zpracujte a zobrazte data
      const companiesList = document.getElementById('company-view'); // Předpokládám, že máte prvek pro zobrazení seznamu
      companiesList.innerHTML = ''; // Vyprázdnit seznam před přidáním nových položek
      data.data.forEach(company => {
        const li = document.createElement('li');
        li.textContent = `${company.CompanyIdent} - ${company.Category} - ${company.SubCategory}`;
        companiesList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
