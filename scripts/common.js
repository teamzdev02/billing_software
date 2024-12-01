function save_data(data) {
    return ($.ajax({
        url: 'http://localhost:443/save_data',
        type: 'POST',
        data: JSON.stringify(data), // Ensure the data is stringified if sending JSON
        contentType: 'application/json; charset=utf-8',
    }).then(
        function (response) {
            // Success callback
            return { response: response };
        },
        function () {
            // Error callback
            return "error";
        }
    ))
}

// formate to send the data to database.
// data = {
//     "table_name": "transactions",
//     "data": {
//       "date": "2024-11-01",
//       "code": "TRX001",
//       "lname": "Smith",
//       "debit": true,
//       "amount": 100.50
//     }
//   }



function fetch_data(data) {
    return ($.ajax({
        url: 'http://localhost:443/fetch_data',
        type: 'POST',
        data: JSON.stringify(data), // Ensure the data is stringified if sending JSON
        contentType: 'application/json; charset=utf-8',
    }).then(
        function (response) {
            // Success callback
            return { response: response };
        },
        function () {
            // Error callback
            return "error";
        }
    ))
}

data = {"table_name": "transactions"};
console.log(fetch_data(data))