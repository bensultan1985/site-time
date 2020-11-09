const http = require('http');
const path = require('path');
const fs = require('fs');
const fetch = require("node-fetch");
const util = require('util');
const CryptoJS = require('crypto-js');
var OAuth = require('oauth');


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html'})
//             res.end(content)
//         })
//         fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/css'})
//             res.end(content)
            
//         })
//         fs.readFile(path.join(__dirname, 'public', 'script.js'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/javascript'})
//             res.end(content)
//         })
//         fs.readFile(path.join(__dirname, 'public', 'favicon.ico'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200)
//             res.end(content)
//         })
//     }
// })

const express = require('express');

const app = express()

app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// app.post('/postData', async (req, res) => {
// console.log(req.body.pagecount)
// let response = await fetch(tempObject).then(res => res.json());
// console.log(response)
// res.send(response);
// console.log('request made successfully');
// })

const tempObj = {
	"WOEID": 
	[
		{
			"Name": "Albuquerque",
			"ID": "2352824"
		}, {
			"Name": "Ottawa",
			"ID": "91982014"
		},{
			"Name": "Niagara",
			"ID": "29375033"
		},{
			"Name": "Montreal",
			"ID": "3534"
		},{
			"Name": "Toronto",
			"ID": "4118"
		},{
			"Name": "Vancouver",
			"ID": "9807"
		},{
			"Name": "Quebec",
			"ID": "3444"
		},{
			"Name": "Winnipeg",
			"ID": "2972"
		},{
			"Name": "Calgary",
			"ID": "8775"
		},{
			"Name": "Anchorage",
			"ID": "2354490"
		},{
			"Name": "Nome",
			"ID": "2460286"
		},{
			"Name": "Bodden Town",
			"ID": "57583"
		},{
			"Name": "Willemstad",
			"ID": "152045"
		},{
			"Name": "Oranjestad",
			"ID": "56069"
		},{
			"Name": "Kralendijk",
			"ID": "151926"
		},{
			"Name": "George Town",
			"ID": "57596"
		},{
			"Name": "Port-au-Prince",
			"ID": "96110"
		},{
			"Name": "Varadero",
			"ID": "68483"
		},{
			"Name": "Fairbanks",
			"ID": "2401279"
		},{
			"Name": "Kotzebue",
			"ID": "2433857"
		},{
			"Name": "Juneau",
			"ID": "2430300"
		},{
			"Name": "Sitka",
			"ID": "2494184"
		},{
			"Name": "Boston",
			"ID": "2367105"
		}, {
			"Name": "Bridgetown",
			"ID": "56334"
		}, {
			"Name": "Charlotte",
			"ID": "2378426"
		}, {
			"Name": "Columbus",
			"ID": "2383660"
		}, {
			"Name": "Detroit",
			"ID": "2391585"
		}, {
			"Name": "Houston",
			"ID": "2424766"
		}, {
			"Name": "Indianapolis",
			"ID": "2427032"
		}, {
			"Name": "Jacksonville",
			"ID": "2428344"
		}, {
			"Name": "Las Vegas",
			"ID": "2436704"
		}, {
			"Name": "Las Varas",
			"ID": "130972"
		},{
			"Name": "Memphis",
			"ID": "2449323"
		}, {
			"Name": "Mississippi",
			"ID": "2347583"
		},{
			"Name": "Oklahoma",
			"ID": "2347595"
		}, {
			"Name": "Philadelphia",
			"ID": "2471217"
		}, {
			"Name": "Phoenix",
			"ID": "2471390"
		}, {
			"Name": "Seattle",
			"ID": "2490383"
		}, {
			"Name": "Chicago",
			"ID": "2379574"
		}, {
			"Name": "Bangkok",
			"ID": "1225448"
		}, {
			"Name": "Beijing",
			"ID": "2151330"
		}, {
			"Name": "Berlin",
			"ID": "638242"
		}, {
			"Name": "Dubai",
			"ID": "1940345"
		}, {
			"Name": "Geneva",
			"ID": "782538"
		}, {
			"Name": "HongKong",
			"ID": "2165352"
		}, {
			"Name": "Johannesburg",
			"ID": "1582504"
		}, {
			"Name": "Kingston",
			"ID": "109251"
		},{
			"Name": "London",
			"ID": "44418"
		}, {
			"Name": "Los Angeles",
			"ID": "2442047"
		}, {
			"Name": "Macau",
			"ID": "1887901"
		}, {
			"Name": "Moscow",
			"ID": "2122265"
		}, {
			"Name": "Montego Bay",
			"ID": "109455"
		}, {
			"Name": "Miami",
			"ID": "2450022"
		},{
			"Name": "Tampa",
			"ID": "2503863"
		},{
			"Name": "Sayulita",
			"ID": "147472"
		},{
			"Name": "Nairobi",
			"ID": "1528488"
		}, {
			"Name": "New Delhi",
			"ID": "28743736"
		}, {
			"Name": "New York",
			"ID": "2347591"
		}, {
			"Name": "Paris",
			"ID": "615702"
		}, {
			"Name": "San Francisco",
			"ID": "2487956"
		}, {
			"Name": "Shanghai",
			"ID": "2151849"
		}, {
			"Name": "Singapore",
			"ID": "1062617"
		}, {
			"Name": "Sydney",
			"ID": "1105779"
		}, {
			"Name": "Taipei",
			"ID": "2306179"
		}, {
			"Name": "Washington, DC",
			"ID": "2514815"
		}, {
			"Name": "Zurich",
			"ID": "784794"
		}, {
			"Name": "Tokyo",
			"ID": "1118370"
		}, {
			"Name": "Elmsford",
			"ID": "2399048"
		}, {
			"Name": "Los Cabos",
			"ID": "55907417"
		}, {
			"Name": "Runaway Bay",
			"ID": "109879"
		}, {
			"Name": "Cabo San Lucas",
			"ID": "144186"
		},{
			"Name": "Puerto Vallarta",
			"ID": "137895"
		},{
			"Name": "Mexico City",
			"ID": "116545"
		},{
			"Name": "Mexicali",
			"ID": "133475"
		},{
			"Name": "Ocho Rios",
			"ID": "109589"
		}, {
			"Name": "Tepic",
			"ID": "148963"
		},{
			"Name": "Guadalajara",
			"ID": "124162"
		}, {
			"Name": "Mérida",
			"ID": "133327"
		},{
			"Name": "Monterrey",
			"ID": "134047"
		},{
			"Name": "Valladolid",
			"ID": "150484"
		},{
			"Name": "Tijuana",
			"ID": "149361"
		}
		,{
			"Name": "Ensenada",
			"ID": "123253"
		}, {
			"Name": "Hayes",
			"ID": "109101"
		},{
			"Name": "Tecate",
			"ID": "148446"
		}, {
			"Name": "Speightstown",
			"ID": "56695"
		},{
			"Name": "Holetown",
			"ID": "56510"
		},{
			"Name": "Ewarton",
			"ID": "108838"
		}, {
			"Name": "San Felipe",
			"ID": "142354"
		}, {
			"Name": "Kyoto-shi",
			"ID": "15015372"
		},{
			"Name": "Naha-shi",
			"ID": "1117818"
		},{
			"Name": "Osaka-shi",
			"ID": "15015370"
		},{
			"Name": "Sapporo-shi",
			"ID": "1118108"
		},{
			"Name": "Fukuoka-shi",
			"ID": "1117099"
		}, {
			"Name": "Vancouver",
			"ID": "9807"
		}, {
			"Name": "Dallas",
			"ID": "2388929"
		}, {
			"Name": "Fort Worth",
			"ID": "2406080"
		},{
			"Name": "Austin",
			"ID": "2357536"
		},{
			"Name": "Houston",
			"ID": "2424766"
		},{
			"Name": "San Antonio",
			"ID": "2487796"
		},{
			"Name": "Cancun",
			"ID": "114632"
		}, {
			"Name": "Playa del Carmen",
			"ID": "90290924"
		}, {
			"Name": "Cozumel",
			"ID": "144625"
		}, {
			"Name": "Barbados",
			"ID": "56334"
		}
	],
	"Interval": {
		"siteCity": "60",
		"otherCity": "120"
	},
	"TemperatureUnit": "F",
	"Sites": [{
			"Site": "AHO",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "Deloitte",
			"SiteCities": ["Fort Worth"],
			"OtherCities": ["Dallas", "Austin", "Houston", "San Antonio"]
		},
		{
			"Site": "GenericIV",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "StVincent",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "Route66",
			"SiteCities": ["Albuquerque"],
			"OtherCities": ["Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "TheUniversityClub_Lithium",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "GenericSeniorHealthcare",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "GenericHospitality",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "HiltonLaRomana",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "GenericEnterprise",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "Newsday",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "Nickelodeon",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "HotelBlu2",
			"SiteCities": ["Vancouver"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "LHSC",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},
		{
			"Site": "LHSC2",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},
		{
			"Site": "GenericHelium",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},
		{
			"Site": "ONEKINGWEST_RACHI",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},
		{
			"Site": "ONEKINGWEST",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},		
		{
			"Site": "ATX",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},
		{
			"Site": "GHospital_t",
			"SiteCities": ["Toronto"],
			"OtherCities": ["Niagara", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Montreal"]
		},
		{
			"Site": "RumPointClub",
			"SiteCities": ["Bodden Town"],
			"OtherCities": ["George Town", "Cancun", "Port-au-Prince", "Varadero", "Kingston"]
		},
		{
			"Site": "OTZTelecom",
			"SiteCities": ["Kotzebue"],
			"OtherCities": ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Nome"]
		},
		{
			"Site": "SmartLiving_T",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "SmartLiving_A",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},	
		{
			"Site": "RadissonBarbados",
			"SiteCities": ["Bridgetown"],
			"OtherCities": ["Speightstown", "Holetown", "Kingston", "Cancun", "Port-au-Prince"]
		},	
		{
			"Site": "Oceanhotelsbarbados",
			"SiteCities": ["Bridgetown"],
			"OtherCities": ["Speightstown", "Holetown", "Kingston", "Cancun", "Port-au-Prince"]
		},		
		{
			"Site": "SandalsSBD2",
			"SiteCities": ["Bridgetown"],
			"OtherCities": ["Speightstown", "Holetown", "Kingston", "Cancun", "Port-au-Prince"]
		},
		{
			"Site": "ChilenoBay",
			"SiteCities": ["Cabo San Lucas"],
			"OtherCities": ["Puerto Vallarta", "Guadalajara", "Monterrey", "Mexico City", "Cancun"]
		},
		{
			"Site": "GenericSilicon",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Boston", "Charlotte", "Columbus", "Chicago", "London", "Los Angeles", "Moscow", "Mexico City", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Tokyo"]
		},	
		{
			"Site": "SignageDemo",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Boston", "Charlotte", "Columbus", "Chicago", "London", "Los Angeles", "Moscow", "Mexico City", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Tokyo"]
		},	
		{
			"Site": "Hyatt Ziva",
			"SiteCities": ["Cancun"],
			"OtherCities": ["Miami", "Tampa", "Playa del Carmen", "Mérida", "Valladolid", "Mexico City"]
		},
		{
			"Site": "HyattZivaCC",
			"SiteCities": ["Cancun"],
			"OtherCities": ["Miami", "Tampa", "Playa del Carmen", "Mérida", "Valladolid", "Mexico City"]
		},
		{
			"Site": "JewelResorts_M",
			"SiteCities": ["Runaway Bay"],
			"OtherCities": ["Kingston", "Montego Bay", "Ocho Rios", "Ewarton", "Hayes"]
		},
		{
			"Site": "JewelResorts2",
			"SiteCities": ["Runaway Bay"],
			"OtherCities": ["Kingston", "Montego Bay", "Ocho Rios", "Ewarton", "Hayes"]
		},
		{
			"Site": "CMC",
			"SiteCities": ["Willemstad"],
			"OtherCities": ["Oranjestad", "Kralendijk"]
		},
		{
			"Site": "SandalsSBR",
			"SiteCities": ["Bridgetown"],
			"OtherCities": ["Speightstown", "Holetown"]
		},
		{
			"Site": "SandalsSBR2",
			"SiteCities": ["Bridgetown"],
			"OtherCities": ["Speightstown", "Holetown", "Kingston", "Cancun", "Port-au-Prince"]
		},
		{
			"Site": "SandalsSMB2",
			"SiteCities": ["Montego Bay"],
			"OtherCities": ["Kingston", "Runaway Bay", "Ocho Rios", "Ewarton", "Hayes"]
		},
		{
			"Site": "Halfmoon",
			"SiteCities": ["Montego Bay"],
			"OtherCities": ["Kingston", "Runaway Bay", "Ocho Rios", "Ewarton", "Hayes"]
		},
		{
			"Site": "ONOMandarina",
			"SiteCities": ["Sayulita"],
			"OtherCities": ["Puerto Vallarta", "Las Varas", "Tepic", "Guadalajara", "Mexico City"]
		},
		{
			"Site": "FourSeasonsCabo",
			"SiteCities": ["Los Cabos"],
			"OtherCities": ["San Felipe", "Tecate", "Ensenada", "Tijuana", "Mexicali"]
		},
		{
			"Site": "MontageCabos",
			"SiteCities": ["Los Cabos"],
			"OtherCities": ["San Felipe", "Tecate", "Ensenada", "Tijuana", "Mexicali"]
		},
		{
			"Site": "MontageCabos2",
			"SiteCities": ["Los Cabos"],
			"OtherCities": ["San Felipe", "Tecate", "Ensenada", "Tijuana", "Mexicali"]
		},
		{
			"Site": "SLTY2",
			"SiteCities": ["Tokyo"],
			"OtherCities": ["Naha-shi", "Sapporo-shi", "Kyoto-shi", "Osaka-shi", "Fukuoka-shi",
				"Bangkok", "Beijing", "Berlin", "Dubai",
				"Vancouver", "Cancun", "Playa del Carmen", "Cozumel",
				"Geneva", "HongKong", "Johannesburg", "London", "Macau", "Mexico City", "Moscow",
				"Nairobi", "New Delhi", "New York", "Paris", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich"]
		},
		{
			"Site": "SLTYSilicon",
			"SiteCities": ["Tokyo"],
			"OtherCities": ["Naha-shi", "Sapporo-shi", "Kyoto-shi", "Osaka-shi", "Fukuoka-shi",
				"Bangkok", "Beijing", "Berlin", "Dubai",
				"Vancouver", "Cancun", "Playa del Carmen", "Cozumel",
				"Geneva", "HongKong", "Johannesburg", "London", "Macau", "Mexico City", "Moscow",
				"Nairobi", "New Delhi", "New York", "Paris", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich"]
		},
		{
			"Site": "AvilabeachHotel",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "SunscapeResorts",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "DreamsResorts",
			"SiteCities": ["Elmsford"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		},
		{
			"Site": "RogersMRC",
			"SiteCities": ["Montreal"],
			"OtherCities": ["Quebec", "Toronto", "Calgary", "Winnipeg", "Quebec", "Vancouver", "Ottawa", "Toronto", "Boston", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Houston", "Las Vegas", "Philadelphia", "Seattle", "Auckland", "Tokyo"]
		},
				{
			"Site": "oceanhotelsbarbados",
			"SiteCities": ["Barbados"],
			"OtherCities": ["Albuquerque", "Boston", "Charlotte", "Columbus", "Chicago", "Bangkok", "Beijing", "Berlin", "Dubai",
				"Geneva", "HongKong", "Johannesburg", "London", "Los Angeles", "Macau", "Moscow", "Mexico City",
				"Nairobi", "New Delhi", "New York", "Paris", "San Francisco", "Shanghai", "Singapore", "Sydney",
				"Taipei", "Washington, DC", "Zurich", "Detroit", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Memphis",
				"Oklahoma", "Philadelphia", "Phoenix", "Seattle", "Auckland", "Tokyo"]
		}
	],
	"Unincorporated Cities": []
}

app.get('/getdata', async (req, res) => {
    res.send(tempObj);
	})
	
app.post('/postdata', async (req, res) => {
	console.log(req.body, 'edit?')
	let addWoeid = true;
	if (req.body.edit == false) {
		tempObj.Sites.push({
			Site: req.body.site,
			SiteCities: [req.body.siteCity],
			OtherCities: req.body.otherCities
		})
		tempObj.WOEID.forEach(element => {
			if (element.ID == req.body.woeid) addWoeid = false;
		})
		if (addWoeid == true) tempObj.WOEID.push({
			Name: req.body.siteCity,
			ID: req.body.woeid
		})
		res.send('200')
	} else {
		for (let i = 0; i < tempObj.Sites.length; i++) {
			if (tempObj.Sites[i].Site == req.body.originSite) {
				console.log('match')
				tempObj.Sites.splice(i, 1)
				tempObj.Sites.push({
					"Site": req.body.site,
					"SiteCities": [req.body.siteCity],
					"OtherCities": req.body.otherCities
				})
				// element.Site = req.body.site;
				// element.SiteCities[0] = req.body.siteCity;
				// element.OtherCities = req.body.otherCities;
				tempObj.WOEID.forEach(element => {
					if (element.ID == req.body.woeid) addWoeid = false;
				})
				if (addWoeid == true) tempObj.WOEID.push({
					Name: req.body.siteCity,
					ID: req.body.woeid
				})
				res.send('200')
				return
			}
		}
	}
	// console.log(util.inspect(tempObj.Sites, {showHidden: false, depth: null}))
	})

		app.post('/postwoeid', async (req, res) => {
			console.log(req.body)
var header = {
    "X-Yahoo-App-Id": "your-app-id"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9ME9BYjhuVkxjSVhyJmQ9WVdrOWJIaHFaakZvV2xFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTYx',
    '7d9c9c1bf3181efe2e08579ff0388bb48fb8b2a3',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${req.body.test}&format=json`,
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
			// console.log(data)
			res.send(data)
			return
        }
    }
);
})
		
app.post('/getcity', async (req, res) => {
			console.log(req.body)
var header = {
    "X-Yahoo-App-Id": "your-app-id"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9ME9BYjhuVkxjSVhyJmQ9WVdrOWJIaHFaakZvV2xFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTYx',
    '7d9c9c1bf3181efe2e08579ff0388bb48fb8b2a3',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?woeid=${req.body.woeid}&format=json`,
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
			// console.log(data)
			res.send(data)
			return
        }
    }
);
})




app.post('/getstoredwoeid', async (req, res) => {
	let addWoeid = true;
	tempObj.WOEID.forEach(element => {
		console.log(element)
		if (element.Name == req.body.city[0]) {
			res.send({ID: element.ID})
			addWoeid = false;
			return;
		}
		return;
		})
	})