import csv, math

elevationurl = "http://cdec.water.ca.gov/cgi-progs/queryCSV?station_id={sensor}&dur_code=D&sensor_num=6&start_date=1900/01/01&end_date=2100/01/01"

capactityurl = "http://cdec.water.ca.gov/cgi-progs/queryCSV?station_id={sensor}&dur_code=D&sensor_num=15&start_date=1900/01/01&end_date=2100/01/01"

fsensors = open('reservoirs.csv','rU')
dr = csv.DictReader(fsensors)


fpoints = open('reservoirpts.js','w')

jsheader = '''
reservoirs = new Object;
'''

fpoints.write(jsheader)

addstr = '''
var circ_{sensor} = L.circle([{lat}, {long}], {radius}, {{
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: '{sensor}'
}}).addTo(map);

circ_{sensor}.bindPopup("{name}");

circ_{sensor}.on('click', function (e) {{showReservoir(e.target.options.className)}});

reservoirs['{sensor}'] = {{'name': '{name}',
                         'capacity': '{capacity}',
                         'wiki': '{wiki}'}};

'''
reservoirs = dict()
for d in dr:
    #print d
    #r = requests.get(myurl.format(sensor=d['Code']))
    reservoirs[d['Code']] = d

fsensors.close()
fcapacity = open('capacity.csv','rU')

dr = csv.DictReader(fcapacity)
for d in dr:
    #print d
    #r = requests.get(myurl.format(sensor=d['Code']))
    code = d['Code']
    if code in reservoirs:
        reservoirs[code]['Capacity'] = float(d['Capacity'].replace(',',''))
        r = reservoirs[code]
        fpoints.write(addstr.format(sensor=r['Code'],
                                    lat=r['Lat'],
                                    long=r['Long'],
                                    radius=10*math.sqrt(r['Capacity']),
                                    name=r['Name'],
                                    capacity=d['Capacity'],
                                    wiki=d['Wiki']))

fcapacity.close()
fpoints.close()
