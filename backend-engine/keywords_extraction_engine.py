import json
import re
import os
from resume_parser import resumeparse
from itertools import filterfalse
from nltk.corpus import stopwords;

stopwords = set(stopwords.words('english'))
file_name = "./backend-engine/sample_resume.pdf"
data = resumeparse.read_file(file_name)
skills = data["skills"]

# remove all non-alphabet or non-numbers
# remove beginning and trailling white spaces
for i in range(0, len(skills)):
    skills[i] = re.sub('[^0-9a-zA-Z\s]+', '', skills[i])
    skills[i] = skills[i].strip()

# remove strings with length greater than 2
skills[:] = filterfalse(lambda elm: len(elm.split()) > 2, skills)

# remove any stopwords
for i in range(0, len(skills)):
    skills[i] = ' '.join(filter(lambda w: not w in stopwords, skills[i].split()))

# remove empty string
skills[:] = filterfalse(lambda elm: len(elm) == 0, skills)


# convert skills to a string separated by , so that nodejs can retrive the results;
mySeparator = ","
str_skills = mySeparator.join(skills)
print(str_skills)

# Remove the file from the server side each time after generatings keywords
# commented out at the momoent for testing purposes
# os.remove(file_name)