'''
Adapted from David Beazley's "Learn Python Through Public Data Hacking"
tutorial from https://www.youtube.com/watch?v=RrPZza_vZ3w.
Displays Python basics by reading files, scraping the web,
building data structures, and analyzing real world data
'''

import urllib.request

# uses url library to open an http request for Chicago Public Transit Bus Route 22
u = urllib.request.urlopen("http://ctabustracker.com/bustime/map/getBusesForRoute.jsp?route=22")

# gets and sets data from the http response
route22Data = u.read()

# creates new writeable xml and writes data to it
route22File = open("route22.xml", "wb")
route22File.write(route22Data)

# closes file and prints confirmation
route22File.close()
print("Wrote route22.xml")
