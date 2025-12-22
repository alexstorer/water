import csv, math

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

reservoirs['{sensor}'] = {{'name': "{name}",
                         'capacity': '{capacity}',
                         'wiki': "{wiki}"}};

'''

# headers:
# ID,DAM,LAKE,STREAM,CAPACITY (AF),Lat,Lon

with open('reservoirs_md.csv','r') as fsensors:
    dr = csv.DictReader(fsensors)
    reservoirs = [d for d in dr]

# order reservoirs by capacity
reservoirs = sorted(reservoirs, key=lambda d: float(d['CAPACITY (AF)']), reverse=True)

for d in reservoirs:
    fpoints.write(addstr.format(sensor=d['ID'],
                                # remove ° symbol
                                lat=d['Lat'][:-1],
                                long=d['Lon'][:-1],
                                radius=20*math.sqrt(float(d['CAPACITY (AF)'])/math.pi),
                                name=d['LAKE'],
                                capacity=d['CAPACITY (AF)'],
                                wiki="https://en.wikipedia.org/wiki/"+d['LAKE'].replace(' ','_')))

fpoints.close()
