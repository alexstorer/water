import requests
import csv
import tqdm
import os

def parseDate(dateStr):
    # date is in YYYY-M-D format
    dateStr = dateStr.split(' ')[0]  # remove time if present
    parts = dateStr.split('-')
    year = parts[0]
    month = parts[1].zfill(2)
    day = parts[2].zfill(2)
    return f"{year}-{month}-{day}"

capacityurl = "http://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations={sensor}&SensorNums=15&dur_code=D&Start={startDate}&End={endDate}"

with open('reservoirs_md.csv','r') as fsensors:
    dr = csv.DictReader(fsensors)
    reservoirs = [d for d in dr]

print("Starting reservoir capacity retrieval...")

# ensure data directory exists
os.makedirs('data', exist_ok=True)

for d in tqdm.tqdm(reservoirs):
    #print(f"{d['ID']} -- {d['DAM']}")
    r = requests.get(capacityurl.format(sensor=d['ID'], startDate="1900/01/01", endDate="2100/01/01"))
    observations = r.json()
    fw = open(f'data/{d["ID"]}_pct.csv','w')
    dw = csv.DictWriter(fw,fieldnames=['Date','Percentage'])
    dw.writeheader()
    for obs in observations:
        obsdate = parseDate(obs['date'])
        # is our value a positive float?
        obspct = 100*float(obs['value'])/float(d['CAPACITY (AF)'])
        if obspct >= 0.0 and obspct <= 120.0:
            dw.writerow({'Date': obsdate, 'Percentage': obspct})
    fw.close()
