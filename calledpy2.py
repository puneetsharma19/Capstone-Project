import requests
import pickle
import json
import numpy as np
import sys


predcategory = int(sys.argv[1])

if predcategory == 0:
    array = [0]*14
    avg_rating = float(sys.argv[2])
    sale_price = float(sys.argv[3])
    total_review = float(sys.argv[4])
    genre = int(sys.argv[5])
    publisher_type = int(sys.argv[6])
    print(genre)
    array[0] = avg_rating
    array[1] = sale_price
    array[2] = total_review
    array[3 + genre] = 1
    array[9 + publisher_type] = 1
    
    books_model = pickle.load(open('books_xgboostmodel.sav', 'rb'))
    new_input = np.array(array)
    new_output = books_model.predict([new_input])
    print(new_output)

elif predcategory == 1:
    array = [0]*115
    array[4] = array[5] = array[6] = array[7] = array[8] = 0.2
    array[14] = 2
    array[24] = array[25] = array[26] = 1
    array[114] = 1

    price = float(sys.argv[2]) #0
    retail_price = float(sys.argv[3]) #1
    uses_ad_boost = int(sys.argv[4]) #2
    rating = float(sys.argv[5]) #3
    product_variation_inventory = float(sys.argv[6]) #13
    countries_shipped_to = float(sys.argv[7]) #16
    inventory_total = float(sys.argv[8]) #17
    merch_rating_count = float(sys.argv[9]) #19
    merch_rating = float(sys.argv[10]) #20
    tag_quality = float(sys.argv[11]) #22
    tag_count = float(sys.argv[12]) #23
    discount_rate = float(sys.argv[13]) #27
    color = int(sys.argv[14]) #29-30-31
    size = int(sys.argv[15])  #106-112

    array[0] = price
    array[1] = retail_price
    array[2] = uses_ad_boost
    array[3] = rating
    array[13] = product_variation_inventory
    array[16] = countries_shipped_to
    array[17] = inventory_total
    array[19] = merch_rating_count
    array[20] = merch_rating
    array[22] = tag_quality
    array[23] = tag_count
    array[27] = discount_rate
    array[29 + color] = 1
    array[106 + size] = 1
    clothes_model = pickle.load(open('clothes_gradientboostmodel.sav', 'rb'))
    new_input = np.array(array)
    new_output = clothes_model.predict([new_input])
    print(new_output)
else :
    array = [0]*38
    yor = float(sys.argv[2])
    cs = float(sys.argv[3])
    cc = float(sys.argv[4])
    us = float(sys.argv[5])
    uc = float(sys.argv[6])
    print(sys.argv[7])
    platform = int(sys.argv[7])
    gen_re = int(sys.argv[8])
    esrbrating = int(sys.argv[9])

    array[0] = yor
    array[1] = cs
    array[2] = cc
    array[3] = us
    array[4] = uc
    array[5 + platform] = 1
    array[21 + gen_re] = 1
    array[32 + esrbrating] = 1
    video_model = pickle.load(open('video_xgboostmodel.sav', 'rb'))
    new_input = np.array(array)
    new_output = video_model.predict([new_input])
    print(new_output)


