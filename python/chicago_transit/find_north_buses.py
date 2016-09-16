'''
Adapted from David Beazley's "Learn Python Through Public Data Hacking"
tutorial from https://www.youtube.com/watch?v=RrPZza_vZ3w.
Displays Python basics by reading files, scraping the web,
building data structures, and analyzing real world data
'''

office_latitude = 41.98

from xml.etree.ElementTree import parse

routeDoc = parse("route22.xml")

'''
loops through buses in routeDoc and
prints northbound buses that are
currently north of office_latitude
'''
for bus in routeDoc.findall("bus"):
    bus_latitude = float(bus.findtext("lat"))

    if bus_latitude >= office_latitude:
        bus_id = bus.findtext("id")
        bus_direction = bus.findtext("d")

        if bus_direction.startswith("North"):
            print(bus_id, bus_direction, bus_latitude)
