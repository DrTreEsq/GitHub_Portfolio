export default function Algorithms() {
    return (
      <div className="services">

        <a className="github" href="https://github.com/TREYCSE/GitHub_Portfolio">GitHub PortFolio README.md for Engineers: Click here for code samples, etc.</a>

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
          <img className="example" src="https://i.postimg.cc/WbgvfPc7/Image-6-6-23-at-1-42-PM.jpg" align="center" alt="vector"></img>

        </div>
          <h3>Visualizations</h3>
          
          <hr></hr>

        <h3>Example 4: Decision Trees</h3>
        <div className=" black">
        <h3>Problem Summary:  </h3>
        <p> Suppose you are starting a company that grows and sells wild mushrooms.
            Since not all mushrooms are edible, you'd like to be able to tell whether a given mushroom is edible or poisonous based on it's physical attributes
            You have some existing data that you can use for this task. Can you use the data to help you identify which mushrooms can be sold safely?
            Note: The dataset used is for illustrative purposes only. It is not meant to be a guide on identifying edible mushrooms"  </p>
          <h3>Tools: Python, TensorFlow, tensorflow.keras, matplotlib</h3>
          <h3>Results</h3>
          <img className="example" src="https://i.postimg.cc/yNqGrSJm/3a01de74-da4f-4b08-9dc8-21a38fc6822a.jpg" align="center" alt="vector"></img>
          <img className="example" src="https://i.postimg.cc/yNqGrSJm/3a01de74-da4f-4b08-9dc8-21a38fc6822a.jpg" align="center" alt="vector"></img>
          <img className="example" src="https://i.postimg.cc/yNqGrSJm/3a01de74-da4f-4b08-9dc8-21a38fc6822a.jpg" align="center" alt="vector"></img>
          </div>

          <hr></hr>

          <h3>Example 5: Clustering for Similar Data in images </h3>
        <div className=" black">
        <h3>Problem Summary:  </h3>
          <p> Concretely, I was given a small training set of images and you want to group the data into a few cohesive “clusters”.</p>
          <h3>Tools: Python, TensorFlow, tensorflow.keras, matplotlib</h3>
          <h3>Results</h3>
          <img className="example" src="https://i.postimg.cc/HW9K8vPb/figure-1.png" align="center" alt="vector"></img>
          <img className="example" src="https://i.postimg.cc/0yRwgZPH/figure-2.png" align="center" alt="vector"></img>
          <img className="example" src="https://i.postimg.cc/0QBzV0Vn/figure-3.png" align="center" alt="vector"></img>
          </div>

          <h3>Example 6: Collaborative & Content Recommender System</h3>
        <div className=" black">
        <h3>Problem Summary:  </h3>
          <p> The goal was to implement the collaborative filtering learning algorithm and apply it to a dataset of movie ratings.</p>
          <h3>Tools: Python, TensorFlow, tensorflow.keras, matplotlib</h3>
          <h3>Results</h3>
          
</div>
        </div>
        
      )
    }