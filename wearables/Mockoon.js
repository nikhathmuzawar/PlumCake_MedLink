[
  {{#repeat 10}}
    {
      "id": "{{faker 'string.uuid'}}",
      "name": "{{faker 'person.firstName'}} {{faker 'person.lastName'}}",
      "email": "{{faker 'internet.email'}}",
      "phone": "{{faker 'phone.number'}}",
      "timestamp": "{{faker 'date.recent'}}",
      "bloodPressure": {
        "systolic": "{{faker 'number.int' min=90 max=180}}",
        "diastolic": "{{faker 'number.int' min=60 max=120}}"
      },
      "heartRate": "{{faker 'number.int' min=60 max=100}}",
      "stressLevel": "{{faker 'number.int' min=1 max=10}}",
      "physicalActivity": {
        "activity": "{{faker 'helpers.arrayElement' array=['Walking', 'Running', 'Swimming', 'Cycling', 'Yoga']}}",
        "duration": "{{faker 'number.int' min=10 max=120}} minutes",
        "steps": "{{faker 'number.int' min=0 max=15000}}",
        "caloriesBurned": "{{faker 'number.int' min=0 max=3000}}"
      },
      "oxygenLevel": "{{faker 'number.int' min=90 max=100}}"
    }
  {{/repeat}}
]
