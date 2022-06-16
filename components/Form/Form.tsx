import React, { useState } from 'react';

export default function Form() {
  const [tasks, setTask]= useState<string>()

  const handleClick = (e: any) => {
    setTask(tasks)
  }
    return (
      // <form action="/api/form" method="post">
      <div>
        <input value={tasks} type="text" name="taskInput" placeholder="Please write a task"/>
        <button type="submit" onClick={handleClick}> Submit</button>
        <ul>
          <li>{tasks}</li>
        </ul>
      </div>

      // </form>
    )
  }

//   export default function Form() {
//     // Handles the submit event on form submit.
//     const handleSubmit = async (event:any) => {
//       // Stop the form from submitting and refreshing the page.
//       event.preventDefault()
  
//       // Get data from the form.
//       const data = {
//         taskInput: event.target.taskInput.value,
//       }
  
//       // Send the data to the server in JSON format.
//       const JSONdata = JSON.stringify(data)
  
//       // API endpoint where we send form data.
//       const endpoint = '/api/form'
  
//       // Form the request for sending data to the server.
//       const options = {
//         // The method is POST because we are sending data.
//         method: 'POST',
//         // Tell the server we're sending JSON.
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // Body of the request is the JSON data we created above.
//         body: JSONdata,
//       }
  
//       // Send the form data to our forms API on Vercel and get a response.
//       const response = await fetch(endpoint, options)
  
//       // Get the response data from server as JSON.
//       // If server returns the name submitted, that means the form works.
//       const result = await response.json()
//       alert(`Task to do: ${result.data}`)
//     }
//     return (
//       // We pass the event to the handleSubmit() function on submit.
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="taskInput" placeholder="Please write a task"/>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
  