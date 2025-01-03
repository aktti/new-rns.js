import pandas as pd
import datetime
# Read in the census dataframe
census = pd.read_csv("C:\\Users\\user\\Music\\census.csv", index_col=0)

print(census.head())
print(census.dtypes)

print(census['higher_tax'].unique())
census['birth_year'] = census['birth_year'].replace(['missing'], 1967)
print(census['birth_year'].unique())



census['higher_tax'] = pd.Categorical(census['higher_tax'], ['strongly disagree' , 'disagree' , 'neutral' , 'agree' , 'strongly agree'], ordered = True)
census['higher_tax_code'] = census['higher_tax'].cat.codes