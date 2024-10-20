export default function Form() {
    
  return (
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
  )
}
