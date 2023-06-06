export default function Algorithms() {
    return (
      <div className="services">

        <h2>Types of Learning Algorithms</h2>

        <div className="black">
        <h4>A. Linear Regression | Machine Learning </h4>
        <p></p>

        <h4>B. Logistic Regression | Classification | Deep Learning</h4>
        <h6>a). Binary Classification</h6>
        <p></p>
        <h6>b). Multiclass Classification</h6>
        <p></p>
        <h6>c). Multilabel Classification</h6>
        <p></p>

        <h4>C. Algorithms</h4>

        <h5>a). Gradient Descent</h5>
        <h6>b). A.D.A.M.</h6>
        </div>
        <hr></hr>

        <h2> Example 1: Linear Regression Example - Market Analysis for Profit Prediction </h2>
        
        <div className="example1 black">
          <h3>Problem Summary:  </h3>
          <p>A CEO of a restaurant franchise is considering different cities for opening a new outlet. How can we Use the data to help you identify which cities may potentially give your business higher profits?</p>
          <p>*You would like to expand your business to cities that may give your restaurant higher profits.</p> 
          <p>*The chain already has restaurants in various cities and you have data for profits and populations from the cities.</p> 
          <p>*You also have data on cities that are candidates for a new restaurant. </p> 
          <p>*For these cities, you have the city population.</p> 
    
          <h4>Tools: Numpy, matplotlib</h4>
          <h4>Results</h4>
          <img className="example" src="https://i.postimg.cc/prYDswm0/Image-6-6-23-at-12-52-PM.jpg" align="center" alt="X"></img>
          </div>
      
          <h2>Example 2: Logistic Regression with Gradient Descent - Probability of Admission </h2>

          <div className="example2 black">
          <h3>Problem Summary: </h3>
            <p>An administrator of a university department wants to determine each applicant’s chance of admission based on their results on two exams.
            By building a classification model that estimates an applicant’s probability of admission based on the scores from those two exams. </p>
          
          <p>* I have historical data from previous applicants that you can use as a training set for logistic regression. </p>
          <p>* For each training example, I have the applicant’s scores on two exams and the admissions decision. </p> 

          <h3>Tools: Numpy, matplotlib</h3>
          <h3>Results</h3>
          <img className="example" src="https://i.postimg.cc/3rgCrvtg/Image-6-6-23-at-12-55-PM.jpg" align="center" alt="X"></img>
          <img className="example" src="https://i.postimg.cc/5NgBLMdy/Image-6-6-23-at-12-56-PM.jpg" align="center" alt="X"></img>

          </div>

          <h2> Example 3: Neural Network MultiClass Classification Example - Handwritten Digit Recognition </h2>
          <div className="example2 black">

          <h3>Problem Summary:  </h3>
          <p> Used a neural network to recognize ten handwritten digits, 0-9. This is a multiclass classification task where one of n choices is selected.
            Automated handwritten digit recognition is widely used today - from recognizing zip codes (postal codes) on mail envelopes to recognizing amounts written on bank checks. </p>
          
          <h3>Tools: Python, TensorFlow, tensorflow.keras, matplotlib</h3>
          <h3>Results</h3>

        </div>
          <h3>Visualizations</h3>
          <img className="example" src="https://i.postimg.cc/Fznyb7wT/C2-W1-Vector-Matrix.png" align="center" alt="vector"></img>
          <img className="example" src="https://i.postimg.cc/L6nB93Zw/C2-W1-Roasting-Network.png" align="center" alt="roasting"></img>
          <img className="example" src="https://i.postimg.cc/hj2TgX4K/C2-W1-Roasting-Decision.png" align="center" alt="decision"></img>
          <img className="example" src="https://i.postimg.cc/wxbLGRbV/C2-W1-Neurons-And-Layers.png" align="center" alt="neurons"></img>
          <img className="example" src="https://i.postimg.cc/8PJMQk2V/C2-W1-Matrix-Matrix.png" align="center" alt="matrix"></img>
          <img className="example" src="https://i.postimg.cc/xTMGNTt3/C2-W1-L3-Lab01-3-Neurons.png" align="center" alt="neurons"></img>
          <img className="example" src="https://i.postimg.cc/fbL0CwjF/C2-W1-dense2.png" align="center" alt="dense"></img>
          <img className="example" src="https://i.postimg.cc/x1Fd0LMx/C2-W1-dense.png" align="center" alt="dense1"></img>
          
          <hr></hr>
        </div>
        
      )
    }