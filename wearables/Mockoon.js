[
  {{#repeat 10}}
    {
      "id": "{{faker 'string.uuid'}}",
      "name": "{{faker 'person.firstName'}} {{faker 'person.lastName'}}",
      "phone": "{{faker 'phone.number'}}",
      "address": "{{faker 'location.streetAddress'}}, {{faker 'location.city'}}, {{faker 'location.state' abbreviated=true}} {{faker 'location.zipCode'}}",
      "timestamp": "{{faker 'date.recent'}}",
      "bloodPressure": {
        "systolic": "{{faker 'number.int' min=90 max=180}}",
        "diastolic": "{{faker 'number.int' min=60 max=120}}"
      },
      "heartRate": "{{faker 'number.int' min=60 max=100}}",
      "stressLevel": "{{faker 'number.int' min=1 max=10}}",
      "physicalActivity": {
        "steps": "{{faker 'number.int' min=0 max=15000}}",
        "activeMinutes": "{{faker 'number.int' min=0 max=300}}",
        "caloriesBurned": "{{faker 'number.int' min=0 max=3000}}"
      },
      "oxygenLevel": "{{faker 'number.int' min=90 max=100}}"
    }
  {{/repeat}}
]
