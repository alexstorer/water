from bs4 import BeautifulSoup
import requests, csv

f = open('cdec.csv')
fw = open("reservoirs_md.csv",'w')
dr = csv.DictReader(f)
dw = csv.DictWriter(fw, fieldnames=dr.fieldnames+['Lat', 'Lon'])
dw.writeheader()

for d in dr:
    print(f"Res: {d['ID']}")
    url = f"http://cdec.water.ca.gov/dynamicapp/staMeta?station_id={d['ID']}"
    r = requests.get(url)

    soup = BeautifulSoup(r.text, 'html.parser')

    ## there are two tables we care about, the one at the top
    ## with the metadata, and the one further down with the
    ## sensor data. let's parse them out.

    ## find the table and parse out the rows
    tables = soup.find_all('table')
    md = {}
    for t in tables:
        if 'Station ID' in t.text:
            rows = t.find_all('tr')
            for row in rows:
                cols = row.find_all('td')
                # there are four columns per row
                # first and third are labels, second and fourth are values
                if len(cols) >= 2:
                    key1 = cols[0].text.strip().replace(':','')
                    val1 = cols[1].text.strip()
                    md[key1] = val1
                if len(cols) >= 4:
                    key2 = cols[2].text.strip().replace(':','')
                    val2 = cols[3].text.strip()
                    md[key2] = val2
        elif 'Sensor Description' in t.text: 
            # this is the sensor data table
            if 'RESERVOIR ELEVATION, FEET' in t.text:
                print('Sensor Data Present')
                d['Lat'] = md['Latitude']
                d['Lon'] = md['Longitude']
                dw.writerow(d)
            else:
                print('No Sensor Data')
fw.close()
