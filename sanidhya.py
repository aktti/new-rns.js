# import pandas as pd
# series1= pd.Series([10,20,30,40])
# print(series1)

# import pandas as pd
# s= pd.Series(range(1,15,3), index=[x for x in 'abcde'])
# print(s)

# import pandas as pd
# import numpy as np
# sobj =pd.Series([7.5,5.4,np.NaN,-34.5])
# print(sobj)

# import pandas as pd
# s= pd.Series('Welcome to TCS' , index=['Sanidhya',"Yash",'Kuldeep','Ravi'])
# print(s)

# import pandas as pd
# series=pd.Series({'Jan':31,"Feb":28,'Mar':31,"Apr":30})
# print(series)

# import pandas as pd
# series =pd.Series({'Jan':31,'Feb':28,"Mar":31,'Apr':30})
# #Naming the series and the index column
# series.name = 'Days'
# series.index.name = 'Month'
# print(series)

# import pandas as pd
# import numpy as np
# s1= np.arange(10,15)
# print(s1)
# sobj= pd.Series(index= s1,data=s1*4)
# print(sobj)

# import pandas as pd
# import numpy as np
# s1 = np.arange(10,15)
# print(s1)
# sobj=pd.Series (index =s1,data=s1**2)
# print(sobj)

# import pandas as pd
# l=[10,20,30,40,50]
# s=pd.Series (l*2)
# print(s)

#Creating series from one-dimensional (1D) array
# import pandas as pd
# import numpy as np
# array1=np.array([10,20,30,40])
# series1= pd.Series(array1,index=['a','b','c','d'])
# print(series1)

# import pandas as pd
# df1= pd.DataFrame()
# print(df1)
# import pandas as pd
# list1= [10,20,30,40,50]
# df1= pd.DataFrame(list1)
# print(df1)

# import pandas as pd
# student={'name':['Sanidhya','Kuldeep','Yash','Ravi','Ankit'],'English':[67,88,78,90,95],
#  "Economics":[45,60,75,65,84],"IP":[50,69,94,40,47],"Accounts":[99,38,35,30,28]}
# df=pd.DataFrame(student)
# print(df)

#Creating a DataFrame from dictionary of series
# import numpy as np
# import pandas as pd
# n=pd.Series(["Sanidhya","Ravi","Yash","Ankit"])
# Eng=pd.Series([89,90,98,99])
# Eco=pd.Series([78,91,93,87])
# IP=pd.Series([65,82,58,80])
# #Creating dictionary using series variables as values
# stud_Result={"Name":n,"English":Eng, "Economics":Eco,"Imformatics Practices":IP}
# #Creating dataframe
# df=pd.DataFrame(stud_Result)
# print(df)

# import pandas as pd
# test ={"Name" :["Sanidhya","Ravi","Kuldeep","Ankit","Yash"],
#        "Score":[97,88,77,65,98],
#        "No_attempts":[4,3,5,6,8]}
# test_result=pd.DataFrame(test,index=['Respondent0','Respondent1','Respondent2',   
#                                      'Respondent3','Respondent4',])
# print(test_result)
# #Adding a new column:qualify to test_result

# test_result['qualify']=['NO','YES','NO','YES','YES']
# print("dataframe after adding a new column")
# print(test_result)

#Broadcasting on two dataframes of same sizes
# import pandas as pd
# a=[2,5,6,7,8]
# b=[5,8,9,4,10]
# df1=pd.DataFrame(a)
# df2=pd.DataFrame(b)
# print(df1)
# print(df2)

# import pandas as pd
# dis = {"a":[1,2,3,4,5,6],"b":[1,2,3,4,5,6],"c":[1,2,3,4,5,6]}
# d=pd.DataFrame(dis)
# print(d)
# d.to_csv("Test new2 csv" ,index=False,header=[1,2,3])

#Program for computing Variance

# import pandas as pd
# import numpy as np
# #Create a Dictionary  of series
# d = {'Name':pd.Series (['Sachin','Hardik Pandaya','Dhoni','Rohit','Virat']),
# 'Age':pd.Series ([26,25,31,28,27]),
# 'Score':pd.Series ([87,90,100,200,99])}
# #Create a DataFrame
# df = pd.DataFrame(d)
# print("DataFramecontents")
# print(df)
# print(df.var())

import pandas as pd

df= pd.DataFrame({'UT-I':[70,80,90], "UT-II":[67,89,80],"UT-III":[76,75,78]})
print("DataFrame For UT Marks")
print(df)
print("Total Of UT Marks For Each Students/Row")
sum_UT_row = df.sum(axis=1)
print(sum_UT_row)
print("Sum Of Each Ut/Column")
sum_UT_Col = df.sum(axis=0)
print(sum_UT_Col)

