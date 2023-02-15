import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Access the nested “salary” key from the JSON-string above.
sample = json.loads(sampleJson)
print(sample["company"]["employee"]["payable"]["salary"])
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
sample["company"]["employee"]["birth_date"] = "08/10/2003"
# Save the dictionary as JSON to a file.
print(json.dumps(sampleJson, indent=4))
