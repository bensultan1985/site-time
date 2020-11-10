
//DOM Objects
let addGridContainerSister = document.getElementById('add-grid-container-sister');
let addGridContainerSite = document.getElementById('add-grid-container-site');
let dataGrid = document.getElementById('data-grid-container')
let selectedSite = document.getElementById('selected-site')
let selectedOtherCities = document.getElementById('selected-other-cities')
let siteNameHead = document.getElementById('sitename-head')
let cityNameHead = document.getElementById('cityname-head')
let addGridSaveButtonSite = document.getElementById('add-grid-save-button-site')
let addGridSaveButtonSister = document.getElementById('add-grid-save-button-sister')
let addGridSaveButton = document.getElementById('add-grid-save-button')
let addGridCancelButton = document.getElementById('add-grid-cancel-button')
let createEditTitle = document.getElementById('create-edit-title');
let addGridContainerSisterAdditions = document.getElementById('add-grid-container-sister-additions');
let newWoeidInput = document.getElementById('new-woeid-input');
let newCityInput = document.getElementById('new-city-input');
let cityStateCountry = document.getElementById('city-state-country');
let countryOptions = document.getElementById('country-options');
let cC = 'AF';

//Init grid's alphabetical order data
siteNameHead.name = 'site-desc';
cityNameHead.name = 'city-asc';
siteNameHead.addEventListener('click', () => {makeDataGrid(siteNameHead.name)});
cityNameHead.addEventListener('click', () => {makeDataGrid(cityNameHead.name)});

//Temporary Objects and Arrays to store site information
const sisterData = {};
let citySortedArray = [];
const siteData = {};
const siteSortedArray = [];
let allCitiesArray = [];

const woeid = {};
let tempSite = '';
let tempCity = '';
let tempOtherCities = [];
let holdWOEID = '';
let tempNewCity = '';

//todo: alphabetize otherCities before http post
const addData = {
    site: '',
    woeid: '',
    siteCity: '',
    otherCities: [],
    originSite: '',
    edit: false,
}

const getWoeidCity = async (data) => {
    const response = await fetch('/getcity', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    data = await response.json();
    if (data.location.woeid == '29334827' || !data.location.woeid || data.location.city == "Ca'") {
        console.log('no')
        tempNewCity = data.location.city + ', ' + data.location.region;
        tempNewCity = '';
        return
    } else {
        cityStateCountry.innerHTML = `${data.location.city}, ${data.location.region}, ${data.location.country}<div style="display: inline-block">&nbsp;&nbsp;  WOEID: ${data.location.woeid}</div>`
    console.log('data', data)
    newCityInput.value = data.location.city + ',' + data.location.region;
    tempNewCity = data.location.city + ',' + data.location.region;
    console.log(tempNewCity, 'this is temp')

    return;
    }
    
}


const postWoied = async (data) => {
    const response = await fetch('/postwoeid', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    data = await response.json();
    if (data.location.woeid == '29334827' || !data.location.woeid || data.location.city == "Ca'") {
        newWoeidInput.value = 'ID Not found. Enter manually.';
        cityStateCountry.innerHTML = '';
        tempNewCity = data.location.city + ',' + data.location.region;
        return
    } else {
    newWoeidInput.value = data.location.woeid;
    cityStateCountry.innerHTML = `${data.location.city}, ${data.location.region}, ${data.location.country}<div style="display: inline-block">&nbsp;&nbsp;  WOEID: ${data.location.woeid}</div>`
    // newCityInput.value = data.location.city + ', ' + data.location.region
    tempNewCity = data.location.city + ',' + data.location.region;
    return;
    }
}


//POST JSON data
const postData = async (data) => {
    const response = await fetch('/postdata', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
  }

//Save & Cancel Button Functions


const updateEntry = () => {
    if (newCityInput.value != '') {
        let str = `"${newCityInput.value}, ${cC}, ${cC} "`
    console.log(str)
    postWoied({test: str})
    } else {
        let str =  `${newCityInput.value}`
        postWoied({test: str})
}
}

newCityInput.addEventListener('input', () => {
   updateEntry()
})

countryOptions.addEventListener('change', () => {
    let i = countryOptions.selectedIndex;
    cC = countryOptions.options[i].value;
    console.log(cC)
    updateEntry()
    })

newWoeidInput.addEventListener('input', async () => {
    console.log(newWoeidInput.value)
    let focused = document.hasFocus()
    console.log(focused)
    if (focused) {
        await getWoeidCity({woeid: newWoeidInput.value})
        console.log('has focus')
    }
})

addGridSaveButtonSister.addEventListener('click', async () => {
    let containerElement = document.createElement('div');
    addData.otherCities = tempOtherCities;
    addData.site = document.getElementById('new-site-input').value;
    addData.siteCity = newCityInput.value;
    selectedOtherCities.innerHTML = '';
    containerElement.innerHTML = '';
    addData.otherCities.forEach(element => {
        let innerElement = document.createElement('div');
        innerElement.className = 'sm-box';
        innerElement.innerHTML = element;
        containerElement.appendChild(innerElement);
        selectedOtherCities.appendChild(containerElement);
    });
});


addGridSaveButtonSite.addEventListener('click', async () => {
    addData.site = tempSite;
    await updateIdAndCity(addData.site);
    selectedSite.innerHTML = addData.site + ` (${addData.siteCity})`;
});

addGridSaveButton.addEventListener('click', async () => {
    addData.site = document.getElementById('new-site-input').value;
    addData.siteCity = newCityInput.value;
    console.log(tempNewCity, 'temp city')
    addData.siteCity = tempNewCity;
    addData.woeid = newWoeidInput.value;
    await postData(addData).then(res => console.log(res))
    makeDataGrid('site-desc')
    addData.site = '';
    addData.siteCity = '';
    addData.otherCities = [];
    addData.originSite = '';
    addData.edit = false;
    document.getElementById('new-site-input').value = '';
    newCityInput.value = '';
    selectedOtherCities.innerHTML = '';
    $('#lookup-panel').hide();
    $('#lookup-msg').show();
})

addGridCancelButton.addEventListener('click', () => {
    addData.site = '';
    addData.siteCity = '';
    addData.otherCities = [];
    document.getElementById('new-site-input').value = '';
    newCityInput.value = '';
    selectedOtherCities.innerHTML = '';
    $('#lookup-panel').hide();
    $('#lookup-msg').show();
})


const initAllCities = async () => {
    const rawResponse = await fetch('/getdata');
    data = await rawResponse.json();
    data.WOEID.forEach(element=> {
        console.log(element.Name)
        citySortedArray.push(element.Name);
        allCitiesArray.push(element.Name);
    });
    allCitiesArray.sort();
    for (let i = 0; i < citySortedArray.length-1; i++) {
        if (citySortedArray[i] == citySortedArray[i+1]) {
            citySortedArray.splice(i, 1)
            i--;
        };
    };
    for (let i = 0; i < allCitiesArray.length-1; i++) {
        if (allCitiesArray[i] == allCitiesArray[i+1]) {
            allCitiesArray.splice(i, 1)
            i--;
        };
    };
    console.log(allCitiesArray, 'all of them')
}

const createGrid = (arr) => {
    arr.forEach(element => {
        let item = document.createElement('div');
        item.innerHTML = element;
        item.className = 'grid-item';
        item.addEventListener('click', (e) => {
            if (e.target.className == 'grid-item') {
                e.target.className = 'grid-item grid-item-selected';
                tempOtherCities.push(e.target.innerHTML);
            } else {
                e.target.className = 'grid-item';
                for (let i = 0; i < tempOtherCities.length; i++) {
                    if (tempOtherCities[i] == e.target.innerHTML) tempOtherCities.splice(i, 1)
                };
            };
        });
    addGridContainerSister.appendChild(item);
    });
};

const makeSisterGrid = async()=> {
    createGrid(allCitiesArray);
};

const updateIdAndCity = async (getname) => {
    const rawResponse = await fetch('/getdata');
    data = await rawResponse.json();
    data.Sites.forEach(element => {
        if (getname == element.Site) {
            addData.siteCity = element.SiteCities[0];
            addData.woeid = woeid[element.SiteCities[0]];
        };
    });
    return;
};

const makeSort = (sortStyle, arr) => {
    if (sortStyle == 'site-desc') {
        arr = arr.sort((a,b) => {
           return  a.Site.localeCompare(b.Site);
        });
        siteNameHead.name = 'site-asc';
        cityNameHead.name = 'city-desc';
    };

    if (sortStyle == 'site-asc') {
        arr = arr.sort((a,b) => {
            return  b.Site.localeCompare(a.Site);
        });
        siteNameHead.name = 'site-desc';
        cityNameHead.name = 'city-desc';
    };
    if (sortStyle == 'city-desc') {
        arr = arr.sort((a,b) => {
           return  a.SiteCities > b.SiteCities;
        });
        cityNameHead.name = 'city-asc';
        siteNameHead.name = 'site-desc';
    };

    if (sortStyle == 'city-asc') {
        arr = arr.sort((a,b) => {
           return  a.SiteCities < b.SiteCities;
        });
        cityNameHead.name = 'city-desc';
        siteNameHead.name = 'site-desc';
    };
    return arr;
};

const getStoredWoeid = async(data) => {
    console.log(data, 'given stored')
    const response = await fetch('/getstoredwoeid', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    newData = await response.json();
    console.log(newData, 'returned stored')
    return newData;
}

const openEdit = async (element, isEdit) => {
    console.log(element)
    console.log('editing...')
    addData.site = element.Site;
    addData.siteCity = element.SiteCities;
    addData.otherCities = element.OtherCities;
    tempOtherCities = element.OtherCities;
    addData.edit = true;
    addData.originSite = element.Site;
    console.log(addData)
    let editWoeid = await getStoredWoeid({city: element.SiteCities})
    getWoeidCity({woeid: editWoeid.ID})
    console.log(editWoeid.ID)
    addData.woeid = editWoeid.ID
    newWoeidInput.value = editWoeid.ID;
    tempNewCity = element.SiteCities;
    createEditTitle.innerHTML = 'Edit Site Profile';
    addGridSaveButton.name = 'edit';
    document.getElementById('new-site-input').value = element.Site;
    newCityInput.value = element.SiteCities;
    let containerElement = document.createElement('div');
    selectedOtherCities.innerHTML = '';
    containerElement.innerHTML = '';
    element.OtherCities.forEach(element => {
        let innerElement = document.createElement('div');
        innerElement.className = 'sm-box';
        innerElement.innerHTML = element;
        containerElement.appendChild(innerElement);
        selectedOtherCities.appendChild(containerElement);
    })
    console.log(addData, 'addData')
    $('.hover_bkgr_fricc').show();
}


const makeDataGrid = async (sortStyle) => {
    for (let i = 8; i < dataGrid.childNodes.length; i++) {
        dataGrid.removeChild(dataGrid.childNodes[i]);
        i--;
    };
    let even = false;
    const savedData = {};
    const rawResponse = await fetch('/getdata');
        data = await rawResponse.json();
        let sites = data.Sites;
        if (sortStyle) sites = makeSort(sortStyle, sites);
        sites.forEach(element => {
        let siteBlock = document.createElement('div');
        let cityBlock = document.createElement('div');
        let otherCitiesBlock = document.createElement('div');
        let editButtonDiv = document.createElement('div');
        let editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = 'edit';
        siteBlock.innerHTML = element.Site;
        cityBlock.innerHTML = element.SiteCities;
        editButton.name = element.Site;
        otherCitiesBlock.innerHTML = element.OtherCities.join(', ');
        if (even) {
            editButtonDiv.className = 'data-grid-item data-grid-edit'
            otherCitiesBlock.className = 'data-grid-item';
            cityBlock.className = 'data-grid-item';
            siteBlock.className = 'data-grid-item';
        } else {
            editButtonDiv.className = 'data-grid-item data-grid-edit even';
            otherCitiesBlock.className = 'data-grid-item even';
            cityBlock.className = 'data-grid-item even';
            siteBlock.className = 'data-grid-item even';
        };
        editButtonDiv.appendChild(editButton);
        dataGrid.appendChild(siteBlock);
        dataGrid.appendChild(cityBlock);
        dataGrid.appendChild(otherCitiesBlock);
        dataGrid.appendChild(editButtonDiv);
        even = !even;
        editButton.addEventListener('click', openEdit.bind(null, element, true), false);
    });
};

const getWoeid = async () => {
    const rawResponse = await fetch('/getdata');
    data = await rawResponse.json();
    data.WOEID.forEach(element => {
        if (woeid[element.Name] == null) {
            woeid[element.Name] = [element][0].ID;
        };
    });
};

const startup = async() => {
await initAllCities()
makeSisterGrid();
makeDataGrid(siteNameHead.name);
getWoeid();
}

startup();



//jQuery

$(document).ready(() => {
});

$('.grid-item-sister').on('click', () => {
    $(this).className = 'grid-item-selected';
});

$(".trigger_popup_fricc").click(function(){
    createEditTitle.innerHTML = 'Create Site Profile'
    addGridSaveButton.name = 'create'
    addData.edit = false;
    addData.originSite = '';
    console.log(addData)
    $('.hover_bkgr_fricc').show();
 });

$('.popupCloseButton').click(function(){
    $('.hover_bkgr_fricc').hide();
});

$("#trigger-other-cities").click(function(){
     console.log(addData.otherCities)
    let wholeGrid = document.querySelectorAll('.grid-item');
    for (let k = 0; k < wholeGrid.length; k++) {
        wholeGrid[k].className = 'grid-item';
        console.log(wholeGrid[k])
    }
    for (let i = 0; i < wholeGrid.length; i++) {
            for (let j = 0; j < addData.otherCities.length; j++) {
        if (addData.otherCities[j] == wholeGrid[i].innerHTML) {
            wholeGrid[i].className = 'grid-item grid-item-selected';
        }
    }
    }
    $('#add-other-cities').show();
 });


$("#trigger-site").click(function(){
    let wholeGrid = document.getElementsByClassName('grid-item-site');
    for (let i = 0; i < wholeGrid.length; i++) {
        if (addData.site == wholeGrid[i].innerHTML) {
            wholeGrid[i].className = 'grid-item-site grid-item-selected-site';
        } else {
            wholeGrid[i].className = 'grid-item-site';
        };
    };
    $('#add-site-site').show();
 });

$('.close-sub').click(function(){
     $('.hover_bkgr_fricc-sub').hide();
        $('#push-new-cities').hide();
        $('#open-push-new-cities').show();
 });

$('.close-main').click(function(){
    $('.hover_bkgr_fricc').hide();
});

$('#open-push-new-cities').click(function(){
    $('#push-new-cities').show();
    $('#open-push-new-cities').hide();
});
$('#close-new-cities-button').click(function(){
    $('#push-new-cities').hide();
    $('#open-push-new-cities').show();
});

$('#save-new-cities-button').click(function(){
    additionsInputArray = document.getElementById('new-cities-input').value.split(', ')
    createGrid(additionsInputArray)
    document.getElementById('new-cities-input').value = '';
    $('#push-new-cities').hide();
    $('#open-push-new-cities').show();
});

$('#lookup-button').click(function(){
    $('#lookup-panel').show()
    $('#lookup-msg').hide()
})

$('#close-panel').click(function() {
    $('#lookup-panel').hide()

    $('#lookup-msg').show()
})