# -*- coding: utf-8 -*-
"""
Created on Tue Jan  1 16:59:14 2019

@author: Zach
"""

import pandas as pd
import math

data = pd.read_csv("C:\\Users\\Zach\\Documents\\DataViz\\murder_2017.csv", sep =',')

pdata = [0] * 124

precincts = data['PRECINCT']
i = 2
for murder in precincts:
    i+=1 
    print(i)
    if math.isnan(murder):
        break
    pdata[int(murder)]+=1
    
pd.DataFrame(pdata).to_csv("C:\\Users\\Zach\\Documents\\DataViz\\total_murder_2017.csv")