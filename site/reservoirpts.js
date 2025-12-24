
reservoirs = new Object;

var circ_SHA = L.circle([40.718000, -122.420000], 24074.439573195596, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SHA'
}).addTo(map);

circ_SHA.bindPopup("Lake Shasta");

circ_SHA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SHA'] = {'name': "Lake Shasta",
                         'capacity': '4552000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Shasta"};


var circ_ORO = L.circle([39.540000, -121.493000], 20881.884375099828, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ORO'
}).addTo(map);

circ_ORO.bindPopup("Lake Oroville");

circ_ORO.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ORO'] = {'name': "Lake Oroville",
                         'capacity': '3424753',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Oroville"};


var circ_CLE = L.circle([40.801000, -122.762000], 17653.455105647226, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CLE'
}).addTo(map);

circ_CLE.bindPopup("Trinity Lake");

circ_CLE.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CLE'] = {'name': "Trinity Lake",
                         'capacity': '2447650',
                         'wiki': "https://en.wikipedia.org/wiki/Trinity_Lake"};


var circ_NML = L.circle([37.948100, -120.525000], 17480.774889473265, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'NML'
}).addTo(map);

circ_NML.bindPopup("New Melones Reservoir");

circ_NML.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['NML'] = {'name': "New Melones Reservoir",
                         'capacity': '2400000',
                         'wiki': "https://en.wikipedia.org/wiki/New_Melones_Reservoir"};


var circ_SNL = L.circle([37.033000, -121.133000], 16120.427757365705, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SNL'
}).addTo(map);

circ_SNL.bindPopup("San Luis Reservoir");

circ_SNL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SNL'] = {'name': "San Luis Reservoir",
                         'capacity': '2041000',
                         'wiki': "https://en.wikipedia.org/wiki/San_Luis_Reservoir"};


var circ_DNP = L.circle([37.702000, -120.421000], 16076.928424958482, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DNP'
}).addTo(map);

circ_DNP.bindPopup("New Don Pedro Reservoir");

circ_DNP.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DNP'] = {'name': "New Don Pedro Reservoir",
                         'capacity': '2030000',
                         'wiki': "https://en.wikipedia.org/wiki/New_Don_Pedro_Reservoir"};


var circ_BER = L.circle([38.513000, -122.104000], 14281.910763849952, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BER'
}).addTo(map);

circ_BER.bindPopup("Lake Berryessa");

circ_BER.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BER'] = {'name': "Lake Berryessa",
                         'capacity': '1602000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Berryessa"};


var circ_ALM = L.circle([40.218000, -121.173000], 12905.027409942193, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ALM'
}).addTo(map);

circ_ALM.bindPopup("Lake Almanor");

circ_ALM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ALM'] = {'name': "Lake Almanor",
                         'capacity': '1308000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Almanor"};


var circ_EXC = L.circle([37.585000, -120.270000], 11421.739086214708, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'EXC'
}).addTo(map);

circ_EXC.bindPopup("Lake McClure");

circ_EXC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['EXC'] = {'name': "Lake McClure",
                         'capacity': '1024600',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_McClure"};


var circ_PNF = L.circle([36.833000, -119.325000], 11283.791670955126, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PNF'
}).addTo(map);

circ_PNF.bindPopup("Pine Flat Dam");

circ_PNF.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PNF'] = {'name': "Pine Flat Dam",
                         'capacity': '1000000',
                         'wiki': "https://en.wikipedia.org/wiki/Pine_Flat_Dam"};


var circ_FOL = L.circle([38.683000, -121.183000], 11153.27322002942, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'FOL'
}).addTo(map);

circ_FOL.bindPopup("Folsom Lake");

circ_FOL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['FOL'] = {'name': "Folsom Lake",
                         'capacity': '977000',
                         'wiki': "https://en.wikipedia.org/wiki/Folsom_Lake"};


var circ_BUL = L.circle([39.393000, -121.140000], 11090.308382611222, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BUL'
}).addTo(map);

circ_BUL.bindPopup("New Bullards Bar Reservoir");

circ_BUL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BUL'] = {'name': "New Bullards Bar Reservoir",
                         'capacity': '966000',
                         'wiki': "https://en.wikipedia.org/wiki/New_Bullards_Bar_Reservoir"};


var circ_DMV = L.circle([33.670000, -117.066000], 10155.412503859614, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DMV'
}).addTo(map);

circ_DMV.bindPopup("Diamond Valley Lake");

circ_DMV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DMV'] = {'name': "Diamond Valley Lake",
                         'capacity': '810000',
                         'wiki': "https://en.wikipedia.org/wiki/Diamond_Valley_Lake"};


var circ_THC = L.circle([39.182000, -120.119000], 9654.073475720697, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'THC'
}).addTo(map);

circ_THC.bindPopup("Lake Tahoe");

circ_THC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['THC'] = {'name': "Lake Tahoe",
                         'capacity': '732000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Tahoe"};


var circ_ISB = L.circle([35.646000, -118.473000], 8504.117011245628, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ISB'
}).addTo(map);

circ_ISB.bindPopup("Lake Isabella");

circ_ISB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ISB'] = {'name': "Lake Isabella",
                         'capacity': '568000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Isabella"};


var circ_MIL = L.circle([37.001000, -119.705000], 8140.768901244232, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MIL'
}).addTo(map);

circ_MIL.bindPopup("Millerton Lake");

circ_MIL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MIL'] = {'name': "Millerton Lake",
                         'capacity': '520500',
                         'wiki': "https://en.wikipedia.org/wiki/Millerton_Lake"};


var circ_CMN = L.circle([38.225000, -121.021000], 7287.617435759996, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CMN'
}).addTo(map);

circ_CMN.bindPopup("Camanche Reservoir");

circ_CMN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CMN'] = {'name': "Camanche Reservoir",
                         'capacity': '417120',
                         'wiki': "https://en.wikipedia.org/wiki/Camanche_Reservoir"};


var circ_NCM = L.circle([35.758000, -120.884000], 6981.102352338621, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'NCM'
}).addTo(map);

circ_NCM.bindPopup("Lake Nacimiento");

circ_NCM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['NCM'] = {'name': "Lake Nacimiento",
                         'capacity': '382770',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Nacimiento"};


var circ_WRS = L.circle([38.723000, -123.010000], 6964.942688522979, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'WRS'
}).addTo(map);

circ_WRS.bindPopup("Lake Sonoma");

circ_WRS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['WRS'] = {'name': "Lake Sonoma",
                         'capacity': '381000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Sonoma"};


var circ_HTH = L.circle([37.950000, -119.783000], 6770.275002573076, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HTH'
}).addTo(map);

circ_HTH.bindPopup("Hetch-Hetchy Reservoir");

circ_HTH.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HTH'] = {'name': "Hetch-Hetchy Reservoir",
                         'capacity': '360000',
                         'wiki': "https://en.wikipedia.org/wiki/Hetch-Hetchy_Reservoir"};


var circ_ATN = L.circle([35.798000, -120.883000], 6492.447024658906, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ATN'
}).addTo(map);

circ_ATN.bindPopup("Lake San Antonio");

circ_ATN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ATN'] = {'name': "Lake San Antonio",
                         'capacity': '331060',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_San_Antonio"};


var circ_CAS = L.circle([34.515200, -118.610100], 6432.7509825806865, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CAS'
}).addTo(map);

circ_CAS.bindPopup("Castaic Lake");

circ_CAS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CAS'] = {'name': "Castaic Lake",
                         'capacity': '325000',
                         'wiki': "https://en.wikipedia.org/wiki/Castaic_Lake"};


var circ_NHG = L.circle([38.152000, -120.812000], 6353.085358162965, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'NHG'
}).addTo(map);

circ_NHG.bindPopup("New Hogan Lake");

circ_NHG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['NHG'] = {'name': "New Hogan Lake",
                         'capacity': '317000',
                         'wiki': "https://en.wikipedia.org/wiki/New_Hogan_Lake"};


var circ_PRA = L.circle([33.890000, -117.643000], 6326.978053263147, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PRA'
}).addTo(map);

circ_PRA.bindPopup("Prado Reservoir");

circ_PRA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PRA'] = {'name': "Prado Reservoir",
                         'capacity': '314400',
                         'wiki': "https://en.wikipedia.org/wiki/Prado_Reservoir"};


var circ_CLA = L.circle([38.957000, -122.642000], 6312.875553201615, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CLA'
}).addTo(map);

circ_CLA.bindPopup("Clear Lake");

circ_CLA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CLA'] = {'name': "Clear Lake",
                         'capacity': '313000',
                         'wiki': "https://en.wikipedia.org/wiki/Clear_Lake"};


var circ_INV = L.circle([39.083000, -122.533000], 6180.387232371033, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'INV'
}).addTo(map);

circ_INV.bindPopup("Indian Valley Reservoir");

circ_INV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['INV'] = {'name': "Indian Valley Reservoir",
                         'capacity': '300000',
                         'wiki': "https://en.wikipedia.org/wiki/Indian_Valley_Reservoir"};


var circ_CHV = L.circle([37.967000, -119.917000], 5901.110196268724, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CHV'
}).addTo(map);

circ_CHV.bindPopup("Cherry Lake");

circ_CHV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CHV'] = {'name': "Cherry Lake",
                         'capacity': '273500',
                         'wiki': "https://en.wikipedia.org/wiki/Cherry_Lake"};


var circ_UNV = L.circle([38.864000, -120.438000], 5823.671902602005, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'UNV'
}).addTo(map);

circ_UNV.bindPopup("Union Valley Reservoir");

circ_UNV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['UNV'] = {'name': "Union Valley Reservoir",
                         'capacity': '266369',
                         'wiki': "https://en.wikipedia.org/wiki/Union_Valley_Reservoir"};


var circ_SVT = L.circle([32.912000, -116.924000], 5634.646984470905, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SVT'
}).addTo(map);

circ_SVT.bindPopup("San Vicente Reservoir");

circ_SVT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SVT'] = {'name': "San Vicente Reservoir",
                         'capacity': '249358',
                         'wiki': "https://en.wikipedia.org/wiki/San_Vicente_Reservoir"};


var circ_WHI = L.circle([40.598000, -122.537000], 5540.560027972332, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'WHI'
}).addTo(map);

circ_WHI.bindPopup("Whiskeytown Lake");

circ_WHI.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['WHI'] = {'name': "Whiskeytown Lake",
                         'capacity': '241100',
                         'wiki': "https://en.wikipedia.org/wiki/Whiskeytown_Lake"};


var circ_TWT = L.circle([34.983000, -120.317000], 5527.906391541368, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TWT'
}).addTo(map);

circ_TWT.bindPopup("Twitchell Reservoir");

circ_TWT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TWT'] = {'name': "Twitchell Reservoir",
                         'capacity': '240000',
                         'wiki': "https://en.wikipedia.org/wiki/Twitchell_Reservoir"};


var circ_CSI = L.circle([34.373000, -119.332000], 5504.825261958536, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CSI'
}).addTo(map);

circ_CSI.bindPopup("Lake Casitas");

circ_CSI.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CSI'] = {'name': "Lake Casitas",
                         'capacity': '238000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Casitas"};


var circ_STP = L.circle([39.471000, -120.103000], 5370.183952924837, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'STP'
}).addTo(map);

circ_STP.bindPopup("Stampede Lake");

circ_STP.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['STP'] = {'name': "Stampede Lake",
                         'capacity': '226500',
                         'wiki': "https://en.wikipedia.org/wiki/Stampede_Lake"};


var circ_HHL = L.circle([39.058000, -120.407000], 5141.250134811764, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HHL'
}).addTo(map);

circ_HHL.bindPopup("Hell Hole Reservoir");

circ_HHL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HHL'] = {'name': "Hell Hole Reservoir",
                         'capacity': '207600',
                         'wiki': "https://en.wikipedia.org/wiki/Hell_Hole_Reservoir"};


var circ_PAR = L.circle([38.250000, -120.850000], 5093.916499308783, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PAR'
}).addTo(map);

circ_PAR.bindPopup("Pardee Reservoir");

circ_PAR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PAR'] = {'name': "Pardee Reservoir",
                         'capacity': '203795',
                         'wiki': "https://en.wikipedia.org/wiki/Pardee_Reservoir"};


var circ_CCH = L.circle([34.583000, -119.980000], 4961.084258456317, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CCH'
}).addTo(map);

circ_CCH.bindPopup("Cachuma Lake");

circ_CCH.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CCH'] = {'name': "Cachuma Lake",
                         'capacity': '193305',
                         'wiki': "https://en.wikipedia.org/wiki/Cachuma_Lake"};


var circ_SPM = L.circle([38.393333, -119.996900], 4905.530286879755, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SPM'
}).addTo(map);

circ_SPM.bindPopup("New Spicer Meadow Reservoir");

circ_SPM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SPM'] = {'name': "New Spicer Meadow Reservoir",
                         'capacity': '189000',
                         'wiki': "https://en.wikipedia.org/wiki/New_Spicer_Meadow_Reservoir"};


var circ_TRM = L.circle([36.415000, -119.002000], 4861.206223797199, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TRM'
}).addTo(map);

circ_TRM.bindPopup("Lake Kaweah");

circ_TRM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TRM'] = {'name': "Lake Kaweah",
                         'capacity': '185600',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Kaweah"};


var circ_CRW = L.circle([37.604000, -118.707000], 4833.165557632354, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CRW'
}).addTo(map);

circ_CRW.bindPopup("Lake Crowley");

circ_CRW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CRW'] = {'name': "Lake Crowley",
                         'capacity': '183465',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Crowley"};


var circ_PYM = L.circle([34.644153, -118.764528], 4787.307364817192, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PYM'
}).addTo(map);

circ_PYM.bindPopup("Pyramid Lake");

circ_PYM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PYM'] = {'name': "Pyramid Lake",
                         'capacity': '180000',
                         'wiki': "https://en.wikipedia.org/wiki/Pyramid_Lake"};


var circ_MHW = L.circle([33.833000, -117.460000], 4777.989643888051, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MHW'
}).addTo(map);

circ_MHW.bindPopup("Lake Matthews");

circ_MHW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MHW'] = {'name': "Lake Matthews",
                         'capacity': '179300',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Matthews"};


var circ_BUC = L.circle([37.213000, -119.970000], 4370.193722368316, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BUC'
}).addTo(map);

circ_BUC.bindPopup("Eastman Lake");

circ_BUC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BUC'] = {'name': "Eastman Lake",
                         'capacity': '150000',
                         'wiki': "https://en.wikipedia.org/wiki/Eastman_Lake"};


var circ_BLB = L.circle([39.808000, -122.329000], 4277.435242974963, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BLB'
}).addTo(map);

circ_BLB.bindPopup("Black Butte Lake");

circ_BLB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BLB'] = {'name': "Black Butte Lake",
                         'capacity': '143700',
                         'wiki': "https://en.wikipedia.org/wiki/Black_Butte_Lake"};


var circ_SLS = L.circle([38.497000, -120.216000], 4250.561038238595, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SLS'
}).addTo(map);

circ_SLS.bindPopup("Salt Springs Reservoir");

circ_SLS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SLS'] = {'name': "Salt Springs Reservoir",
                         'capacity': '141900',
                         'wiki': "https://en.wikipedia.org/wiki/Salt_Springs_Reservoir"};


var circ_FMD = L.circle([39.112000, -120.468000], 4167.371760496971, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'FMD'
}).addTo(map);

circ_FMD.bindPopup("French Meadows Reservoir");

circ_FMD.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['FMD'] = {'name': "French Meadows Reservoir",
                         'capacity': '136400',
                         'wiki': "https://en.wikipedia.org/wiki/French_Meadows_Reservoir"};


var circ_SHV = L.circle([37.145000, -119.302000], 4150.27306728614, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SHV'
}).addTo(map);

circ_SHV.bindPopup("Shaver Lake");

circ_SHV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SHV'] = {'name': "Shaver Lake",
                         'capacity': '135283',
                         'wiki': "https://en.wikipedia.org/wiki/Shaver_Lake"};


var circ_PRR = L.circle([33.858000, -117.183000], 4091.086464920127, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PRR'
}).addTo(map);

circ_PRR.bindPopup("Lake Perris");

circ_PRR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PRR'] = {'name': "Lake Perris",
                         'capacity': '131452',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Perris"};


var circ_WSN = L.circle([37.005000, -118.969000], 4041.7401399585474, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'WSN'
}).addTo(map);

circ_WSN.bindPopup("Lake Wishon");

circ_WSN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['WSN'] = {'name': "Lake Wishon",
                         'capacity': '128300',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Wishon"};


var circ_TAE = L.circle([37.370000, -118.987000], 3989.422804014327, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TAE'
}).addTo(map);

circ_TAE.bindPopup("Thomas A. Edison");

circ_TAE.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TAE'] = {'name': "Thomas A. Edison",
                         'capacity': '125000',
                         'wiki': "https://en.wikipedia.org/wiki/Thomas_A._Edison"};


var circ_CTG = L.circle([37.072000, -118.967000], 3962.2018609082193, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CTG'
}).addTo(map);

circ_CTG.bindPopup("Helms Creek");

circ_CTG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CTG'] = {'name': "Helms Creek",
                         'capacity': '123300',
                         'wiki': "https://en.wikipedia.org/wiki/Helms_Creek"};


var circ_MPL = L.circle([37.329000, -119.328000], 3957.378728431549, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MPL'
}).addTo(map);

circ_MPL.bindPopup("Mammoth Pool Reservoir");

circ_MPL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MPL'] = {'name': "Mammoth Pool Reservoir",
                         'capacity': '123000',
                         'wiki': "https://en.wikipedia.org/wiki/Mammoth_Pool_Reservoir"};


var circ_COY = L.circle([39.197000, -123.186000], 3947.7147854877244, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'COY'
}).addTo(map);

circ_COY.bindPopup("Lake Mendocino");

circ_COY.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['COY'] = {'name': "Lake Mendocino",
                         'capacity': '122400',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Mendocino"};


var circ_ELC = L.circle([32.882000, -116.808000], 3789.8592760541846, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ELC'
}).addTo(map);

circ_ELC.bindPopup("El Capitan Reservoir");

circ_ELC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ELC'] = {'name': "El Capitan Reservoir",
                         'capacity': '112807',
                         'wiki': "https://en.wikipedia.org/wiki/El_Capitan_Reservoir"};


var circ_CFW = L.circle([39.049858, -121.315941], 3647.6503728403645, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CFW'
}).addTo(map);

circ_CFW.bindPopup("Camp Far West");

circ_CFW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CFW'] = {'name': "Camp Far West",
                         'capacity': '104500',
                         'wiki': "https://en.wikipedia.org/wiki/Camp_Far_West"};


var circ_BCL = L.circle([39.897000, -121.202000], 3621.3764387000942, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BCL'
}).addTo(map);

circ_BCL.bindPopup("Bucks Lake");

circ_BCL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BCL'] = {'name': "Bucks Lake",
                         'capacity': '103000',
                         'wiki': "https://en.wikipedia.org/wiki/Bucks_Lake"};


var circ_CVE = L.circle([37.492000, -121.818000], 3568.248232305542, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CVE'
}).addTo(map);

circ_CVE.bindPopup("Calaveras Reservoir");

circ_CVE.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CVE'] = {'name': "Calaveras Reservoir",
                         'capacity': '100000',
                         'wiki': "https://en.wikipedia.org/wiki/Calaveras_Reservoir"};


var circ_BRD = L.circle([38.203000, -120.075000], 3528.779214899948, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BRD'
}).addTo(map);

circ_BRD.bindPopup("Beardsley Lake");

circ_BRD.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BRD'] = {'name': "Beardsley Lake",
                         'capacity': '97800',
                         'wiki': "https://en.wikipedia.org/wiki/Beardsley_Lake"};


var circ_LGV = L.circle([39.724000, -121.019000], 3441.2789781681095, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LGV'
}).addTo(map);

circ_LGV.bindPopup("Little Grass Valley Reservoir");

circ_LGV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LGV'] = {'name': "Little Grass Valley Reservoir",
                         'capacity': '93010',
                         'wiki': "https://en.wikipedia.org/wiki/Little_Grass_Valley_Reservoir"};


var circ_HID = L.circle([37.109559, -119.885255], 3385.137501286538, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HID'
}).addTo(map);

circ_HID.bindPopup("Hensley Lake");

circ_HID.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HID'] = {'name': "Hensley Lake",
                         'capacity': '90000',
                         'wiki': "https://en.wikipedia.org/wiki/Hensley_Lake"};


var circ_HNT = L.circle([37.227570, -119.220482], 3381.374145480172, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HNT'
}).addTo(map);

circ_HNT.bindPopup("Huntington Lake");

circ_HNT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HNT'] = {'name': "Huntington Lake",
                         'capacity': '89800',
                         'wiki': "https://en.wikipedia.org/wiki/Huntington_Lake"};


var circ_LRA = L.circle([37.165000, -121.632000], 3371.531997102591, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LRA'
}).addTo(map);

circ_LRA.bindPopup("Anderson Reservoir");

circ_LRA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LRA'] = {'name': "Anderson Reservoir",
                         'capacity': '89278',
                         'wiki': "https://en.wikipedia.org/wiki/Anderson_Reservoir"};


var circ_PRU = L.circle([34.461000, -118.751000], 3255.6036715474734, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PRU'
}).addTo(map);

circ_PRU.bindPopup("Lake Piru");

circ_PRU.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PRU'] = {'name': "Lake Piru",
                         'capacity': '83244',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Piru"};


var circ_DAV = L.circle([39.883000, -120.467000], 3250.8288514318697, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DAV'
}).addTo(map);

circ_DAV.bindPopup("Lake Davis");

circ_DAV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DAV'] = {'name': "Lake Davis",
                         'capacity': '83000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Davis"};


var circ_SCC = L.circle([36.056667, -118.924167], 3237.0915113988344, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SCC'
}).addTo(map);

circ_SCC.bindPopup("Lake Success");

circ_SCC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SCC'] = {'name': "Lake Success",
                         'capacity': '82300',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Success"};


var circ_LPY = L.circle([39.408300, -122.958300], 3201.4962650482757, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LPY'
}).addTo(map);

circ_LPY.bindPopup("Lake Pillsbury");

circ_LPY.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LPY'] = {'name': "Lake Pillsbury",
                         'capacity': '80500',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Pillsbury"};


var circ_SCD = L.circle([39.408300, -122.958600], 3201.4962650482757, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SCD'
}).addTo(map);

circ_SCD.bindPopup("Lake Pillsbury");

circ_SCD.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SCD'] = {'name': "Lake Pillsbury",
                         'capacity': '80500',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Pillsbury"};


var circ_SLW = L.circle([34.304000, -117.318000], 3151.39150994196, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SLW'
}).addTo(map);

circ_SLW.bindPopup("Lake Silverwood");

circ_SLW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SLW'] = {'name': "Lake Silverwood",
                         'capacity': '78000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Silverwood"};


var circ_DLV = L.circle([37.614000, -121.745000], 3133.157654812171, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DLV'
}).addTo(map);

circ_DLV.bindPopup("Lake Del Valle");

circ_DLV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DLV'] = {'name': "Lake Del Valle",
                         'capacity': '77100',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Del_Valle"};


var circ_SPG = L.circle([39.329000, -120.641000], 3085.5135792681635, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SPG'
}).addTo(map);

circ_SPG.bindPopup("Spaulding Lake");

circ_SPG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SPG'] = {'name': "Spaulding Lake",
                         'capacity': '74773',
                         'wiki': "https://en.wikipedia.org/wiki/Spaulding_Lake"};


var circ_ENG = L.circle([39.239000, -121.267000], 2985.410660720923, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ENG'
}).addTo(map);

circ_ENG.bindPopup("Englebright Lake");

circ_ENG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ENG'] = {'name': "Englebright Lake",
                         'capacity': '70000',
                         'wiki': "https://en.wikipedia.org/wiki/Englebright_Lake"};


var circ_LON = L.circle([38.983000, -120.323000], 2970.574689978611, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LON'
}).addTo(map);

circ_LON.bindPopup("Loon Lake");

circ_LON.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LON'] = {'name': "Loon Lake",
                         'capacity': '69306',
                         'wiki': "https://en.wikipedia.org/wiki/Loon_Lake"};


var circ_JCK = L.circle([39.509000, -120.552000], 2968.4093837170935, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'JCK'
}).addTo(map);

circ_JCK.bindPopup("Jackson Meadows Res");

circ_JCK.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['JCK'] = {'name': "Jackson Meadows Res",
                         'capacity': '69205',
                         'wiki': "https://en.wikipedia.org/wiki/Jackson_Meadows_Res"};


var circ_CRY = L.circle([37.515278, -122.355833], 2961.108597268715, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CRY'
}).addTo(map);

circ_CRY.bindPopup("Crystal Springs Reservoir");

circ_CRY.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CRY'] = {'name': "Crystal Springs Reservoir",
                         'capacity': '68865',
                         'wiki': "https://en.wikipedia.org/wiki/Crystal_Springs_Reservoir"};


var circ_BWN = L.circle([39.450000, -120.652000], 2953.4664584146876, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BWN'
}).addTo(map);

circ_BWN.bindPopup("Bowman Lake");

circ_BWN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BWN'] = {'name': "Bowman Lake",
                         'capacity': '68510',
                         'wiki': "https://en.wikipedia.org/wiki/Bowman_Lake"};


var circ_BIO = L.circle([37.915100, -122.207000], 2932.04935259484, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BIO'
}).addTo(map);

circ_BIO.bindPopup("Briones Lake");

circ_BIO.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BIO'] = {'name': "Briones Lake",
                         'capacity': '67520',
                         'wiki': "https://en.wikipedia.org/wiki/Briones_Lake"};


var circ_TUL = L.circle([37.875000, -120.603000], 2920.737055903114, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TUL'
}).addTo(map);

circ_TUL.bindPopup("Tulloch Reservoir");

circ_TUL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TUL'] = {'name': "Tulloch Reservoir",
                         'capacity': '67000',
                         'wiki': "https://en.wikipedia.org/wiki/Tulloch_Reservoir"};


var circ_RLL = L.circle([39.135000, -120.948000], 2898.8585676524604, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'RLL'
}).addTo(map);

circ_RLL.bindPopup("Rollins Reservoir");

circ_RLL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['RLL'] = {'name': "Rollins Reservoir",
                         'capacity': '66000',
                         'wiki': "https://en.wikipedia.org/wiki/Rollins_Reservoir"};


var circ_SLC = L.circle([39.584000, -121.116000], 2877.919949981624, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SLC'
}).addTo(map);

circ_SLC.bindPopup("Sly Creek Reservoir");

circ_SLC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SLC'] = {'name': "Sly Creek Reservoir",
                         'capacity': '65050',
                         'wiki': "https://en.wikipedia.org/wiki/Sly_Creek_Reservoir"};


var circ_FLR = L.circle([37.267000, -118.967000], 2863.6387013415797, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'FLR'
}).addTo(map);

circ_FLR.bindPopup("Florence Lake");

circ_FLR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['FLR'] = {'name': "Florence Lake",
                         'capacity': '64406',
                         'wiki': "https://en.wikipedia.org/wiki/Florence_Lake"};


var circ_DON = L.circle([38.329000, -119.960000], 2861.726183920566, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DON'
}).addTo(map);

circ_DON.bindPopup("Donnells Reservoir");

circ_DON.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DON'] = {'name': "Donnells Reservoir",
                         'capacity': '64320',
                         'wiki': "https://en.wikipedia.org/wiki/Donnells_Reservoir"};


var circ_RTD = L.circle([40.367000, -123.433000], 2786.8909599918857, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'RTD'
}).addTo(map);

circ_RTD.bindPopup("Ruth Lake");

circ_RTD.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['RTD'] = {'name': "Ruth Lake",
                         'capacity': '61000',
                         'wiki': "https://en.wikipedia.org/wiki/Ruth_Lake"};


var circ_TAB = L.circle([39.450000, -121.633000], 2694.9370469686005, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TAB'
}).addTo(map);

circ_TAB.bindPopup("Thermalito Afterbay");

circ_TAB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TAB'] = {'name': "Thermalito Afterbay",
                         'capacity': '57041',
                         'wiki': "https://en.wikipedia.org/wiki/Thermalito_Afterbay"};


var circ_ONF = L.circle([37.067000, -121.067000], 2679.752046795807, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ONF'
}).addTo(map);

circ_ONF.bindPopup("O'Neill Forebay");

circ_ONF.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ONF'] = {'name': "O'Neill Forebay",
                         'capacity': '56400',
                         'wiki': "https://en.wikipedia.org/wiki/O'Neill_Forebay"};


var circ_FRD = L.circle([39.883000, -120.183000], 2657.734189554565, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'FRD'
}).addTo(map);

circ_FRD.bindPopup("Frenchman Lake");

circ_FRD.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['FRD'] = {'name': "Frenchman Lake",
                         'capacity': '55477',
                         'wiki': "https://en.wikipedia.org/wiki/Frenchman_Lake"};


var circ_FRM = L.circle([37.915000, -120.935000], 2573.100393032275, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'FRM'
}).addTo(map);

circ_FRM.bindPopup("Farmington Lake");

circ_FRM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['FRM'] = {'name': "Farmington Lake",
                         'capacity': '52000',
                         'wiki': "https://en.wikipedia.org/wiki/Farmington_Lake"};


var circ_EPK = L.circle([39.367000, -122.517000], 2548.238936628457, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'EPK'
}).addTo(map);

circ_EPK.bindPopup("East Park Reservoir");

circ_EPK.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['EPK'] = {'name': "East Park Reservoir",
                         'capacity': '51000',
                         'wiki': "https://en.wikipedia.org/wiki/East_Park_Reservoir"};


var circ_VIL = L.circle([33.496000, -116.976000], 2548.238936628457, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'VIL'
}).addTo(map);

circ_VIL.bindPopup("Vail Reservoir");

circ_VIL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['VIL'] = {'name': "Vail Reservoir",
                         'capacity': '51000',
                         'wiki': "https://en.wikipedia.org/wiki/Vail_Reservoir"};


var circ_MOR = L.circle([32.683000, -116.550000], 2540.582718212582, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MOR'
}).addTo(map);

circ_MOR.bindPopup("Morena Lake");

circ_MOR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MOR'] = {'name': "Morena Lake",
                         'capacity': '50694',
                         'wiki': "https://en.wikipedia.org/wiki/Morena_Lake"};


var circ_SAT = L.circle([37.573000, -121.848000], 2535.7168021907673, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SAT'
}).addTo(map);

circ_SAT.bindPopup("San Antonio Reservoir");

circ_SAT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SAT'] = {'name': "San Antonio Reservoir",
                         'capacity': '50500',
                         'wiki': "https://en.wikipedia.org/wiki/San_Antonio_Reservoir"};


var circ_DRE = L.circle([41.540894, -122.374550], 2523.13252202016, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DRE'
}).addTo(map);

circ_DRE.bindPopup("Lake Shastina");

circ_DRE.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DRE'] = {'name': "Lake Shastina",
                         'capacity': '50000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Shastina"};


var circ_STG = L.circle([39.583000, -122.533000], 2523.13252202016, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'STG'
}).addTo(map);

circ_STG.bindPopup("Stony Gorge Reservoir");

circ_STG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['STG'] = {'name': "Stony Gorge Reservoir",
                         'capacity': '50000',
                         'wiki': "https://en.wikipedia.org/wiki/Stony_Gorge_Reservoir"};


var circ_BTV = L.circle([40.148020, -121.174174], 2521.365710654182, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BTV'
}).addTo(map);

circ_BTV.bindPopup("Butt Valley Reservoir");

circ_BTV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BTV'] = {'name': "Butt Valley Reservoir",
                         'capacity': '49930',
                         'wiki': "https://en.wikipedia.org/wiki/Butt_Valley_Reservoir"};


var circ_LOT = L.circle([32.609000, -116.927000], 2519.3197110629512, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LOT'
}).addTo(map);

circ_LOT.bindPopup("Lower Otay");

circ_LOT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LOT'] = {'name': "Lower Otay",
                         'capacity': '49849',
                         'wiki': "https://en.wikipedia.org/wiki/Lower_Otay"};


var circ_LOP = L.circle([35.188000, -120.487000], 2507.6434083693043, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LOP'
}).addTo(map);

circ_LOP.bindPopup("Lopez Lake");

circ_LOP.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LOP'] = {'name': "Lopez Lake",
                         'capacity': '49388',
                         'wiki': "https://en.wikipedia.org/wiki/Lopez_Lake"};


var circ_SFL = L.circle([39.274000, -120.917000], 2497.7737626138796, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SFL'
}).addTo(map);

circ_SFL.bindPopup("Scotts Flat Reservoir");

circ_SFL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SFL'] = {'name': "Scotts Flat Reservoir",
                         'capacity': '49000',
                         'wiki': "https://en.wikipedia.org/wiki/Scotts_Flat_Reservoir"};


var circ_LKF = L.circle([39.378890, -120.494440], 2495.2237121658945, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LKF'
}).addTo(map);

circ_LKF.bindPopup("Lake Fordyce");

circ_LKF.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LKF'] = {'name': "Lake Fordyce",
                         'capacity': '48900',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Fordyce"};


var circ_LWB = L.circle([38.538000, -120.257000], 2491.3937425834397, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LWB'
}).addTo(map);

circ_LWB.bindPopup("Lower Bear Reservoir");

circ_LWB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LWB'] = {'name': "Lower Bear Reservoir",
                         'capacity': '48750',
                         'wiki': "https://en.wikipedia.org/wiki/Lower_Bear_Reservoir"};


var circ_GNT = L.circle([37.862000, -119.102000], 2459.892464388202, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'GNT'
}).addTo(map);

circ_GNT.bindPopup("Grant Lake");

circ_GNT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['GNT'] = {'name': "Grant Lake",
                         'capacity': '47525',
                         'wiki': "https://en.wikipedia.org/wiki/Grant_Lake"};


var circ_HWE = L.circle([36.137000, -117.948000], 2435.835848013133, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HWE'
}).addTo(map);

circ_HWE.bindPopup("Haiwee Reservoir");

circ_HWE.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HWE'] = {'name': "Haiwee Reservoir",
                         'capacity': '46600',
                         'wiki': "https://en.wikipedia.org/wiki/Haiwee_Reservoir"};


var circ_TLC = L.circle([37.600000, -120.583000], 2409.5585330081403, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TLC'
}).addTo(map);

circ_TLC.bindPopup("Turlock Lake");

circ_TLC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TLC'] = {'name': "Turlock Lake",
                         'capacity': '45600',
                         'wiki': "https://en.wikipedia.org/wiki/Turlock_Lake"};


var circ_CNV = L.circle([37.283000, -119.517000], 2404.533379398667, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CNV'
}).addTo(map);

circ_CNV.bindPopup("Crane Valley Lake");

circ_CNV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CNV'] = {'name': "Crane Valley Lake",
                         'capacity': '45410',
                         'wiki': "https://en.wikipedia.org/wiki/Crane_Valley_Lake"};


var circ_SGB = L.circle([34.207000, -117.858000], 2378.713210288929, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SGB'
}).addTo(map);

circ_SGB.bindPopup("San Gabriel Reservoir");

circ_SGB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SGB'] = {'name': "San Gabriel Reservoir",
                         'capacity': '44440',
                         'wiki': "https://en.wikipedia.org/wiki/San_Gabriel_Reservoir"};


var circ_BDP = L.circle([38.325000, -119.211000], 2369.5962509005763, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BDP'
}).addTo(map);

circ_BDP.bindPopup("Bridgeport Reservoir");

circ_BDP.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BDP'] = {'name': "Bridgeport Reservoir",
                         'capacity': '44100',
                         'wiki': "https://en.wikipedia.org/wiki/Bridgeport_Reservoir"};


var circ_SKN = L.circle([33.583000, -117.072000], 2361.5226456547084, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SKN'
}).addTo(map);

circ_SKN.bindPopup("Skinner Lake");

circ_SKN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SKN'] = {'name': "Skinner Lake",
                         'capacity': '43800',
                         'wiki': "https://en.wikipedia.org/wiki/Skinner_Lake"};


var circ_ICH = L.circle([38.824000, -120.359000], 2353.3131376380966, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ICH'
}).addTo(map);

circ_ICH.bindPopup("Ice House Reservoir");

circ_ICH.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ICH'] = {'name': "Ice House Reservoir",
                         'capacity': '43496',
                         'wiki': "https://en.wikipedia.org/wiki/Ice_House_Reservoir"};


var circ_SPB = L.circle([37.942300, -122.258700], 2345.1020373481806, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SPB'
}).addTo(map);

circ_SPB.bindPopup("San Pablo Reservoir");

circ_SPB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SPB'] = {'name': "San Pablo Reservoir",
                         'capacity': '43193',
                         'wiki': "https://en.wikipedia.org/wiki/San_Pablo_Reservoir"};


var circ_BOC = L.circle([39.388000, -120.095000], 2281.1685644275854, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BOC'
}).addTo(map);

circ_BOC.bindPopup("Boca Reservoir");

circ_BOC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BOC'] = {'name': "Boca Reservoir",
                         'capacity': '40870',
                         'wiki': "https://en.wikipedia.org/wiki/Boca_Reservoir"};


var circ_BIT = L.circle([41.022000, -121.676000], 2274.180958216437, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BIT'
}).addTo(map);

circ_BIT.bindPopup("Lake Britton");

circ_BIT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BIT'] = {'name': "Lake Britton",
                         'capacity': '40620',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Britton"};


var circ_USL = L.circle([37.764400, -122.101600], 2198.4579395145765, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'USL'
}).addTo(map);

circ_USL.bindPopup("Upper San Leandro Reservoir");

circ_USL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['USL'] = {'name': "Upper San Leandro Reservoir",
                         'capacity': '37960',
                         'wiki': "https://en.wikipedia.org/wiki/Upper_San_Leandro_Reservoir"};


var circ_MCO = L.circle([41.135000, -122.074000], 2120.0319792199184, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MCO'
}).addTo(map);

circ_MCO.bindPopup("McCloud Reservoir");

circ_MCO.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MCO'] = {'name': "McCloud Reservoir",
                         'capacity': '35300',
                         'wiki': "https://en.wikipedia.org/wiki/McCloud_Reservoir"};


var circ_RDN = L.circle([37.145000, -119.449000], 2111.0041228223763, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'RDN'
}).addTo(map);

circ_RDN.bindPopup("Redinger Lake");

circ_RDN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['RDN'] = {'name': "Redinger Lake",
                         'capacity': '35000',
                         'wiki': "https://en.wikipedia.org/wiki/Redinger_Lake"};


var circ_BRT = L.circle([32.678000, -116.669000], 2105.115254671519, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BRT'
}).addTo(map);

circ_BRT.bindPopup("Barrett Lake");

circ_BRT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BRT'] = {'name': "Barrett Lake",
                         'capacity': '34805',
                         'wiki': "https://en.wikipedia.org/wiki/Barrett_Lake"};


var circ_PT7 = L.circle([40.849400, -121.990650], 2099.2098666708857, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PT7'
}).addTo(map);

circ_PT7.bindPopup("Pit 7 Reservoir");

circ_PT7.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PT7'] = {'name': "Pit 7 Reservoir",
                         'capacity': '34610',
                         'wiki': "https://en.wikipedia.org/wiki/Pit_7_Reservoir"};


var circ_LBS = L.circle([36.994000, -120.930000], 2098.906578384008, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LBS'
}).addTo(map);

circ_LBS.bindPopup("Los Banos Reservoir");

circ_LBS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LBS'] = {'name': "Los Banos Reservoir",
                         'capacity': '34600',
                         'wiki': "https://en.wikipedia.org/wiki/Los_Banos_Reservoir"};


var circ_KNT = L.circle([37.997000, -122.702000], 2046.6944330257718, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'KNT'
}).addTo(map);

circ_KNT.bindPopup("Kent Lake");

circ_KNT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['KNT'] = {'name': "Kent Lake",
                         'capacity': '32900',
                         'wiki': "https://en.wikipedia.org/wiki/Kent_Lake"};


var circ_HNN = L.circle([38.482000, -122.372000], 1986.716534556202, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HNN'
}).addTo(map);

circ_HNN.bindPopup("Lake Hennessey");

circ_HNN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HNN'] = {'name': "Lake Hennessey",
                         'capacity': '31000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Hennessey"};


var circ_HDG = L.circle([33.046000, -117.128000], 1962.5689661202587, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'HDG'
}).addTo(map);

circ_HDG.bindPopup("Lake Hodges");

circ_HDG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['HDG'] = {'name': "Lake Hodges",
                         'capacity': '30251',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Hodges"};


var circ_PRS = L.circle([39.379400, -120.136700], 1947.8844532750873, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PRS'
}).addTo(map);

circ_PRS.bindPopup("Prosser Reservoir");

circ_PRS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PRS'] = {'name': "Prosser Reservoir",
                         'capacity': '29800',
                         'wiki': "https://en.wikipedia.org/wiki/Prosser_Reservoir"};


var circ_STD = L.circle([33.118000, -116.787000], 1938.3176335689973, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'STD'
}).addTo(map);

circ_STD.bindPopup("Sutherland Lake");

circ_STD.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['STD'] = {'name': "Sutherland Lake",
                         'capacity': '29508',
                         'wiki': "https://en.wikipedia.org/wiki/Sutherland_Lake"};


var circ_CLC = L.circle([37.829800, -121.557400], 1921.560480373171, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CLC'
}).addTo(map);

circ_CLC.bindPopup("Clifton Court Forebay");

circ_CLC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CLC'] = {'name': "Clifton Court Forebay",
                         'capacity': '29000',
                         'wiki': "https://en.wikipedia.org/wiki/Clifton_Court_Forebay"};


var circ_ENR = L.circle([37.974000, -119.880000], 1908.262324195121, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ENR'
}).addTo(map);

circ_ENR.bindPopup("Lake Eleanor");

circ_ENR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ENR'] = {'name': "Lake Eleanor",
                         'capacity': '28600',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Eleanor"};


var circ_MMW = L.circle([40.283000, -121.017000], 1776.9732893161909, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MMW'
}).addTo(map);

circ_MMW.bindPopup("Mountain Meadows");

circ_MMW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MMW'] = {'name': "Mountain Meadows",
                         'capacity': '24800',
                         'wiki': "https://en.wikipedia.org/wiki/Mountain_Meadows"};


var circ_IRC = L.circle([41.045000, -121.981000], 1758.9690428505119, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'IRC'
}).addTo(map);

circ_IRC.bindPopup("Iron Canyon Reservoir");

circ_IRC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['IRC'] = {'name': "Iron Canyon Reservoir",
                         'capacity': '24300',
                         'wiki': "https://en.wikipedia.org/wiki/Iron_Canyon_Reservoir"};


var circ_OLH = L.circle([33.074044, -117.138333], 1748.0774889473266, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'OLH'
}).addTo(map);

circ_OLH.bindPopup("Olivenhain Reservoir");

circ_OLH.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['OLH'] = {'name': "Olivenhain Reservoir",
                         'capacity': '24000',
                         'wiki': "https://en.wikipedia.org/wiki/Olivenhain_Reservoir"};


var circ_KES = L.circle([40.612104, -122.445699], 1739.7543061433785, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'KES'
}).addTo(map);

circ_KES.bindPopup("Keswick Reservoir");

circ_KES.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['KES'] = {'name': "Keswick Reservoir",
                         'capacity': '23772',
                         'wiki': "https://en.wikipedia.org/wiki/Keswick_Reservoir"};


var circ_ANT = L.circle([40.180000, -120.607000], 1695.049367024267, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'ANT'
}).addTo(map);

circ_ANT.bindPopup("Antelope");

circ_ANT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['ANT'] = {'name': "Antelope",
                         'capacity': '22566',
                         'wiki': "https://en.wikipedia.org/wiki/Antelope"};


var circ_CYC = L.circle([37.118000, -121.549000], 1694.1101669571347, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CYC'
}).addTo(map);

circ_CYC.bindPopup("Coyote Reservoir");

circ_CYC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CYC'] = {'name': "Coyote Reservoir",
                         'capacity': '22541',
                         'wiki': "https://en.wikipedia.org/wiki/Coyote_Reservoir"};


var circ_NCA = L.circle([38.075000, -122.757000], 1688.803298257901, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'NCA'
}).addTo(map);

circ_NCA.bindPopup("Nicasio Reservoir");

circ_NCA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['NCA'] = {'name': "Nicasio Reservoir",
                         'capacity': '22400',
                         'wiki': "https://en.wikipedia.org/wiki/Nicasio_Reservoir"};


var circ_CPL = L.circle([38.707000, -120.048000], 1686.5399915028263, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CPL'
}).addTo(map);

circ_CPL.bindPopup("Caples Lake");

circ_CPL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CPL'] = {'name': "Caples Lake",
                         'capacity': '22340',
                         'wiki': "https://en.wikipedia.org/wiki/Caples_Lake"};


var circ_MRT = L.circle([39.327000, -120.113000], 1611.6478124142793, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MRT'
}).addTo(map);

circ_MRT.bindPopup("Martis Creek Reservoir");

circ_MRT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MRT'] = {'name': "Martis Creek Reservoir",
                         'capacity': '20400',
                         'wiki': "https://en.wikipedia.org/wiki/Martis_Creek_Reservoir"};


var circ_EDN = L.circle([38.903000, -120.603000], 1595.7691216057308, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'EDN'
}).addTo(map);

circ_EDN.bindPopup("Stumpy Meadows Lake");

circ_EDN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['EDN'] = {'name': "Stumpy Meadows Lake",
                         'capacity': '20000',
                         'wiki': "https://en.wikipedia.org/wiki/Stumpy_Meadows_Lake"};


var circ_SNN = L.circle([37.580161, -122.413281], 1556.4680792639451, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SNN'
}).addTo(map);

circ_SNN.bindPopup("San Andreas Lake");

circ_SNN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SNN'] = {'name': "San Andreas Lake",
                         'capacity': '19027',
                         'wiki': "https://en.wikipedia.org/wiki/San_Andreas_Lake"};


var circ_LNG = L.circle([37.202000, -121.988000], 1536.171270468287, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LNG'
}).addTo(map);

circ_LNG.bindPopup("Lexington Reservoir");

circ_LNG.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LNG'] = {'name': "Lexington Reservoir",
                         'capacity': '18534',
                         'wiki': "https://en.wikipedia.org/wiki/Lexington_Reservoir"};


var circ_SWB = L.circle([38.200000, -119.983000], 1526.943435206108, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SWB'
}).addTo(map);

circ_SWB.bindPopup("Pinecrest Lake");

circ_SWB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SWB'] = {'name': "Pinecrest Lake",
                         'capacity': '18312',
                         'wiki': "https://en.wikipedia.org/wiki/Pinecrest_Lake"};


var circ_INP = L.circle([39.452000, -120.290000], 1483.9365864549145, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'INP'
}).addTo(map);

circ_INP.bindPopup("Independence Lake");

circ_INP.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['INP'] = {'name': "Independence Lake",
                         'capacity': '17295',
                         'wiki': "https://en.wikipedia.org/wiki/Independence_Lake"};


var circ_SLB = L.circle([38.772500, -120.699400], 1453.8148590038452, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SLB'
}).addTo(map);

circ_SLB.bindPopup("Slab Creek Reservoir");

circ_SLB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SLB'] = {'name': "Slab Creek Reservoir",
                         'capacity': '16600',
                         'wiki': "https://en.wikipedia.org/wiki/Slab_Creek_Reservoir"};


var circ_TNM = L.circle([37.058000, -118.225000], 1445.2506610059152, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TNM'
}).addTo(map);

circ_TNM.bindPopup("Tinemaha Reservoir");

circ_TNM.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TNM'] = {'name': "Tinemaha Reservoir",
                         'capacity': '16405',
                         'wiki': "https://en.wikipedia.org/wiki/Tinemaha_Reservoir"};


var circ_PT6 = L.circle([40.923000, -121.994000], 1422.3844897158342, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'PT6'
}).addTo(map);

circ_PT6.bindPopup("Pit 6 Reservoir");

circ_PT6.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['PT6'] = {'name': "Pit 6 Reservoir",
                         'capacity': '15890',
                         'wiki': "https://en.wikipedia.org/wiki/Pit_6_Reservoir"};


var circ_RLF = L.circle([38.267000, -119.733000], 1407.2657133182317, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'RLF'
}).addTo(map);

circ_RLF.bindPopup("Relief Reservoir");

circ_RLF.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['RLF'] = {'name': "Relief Reservoir",
                         'capacity': '15554',
                         'wiki': "https://en.wikipedia.org/wiki/Relief_Reservoir"};


var circ_MAR = L.circle([37.292000, -120.147000], 1381.976597885342, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MAR'
}).addTo(map);

circ_MAR.bindPopup("Mariposa Creek Dam");

circ_MAR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MAR'] = {'name': "Mariposa Creek Dam",
                         'capacity': '15000',
                         'wiki': "https://en.wikipedia.org/wiki/Mariposa_Creek_Dam"};


var circ_LEW = L.circle([40.727000, -122.793000], 1366.2244224803435, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LEW'
}).addTo(map);

circ_LEW.bindPopup("Lewiston Lake");

circ_LEW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LEW'] = {'name': "Lewiston Lake",
                         'capacity': '14660',
                         'wiki': "https://en.wikipedia.org/wiki/Lewiston_Lake"};


var circ_FRL = L.circle([39.440000, -120.544000], 1332.2522003587824, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'FRL'
}).addTo(map);

circ_FRL.bindPopup("French Lake");

circ_FRL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['FRL'] = {'name': "French Lake",
                         'capacity': '13940',
                         'wiki': "https://en.wikipedia.org/wiki/French_Lake"};


var circ_TFR = L.circle([39.519000, -121.629000], 1224.0703804293034, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'TFR'
}).addTo(map);

circ_TFR.bindPopup("Thermalito Forebay");

circ_TFR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['TFR'] = {'name': "Thermalito Forebay",
                         'capacity': '11768',
                         'wiki': "https://en.wikipedia.org/wiki/Thermalito_Forebay"};


var circ_SLJ = L.circle([38.153000, -122.782000], 1167.204486311899, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SLJ'
}).addTo(map);

circ_SLJ.bindPopup("Soulajule");

circ_SLJ.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SLJ'] = {'name': "Soulajule",
                         'capacity': '10700',
                         'wiki': "https://en.wikipedia.org/wiki/Soulajule"};


var circ_CGS = L.circle([34.245000, -117.965000], 1152.8258484240205, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CGS'
}).addTo(map);

circ_CGS.bindPopup("Cogswell Reservoir");

circ_CGS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CGS'] = {'name': "Cogswell Reservoir",
                         'capacity': '10438',
                         'wiki': "https://en.wikipedia.org/wiki/Cogswell_Reservoir"};


var circ_CHB = L.circle([37.730000, -122.122000], 1144.123059789558, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CHB'
}).addTo(map);

circ_CHB.bindPopup("Lake Chabot");

circ_CHB.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CHB'] = {'name': "Lake Chabot",
                         'capacity': '10281',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Chabot"};


var circ_GBL = L.circle([34.526000, -119.686000], 1128.266323536343, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'GBL'
}).addTo(map);

circ_GBL.bindPopup("Gibraltar Lake");

circ_GBL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['GBL'] = {'name': "Gibraltar Lake",
                         'capacity': '9998',
                         'wiki': "https://en.wikipedia.org/wiki/Gibraltar_Lake"};


var circ_CRO = L.circle([37.183000, -121.792000], 1113.4992899248305, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CRO'
}).addTo(map);

circ_CRO.bindPopup("Calero Reservoir");

circ_CRO.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CRO'] = {'name': "Calero Reservoir",
                         'capacity': '9738',
                         'wiki': "https://en.wikipedia.org/wiki/Calero_Reservoir"};


var circ_MCS = L.circle([37.520000, -120.309000], 1113.0418127938021, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MCS'
}).addTo(map);

circ_MCS.bindPopup("Lake McSwain");

circ_MCS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MCS'] = {'name': "Lake McSwain",
                         'capacity': '9730',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_McSwain"};


var circ_DNN = L.circle([39.322777, -120.264400], 1111.324596323283, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'DNN'
}).addTo(map);

circ_DNN.bindPopup("Donner Lake");

circ_DNN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['DNN'] = {'name': "Donner Lake",
                         'capacity': '9700',
                         'wiki': "https://en.wikipedia.org/wiki/Donner_Lake"};


var circ_UVA = L.circle([37.067000, -121.690000], 1110.6369663123164, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'UVA'
}).addTo(map);

circ_UVA.bindPopup("Uvas Reservoir");

circ_UVA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['UVA'] = {'name': "Uvas Reservoir",
                         'capacity': '9688',
                         'wiki': "https://en.wikipedia.org/wiki/Uvas_Reservoir"};


var circ_NAT = L.circle([38.636145, -121.220039], 1070.4744696916628, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'NAT'
}).addTo(map);

circ_NAT.bindPopup("Lake Natoma");

circ_NAT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['NAT'] = {'name': "Lake Natoma",
                         'capacity': '9000',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Natoma"};


var circ_NWL = L.circle([37.103000, -122.072000], 1069.9390985805617, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'NWL'
}).addTo(map);

circ_NWL.bindPopup("Loch Lomond Reservoir");

circ_NWL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['NWL'] = {'name': "Loch Lomond Reservoir",
                         'capacity': '8991',
                         'wiki': "https://en.wikipedia.org/wiki/Loch_Lomond_Reservoir"};


var circ_APN = L.circle([37.940000, -122.637000], 1064.0322378473816, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'APN'
}).addTo(map);

circ_APN.bindPopup("Alpine Lake");

circ_APN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['APN'] = {'name': "Alpine Lake",
                         'capacity': '8892',
                         'wiki': "https://en.wikipedia.org/wiki/Alpine_Lake"};


var circ_SIV = L.circle([38.669000, -120.121000], 1048.8464933683958, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SIV'
}).addTo(map);

circ_SIV.bindPopup("Silver Lake");

circ_SIV.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SIV'] = {'name': "Silver Lake",
                         'capacity': '8640',
                         'wiki': "https://en.wikipedia.org/wiki/Silver_Lake"};


var circ_LVY = L.circle([39.300000, -120.583000], 1017.2324110085497, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LVY'
}).addTo(map);

circ_LVY.bindPopup("Lake Valley Reservoir");

circ_LVY.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LVY'] = {'name': "Lake Valley Reservoir",
                         'capacity': '8127',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Valley_Reservoir"};


var circ_EJC = L.circle([37.117000, -121.693500], 1007.1692734046767, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'EJC'
}).addTo(map);

circ_EJC.bindPopup("Chesbro Reservoir");

circ_EJC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['EJC'] = {'name': "Chesbro Reservoir",
                         'capacity': '7967',
                         'wiki': "https://en.wikipedia.org/wiki/Chesbro_Reservoir"};


var circ_BAR = L.circle([37.367000, -120.217000], 990.1487006738307, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BAR'
}).addTo(map);

circ_BAR.bindPopup("Bear Reservoir");

circ_BAR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BAR'] = {'name': "Bear Reservoir",
                         'capacity': '7700',
                         'wiki': "https://en.wikipedia.org/wiki/Bear_Reservoir"};


var circ_MMR = L.circle([32.915454, -117.098879], 922.3766387935221, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MMR'
}).addTo(map);

circ_MMR.bindPopup("Lake Miramar");

circ_MMR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MMR'] = {'name': "Lake Miramar",
                         'capacity': '6682',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Miramar"};


var circ_LYS = L.circle([38.094000, -120.166000], 890.4906447914314, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LYS'
}).addTo(map);

circ_LYS.bindPopup("Lyons Reservoir");

circ_LYS.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LYS'] = {'name': "Lyons Reservoir",
                         'capacity': '6228',
                         'wiki': "https://en.wikipedia.org/wiki/Lyons_Reservoir"};


var circ_SPC = L.circle([40.629000, -122.474000], 864.8126436271816, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SPC'
}).addTo(map);

circ_SPC.bindPopup("Spring Creek Debris Dam");

circ_SPC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SPC'] = {'name': "Spring Creek Debris Dam",
                         'capacity': '5874',
                         'wiki': "https://en.wikipedia.org/wiki/Spring_Creek_Debris_Dam"};


var circ_JML = L.circle([34.492000, -119.507000], 795.3272319142787, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'JML'
}).addTo(map);

circ_JML.bindPopup("Jameson Lake");

circ_JML.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['JML'] = {'name': "Jameson Lake",
                         'capacity': '4968',
                         'wiki': "https://en.wikipedia.org/wiki/Jameson_Lake"};


var circ_MRR = L.circle([32.782000, -117.047000], 772.2599321173864, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MRR'
}).addTo(map);

circ_MRR.bindPopup("Murray Reservoir");

circ_MRR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MRR'] = {'name': "Murray Reservoir",
                         'capacity': '4684',
                         'wiki': "https://en.wikipedia.org/wiki/Murray_Reservoir"};


var circ_LEA = L.circle([38.471390, -120.002777], 765.3039857325813, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'LEA'
}).addTo(map);

circ_LEA.bindPopup("Lake Alpine");

circ_LEA.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['LEA'] = {'name': "Lake Alpine",
                         'capacity': '4600',
                         'wiki': "https://en.wikipedia.org/wiki/Lake_Alpine"};


var circ_BMP = L.circle([37.957000, -122.610000], 739.9277020331918, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BMP'
}).addTo(map);

circ_BMP.bindPopup("Bon Tempe Reservoir");

circ_BMP.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BMP'] = {'name': "Bon Tempe Reservoir",
                         'capacity': '4300',
                         'wiki': "https://en.wikipedia.org/wiki/Bon_Tempe_Reservoir"};


var circ_KKR = L.circle([37.128110, -119.525530], 731.2732791431451, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'KKR'
}).addTo(map);

circ_KKR.bindPopup("Kerckhoff Reservoir");

circ_KKR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['KKR'] = {'name': "Kerckhoff Reservoir",
                         'capacity': '4200',
                         'wiki': "https://en.wikipedia.org/wiki/Kerckhoff_Reservoir"};


var circ_OWN = L.circle([37.282000, -120.187000], 677.0275002573076, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'OWN'
}).addTo(map);

circ_OWN.bindPopup("Owens Creek Dam");

circ_OWN.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['OWN'] = {'name': "Owens Creek Dam",
                         'capacity': '3600',
                         'wiki': "https://en.wikipedia.org/wiki/Owens_Creek_Dam"};


var circ_GDR = L.circle([37.199700, -121.881400], 650.165770286374, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'GDR'
}).addTo(map);

circ_GDR.bindPopup("Guadalupe Reservoir");

circ_GDR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['GDR'] = {'name': "Guadalupe Reservoir",
                         'capacity': '3320',
                         'wiki': "https://en.wikipedia.org/wiki/Guadalupe_Reservoir"};


var circ_JNC = L.circle([38.853000, -120.453000], 643.2750982580687, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'JNC'
}).addTo(map);

circ_JNC.bindPopup("Junction Reservoir");

circ_JNC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['JNC'] = {'name': "Junction Reservoir",
                         'capacity': '3250',
                         'wiki': "https://en.wikipedia.org/wiki/Junction_Reservoir"};


var circ_SEC = L.circle([37.298000, -122.077000], 623.7804139848138, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'SEC'
}).addTo(map);

circ_SEC.bindPopup("Stevens Creek Reservoir");

circ_SEC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['SEC'] = {'name': "Stevens Creek Reservoir",
                         'capacity': '3056',
                         'wiki': "https://en.wikipedia.org/wiki/Stevens_Creek_Reservoir"};


var circ_UTI = L.circle([38.440277, -120.002220], 552.7906391541368, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'UTI'
}).addTo(map);

circ_UTI.bindPopup("Utica Reservoir");

circ_UTI.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['UTI'] = {'name': "Utica Reservoir",
                         'capacity': '2400',
                         'wiki': "https://en.wikipedia.org/wiki/Utica_Reservoir"};


var circ_MAT = L.circle([34.486000, -119.307000], 478.73073648171925, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'MAT'
}).addTo(map);

circ_MAT.bindPopup("Matilija Reservoir");

circ_MAT.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['MAT'] = {'name': "Matilija Reservoir",
                         'capacity': '1800',
                         'wiki': "https://en.wikipedia.org/wiki/Matilija_Reservoir"};


var circ_BHC = L.circle([38.805000, -120.620000], 441.36793080657765, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BHC'
}).addTo(map);

circ_BHC.bindPopup("Brush Creek Reservoir");

circ_BHC.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BHC'] = {'name': "Brush Creek Reservoir",
                         'capacity': '1530',
                         'wiki': "https://en.wikipedia.org/wiki/Brush_Creek_Reservoir"};


var circ_RBL = L.circle([38.967000, -120.217000], 429.6739856991561, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'RBL'
}).addTo(map);

circ_RBL.bindPopup("Rubicon Lake");

circ_RBL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['RBL'] = {'name': "Rubicon Lake",
                         'capacity': '1450',
                         'wiki': "https://en.wikipedia.org/wiki/Rubicon_Lake"};


var circ_GLL = L.circle([38.969167, -120.393056], 390.8820095223359, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'GLL'
}).addTo(map);

circ_GLL.bindPopup("Gerle Lake");

circ_GLL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['GLL'] = {'name': "Gerle Lake",
                         'capacity': '1200',
                         'wiki': "https://en.wikipedia.org/wiki/Gerle_Lake"};


var circ_BIL = L.circle([39.001000, -120.250000], 369.10246719124274, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'BIL'
}).addTo(map);

circ_BIL.bindPopup("Buck Island Lake");

circ_BIL.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['BIL'] = {'name': "Buck Island Lake",
                         'capacity': '1070',
                         'wiki': "https://en.wikipedia.org/wiki/Buck_Island_Lake"};


var circ_VAR = L.circle([39.383900, -123.102500], 298.54106607209235, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'VAR'
}).addTo(map);

circ_VAR.bindPopup("Van Arsdale Reservoir");

circ_VAR.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['VAR'] = {'name': "Van Arsdale Reservoir",
                         'capacity': '700',
                         'wiki': "https://en.wikipedia.org/wiki/Van_Arsdale_Reservoir"};


var circ_GDW = L.circle([37.862800, -120.629700], 252.313252202016, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'GDW'
}).addTo(map);

circ_GDW.bindPopup("Goodwin Reservoir");

circ_GDW.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['GDW'] = {'name': "Goodwin Reservoir",
                         'capacity': '500',
                         'wiki': "https://en.wikipedia.org/wiki/Goodwin_Reservoir"};


var circ_CMI = L.circle([38.833000, -120.533000], 187.12051592547778, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'CMI'
}).addTo(map);

circ_CMI.bindPopup("Camino Reservoir");

circ_CMI.on('click', function (e) {showReservoir(e.target.options.className)});

reservoirs['CMI'] = {'name': "Camino Reservoir",
                         'capacity': '275',
                         'wiki': "https://en.wikipedia.org/wiki/Camino_Reservoir"};

