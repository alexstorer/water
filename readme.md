# Visualization of California's Reservoirs

Deployed here:

http://www.stanford.edu/~astorer/water

## Data

The data is provided by the [California Data Exchange Center (CDEC)](http://cdec.water.ca.gov/index.html) managed by the Department of Water Resources.

### Data Preparation

* Reservoir list from http://cdec.water.ca.gov/reportapp/javareports?name=ResInfo
* This list includes some reservoirs with limited data, for example there are three entries for San Luis Reservoir. We decide to include only reservoirs with daily reservoir elevation.

* Pull coordinates using `get_reservoir_md.py`


## To Deploy

Clone the repository, then run the following:

* `python get_reservoir.py`
* `python build_page.py`

This will download the most recent data from California's Water Resources page.  Make sure you put all of the resulting CSV and javascript files in the same directory as `index.html`.

## Libraries Used

### Javascript
* Leaflet for mapping
* Dygraphs for plotting
* Jquery

### Python
* now v3
* Requests
