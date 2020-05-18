import sys

if sys.version_info.major==3:
    import urllib.request as urllib2
    from io import StringIO
elif sys.version_info.major==2:
    import urllib2
    from StringIO import StringIO

import csv

# Taken from http://cdec.water.ca.gov/dynamicapp/wsSensorData
elevationurl = "http://cdec.water.ca.gov/dynamicapp/req/CSVDataServlet?Stations={sensor}&SensorNums=6&dur_code=D&Start=1900/01/01&End=2100/01/01"
capacityurl = "http://cdec.water.ca.gov/dynamicapp/req/CSVDataServlet?Stations={sensor}&SensorNums=15&dur_code=D&Start=1900/01/01&End=2100/01/01"


fsensors = open('reservoirs.csv','r')
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
    print(code)
    if (code == code):        
        #r = requests.get(capacityurl.format(sensor=code))
        r = urllib2.urlopen(capacityurl.format(sensor=code))
        content = r.read().decode('utf-8')
        #f = StringIO.StringIO(r.text)
        f = StringIO(content)

        if len(content)<1000:
            print("Failed to download ", code, " - not updating")
        else:
            headers = ['STATION_ID','DURATION','SENSOR_NUMBER','SENSOR_TYPE','DATE TIME','OBS DATE']
            headers += ['VALUE','DATA_FLAG','UNITS']
            dr = csv.DictReader(f,fieldnames=headers)
            fw = open('{code}_pct.csv'.format(code=code),'w')
            dw = csv.DictWriter(fw,fieldnames=['Date','Percentage'])
            dw.writeheader()
            for d in dr:
                row = dict()
                row['Date'] = d['OBS DATE'][0:4]+'-'+d['OBS DATE'][4:6]+'-'+d['OBS DATE'][6:8]
                try:
                    row['Percentage'] = 100*float(d['VALUE'])/reservoirs[code]['Capacity']
                    if row['Percentage']>120 or row['Percentage']<1:
                        row['Percentage'] = 'm'
                except:
                    row['Percentage'] = 'm'
                if row['Percentage'] != 'm':
                    dw.writerow(row)
            fw.close()
