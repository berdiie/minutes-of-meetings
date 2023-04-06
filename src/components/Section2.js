import React from 'react'


export default function Section2() {

  
  return (
    <>
    <div className='section2'>
        <div className='feed'>
            <p>Meeting Feedback</p>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
            </div>
        </div>
       <div className='comment'>
        <textarea cols="25" id="ContactForm1_contact-form-email-message" name="email-message" placeholder="Leave Comment" rows="5"></textarea>
       </div>
      <div className='check'>
      <div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      I agree to the Meetings Minutes
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      defaultChecked
    />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
    I Don't agree to the Meetings Minutes
    </label>
    <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
   <label class="btn btn-light" for="btn-check">Close</label>
    <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
   <label class="btn btn-primary" for="btn-check">Submit</label>
  </div>
</div>

      </div>
    </div>
    </>
  )
}
