import urllib2, csv, StringIO

elevationurl = "http://cdec.water.ca.gov/cgi-progs/queryCSV?station_id={sensor}&dur_code=D&sensor_num=6&start_date=1900/01/01&end_date=2100/01/01"

capacityurl = "http://cdec.water.ca.gov/cgi-progs/queryCSV?station_id={sensor}&dur_code=D&sensor_num=15&start_date=1900/01/01&end_date=2100/01/01"

fsensors = open('reservoirs.csv','rU')
dr = csv.DictReader(fsensors)


reservoirs = dict()
for d in dr:
    reservoirs[d['Code']] = d

fsensors.close()
fcapacity = open('capacity.csv','rU')

dr = csv.DictReader(fcapacity)
for d in dr:
    code = d['Code']
    if code in reservoirs:
        reservoirs[code]['Capacity'] = float(d['Capacity'].replace(',',''))

fcapacity.close()

for code in reservoirs:
    print code
    if (code == code):        
        #r = requests.get(capacityurl.format(sensor=code))
        r = urllib2.urlopen(capacityurl.format(sensor=code))
        #f = StringIO.StringIO(r.text)
        f = StringIO.StringIO(r.read())
        # skip the first two lines
        next(f)
        next(f)
        dr = csv.DictReader(f,fieldnames=['Date','xxx','Volume'])
        fw = open('{code}_pct.csv'.format(code=code),'w')
        dw = csv.DictWriter(fw,fieldnames=['Date','Percentage'])
        dw.writeheader()
        for d in dr:
            row = dict()
            row['Date'] = d['Date'][0:4]+'-'+d['Date'][4:6]+'-'+d['Date'][6:8]
            try:
                row['Percentage'] = 100*float(d['Volume'])/reservoirs[code]['Capacity']
                if row['Percentage']>120 or row['Percentage']<1:
                    row['Percentage'] = 'm'
            except:
                row['Percentage'] = 'm'
            if row['Percentage'] != 'm':
                dw.writerow(row)
        fw.close()
