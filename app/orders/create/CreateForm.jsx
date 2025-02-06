"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { getToken } from "../../(auth)/login/page"

export default function CreateForm() {
    const router = useRouter()
    
    const [item, setItem] = useState('')
    const [user, setUser] = useState('')
    const [fulfilled, setFulfilled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const order = {
            item
        }

        const token = getToken()

        const res = await fetch('http://localhost:8085/orders', {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`,"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })

        if (res.status === 201){
            router.refresh()
            router.push('/orders')
        }
    }
    
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
        <label>
        <span>Items:</span>
        <input
          required 
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Submitting...</span>}
      {!isLoading && <span>Submit Order</span>}
    </button>
    </form>
  )
}


/*
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>


<div>
<h2 className="flex justify-center form label">Place Pantry Order:</h2>
<form className="form">
  <label>LU ID:</label>
  <input
    type="text" 
    required 
    />

  <label>Do you live on campus?</label>
  <select>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>

  <label>Year in school?</label>
  <select>
      <option value="1">1st Year</option>
      <option value="2">2nd Year</option>
      <option value="3">3rd Year</option>
      <option value="4">4th Year</option>
      <option value="5">5th Year</option>
    </select>

  <label>Have you used the pantry before?</label>
  <select>
      <option value="yes">Yes - I used the pantry in person</option>
      <option value="yes">Yes -  I completed the online form before</option>
      <option value="no">No - I have never utilized the pantry</option>
    </select>

  <label>How did you hear about the pantry?</label>
  <input type="text" required />

  <div>
  <label>Do you have access to the following cooking tools?</label>
  
  <label for="cooking1">Hot Water</label>
  <input type="checkbox" id="cooking1" name="cooking1" value="hot water"/>
  
  <label for="cooking2">Microwave</label>
  <input type="checkbox" id="cooking2" name="cooking2" value="microwave"/>
  
  <label for="cooking3">Stove</label>
  <input type="checkbox" id="cooking3" name="cooking3" value="stove"/>
  
  <label for="cooking4">Can Opener</label>
  <input type="checkbox" id="cooking4" name="cooking4" value="can opener"/>

  <label for="cooking5">Fridge</label>
  <input type="checkbox" id="cooking5" name="cooking5" value="fridge"/>
  </div>
  
    <label>Are you interested in using a reusable Blus Pantry Tote Bag?</label>
  <select>
      <option value="yes">Yes, please</option>
      <option value="no">No, thank you!</option>
    </select>

  <label>Lorem Ipsum:</label>
  <textarea
    required
  ></textarea>

  <button>Place Order</button>
</form>
</div>
*/


