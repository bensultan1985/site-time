

let addGridContainerSister = document.getElementById('add-grid-container-sister');
let addGridContainerSite = document.getElementById('add-grid-container-site');
let dataGrid = document.getElementById('data-grid-container')
let selectedSite = document.getElementById('selected-site')
let selectedOtherCities = document.getElementById('selected-other-cities')
let siteNameHead = document.getElementById('sitename-head')
let addGridSaveButtonSite = document.getElementById('add-grid-save-button-site')
let addGridSaveButtonSister = document.getElementById('add-grid-save-button-sister')


siteNameHead.name = 'site-desc';
siteNameHead.addEventListener('click', () => {makeDataGrid(siteNameHead.name)});

const sisterData = {};
let citySortedArray = [];
const siteData = {}
const siteSortedArray = []

//todo: alphabetize otherCities before http post
const addData = {
    site: '',
    woeid: '',
    siteCity: '',
    otherCities: []
}

const woeid = {};
let tempSite = '';
let tempCity = '';
let tempOtherCities = [];



addGridSaveButtonSister.addEventListener('click', async () => {
    let containerElement = document.createElement('div');
    addData.otherCities = tempOtherCities;
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


const makeSisterGrid = async()=> {
    const rawResponse = await fetch('/WeatherCentral.json');
    data = await rawResponse.json();
    data.Sites.forEach(element=> citySortedArray.push(element.SiteCities[0]));
    citySortedArray.sort();
    for (let i = 0; i < citySortedArray.length-1; i++) {
        if (citySortedArray[i] == citySortedArray[i+1]) {
            citySortedArray.splice(i, 1)
            i--;
        };
    };
    citySortedArray.forEach(element => {
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

const updateIdAndCity = async (getname) => {
    const rawResponse = await fetch('/WeatherCentral.json');
    data = await rawResponse.json();
    data.Sites.forEach(element => {
        if (getname == element.Site) {
            addData.siteCity = element.SiteCities[0];
            addData.woeid = woeid[element.SiteCities[0]];
        };
    });
    return;
};


const makeSiteGrid = async()=> {
    const rawResponse = await fetch('/WeatherCentral.json');
    data = await rawResponse.json();
    data.Sites.forEach(element=> siteSortedArray.push(element.Site))
    siteSortedArray.sort();
    for (let i = 0; i < siteSortedArray.length-1; i++) {
        if (siteSortedArray[i] == siteSortedArray[i+1]) {
            siteSortedArray.splice(i, 1);
            i--;
        };
    };
    siteSortedArray.forEach(element => {
        let item = document.createElement('div');
        item.innerHTML = element;
        item.className = 'grid-item-site';
        item.addEventListener('click', async(e) => {
            if (e.target.className == 'grid-item-site') {
                e.target.className = 'grid-item-site grid-item-selected-site';
                let wholeGrid = document.getElementsByClassName('grid-item-selected-site');
                for (let i = 0; i < wholeGrid.length; i++) {
                    if (wholeGrid[i].innerHTML != e.target.innerHTML) {
                        wholeGrid[i].className = 'grid-item-site';
                    };
                };
                tempSite = e.target.innerHTML;
            } else {
                e.target.className = 'grid-item-site';
            };
        });
    addGridContainerSite.appendChild(item);
    });
};

const makeSort = (sortStyle, arr) => {
    if (sortStyle == 'site-desc') {
        arr = arr.sort((a,b) => {
           return  a.Site > b.Site;
        });
        siteNameHead.name = 'site-asc';
    };

    if (sortStyle == 'site-asc') {
        arr = arr.sort((a,b) => {
           return  a.Site < b.Site;
        });
        siteNameHead.name = 'site-desc';
    };
    if (sortStyle == 'city-asc') {
        arr = arr.sort((a,b) => {
           return  a.SiteCities > b.SiteCities;
        });
    };

    if (sortStyle == 'city-desc') {
        arr = arr.sort((a,b) => {
           return  a.SiteCities < b.SiteCities;
        });
    };

    if (sortStyle == 'other-cities-asc') {
        arr = arr.sort((a,b) => {
           return  a.OtherCities > b.OtherCities;
        });
    };

    if (sortStyle == 'other-cities-desc') {
        arr = arr.sort((a,b) => {
           return  a.OtherCities < b.OtherCities;
        });
    };
    return arr;
};

const makeDataGrid = async (sortStyle) => {
    for (let i = 8; i < dataGrid.childNodes.length; i++) {
        dataGrid.removeChild(dataGrid.childNodes[i]);
        i--;
    }
    let even = false;
    const savedData = {};
    const rawResponse = await fetch('/WeatherCentral.json');
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
        otherCitiesBlock.innerHTML = element.OtherCities.join(', ');
        if (even) {
            editButtonDiv.className = 'data-grid-item data-grid-edit'
            otherCitiesBlock.className = 'data-grid-item';
            cityBlock.className = 'data-grid-item';
            siteBlock.className = 'data-grid-item';
        } else {
            editButtonDiv.className = 'data-grid-item data-grid-edit even'
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
    });
};

const getWoeid = async () => {
    const rawResponse = await fetch('/WeatherCentral.json');
    data = await rawResponse.json();
    data.WOEID.forEach(element => {
        if (woeid[element.Name] == null) {
            woeid[element.Name] = [element][0].ID;
        };
    });
};

makeSisterGrid();
makeSiteGrid();
makeDataGrid(siteNameHead.name);
getWoeid();

$(document).ready(() => {
    // $('#add-grid').hide()
    // $('#add-grid-sister').hide()
});

// $('#add-site').on('click', () => {
//     $('#add-grid').toggle()
// })

// $('#add-site-sister').on('click', () => {
//     $('#add-grid-sister').toggle()
// })

$('.grid-item-sister').on('click', () => {
    $(this).className = 'grid-item-selected';
});

$(".trigger_popup_fricc").click(function(){
    $('.hover_bkgr_fricc').show();
 });
//  $('.hover_bkgr_fricc').click(function(){
//      $('.hover_bkgr_fricc').hide();
//  });
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
 });

 $('.close-main').click(function(){
    $('.hover_bkgr_fricc').hide();
});