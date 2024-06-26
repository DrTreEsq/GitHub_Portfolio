export default function Algorithms() {
    return (
      <div className="services">

        <a className="github" href="https://github.com/TREYCSE/GitHub_Portfolio">GitHub PortFolio README.md for Engineers: Click here!</a>


        <h3> Example 1: Linear Regression Example - Market Analysis for Profit Prediction </h3>
          <div className="example1 black">

          <h3>Problem Summary:  </h3>

            <p className='tiny'> In this problem, a restaurant franchise was considering different cities for opening a new outlet.
              The data is utilized to identify which cities may potentially give your business higher profits.
              They would like to expand their business to cities that may give your restaurant higher profits.
              The chain already has restaurants in various cities and you have data for profits and populations from the cities.. 
              There is also data on cities that are candidates for a new restaurant. 
              For these cities, we were given the city population.
          </p> 

          <p> Dataset: </p>
            <p className="tiny">
            A function loads the data into variables `x_train` and `y_train`. x_train` is the population of a city.
            `y_train` is the profit of a restaurant in that city. A negative value for profit indicates a loss. Both `X_train` and `y_train` are numpy arrays.
          </p>

          <p>Tools: NumPy, matplotlib</p>


          <h4>Results: </h4>
          <img className="exampleer" src="https://i.postimg.cc/prYDswm0/Image-6-6-23-at-12-52-PM.jpg" align="center" alt="X"></img>
      
          </div>

      

          <h3>Example 2: Collaborative Recommender System for Movie Recommendations</h3>
          <div className=" black">

          <h3>Problem Summary:  </h3>

            <p className="tiny"> The goal was to implement the collaborative filtering learning algorithm and apply it to a dataset of movie ratings. </p>
            
            <p> Dataset: </p>
            <p className="tiny">
              The data set was derived from the MovieLens "ml-latest-small" dataset.
              The original dataset has  9000 movies rated by 600 users. The dataset has been reduced in size to focus on movies from the years since 2000.
              This dataset consists of ratings on a scale of 0.5 to 5 in 0.5 step increments.
              
              The reduced dataset has 443 users and 4778 movies.. A function loads the data into variables `x_train` and `y_train`. x_train` is the population of a city.
              `y_train` is the profit of a restaurant in that city. A negative value for profit indicates a loss. Both `X_train` and `y_train` are numpy arrays.
          </p>
          <p className="tinny">[F. Maxwell Harper and Joseph A. Konstan. 2015. The MovieLens Datasets: History and Context. ACM Transactions on Interactive Intelligent Systems (TiiS) 5, 4: 19:1–19:19. https://doi.org/10.1145/2827872]</p>
          
          <p>Tools: NumPy, TensorFlow, matplotlib</p>

          <h3>Results</h3>
          <img className="exampleee" src="https://i.postimg.cc/d0FRK7Gy/Image-6-21-23-at-6-32-AM.jpg" align="center" alt="vector"></img>
          </div>



        <h3>Example 3: Logistic Regression with Gradient Descent - Probability of Admission </h3>
          <div className="example2 black">

          <h3>Problem Summary: </h3>
  
            <p  className='tiny'>  For this exercise, an administrator of a university department wants to determine each applicant’s chance of admission based on their results on two exams
            by building a classification model that estimates an applicant’s probability of admission based on the scores from those two exams.
            We were provided historical data from previous applicants that was used as a training set for logistic regression.
            For each training example, we have the applicant’s scores on two exams and the admissions decision. </p> 

          <p> Dataset: </p>
          <p className="tiny">
            A function loads the data into variables `X_train` and `y_train`.
            `X_train` contains exam scores on two exams for a student.
            `y_train` is the admission decision.
            `y_train = 1` if the student was admitted.
            `y_train = 0` if the student was not admitted. 
            Both `X_train` and `y_train` are numpy arrays.
          </p>

          <p>Tools: NumPy, matplotlib</p>

          <h3>Results</h3>
          <img className="examplee" src="https://i.postimg.cc/R0g1Vr6v/figure-1.png" align="center" alt="X"></img>
          <img className="examplee" src="https://i.postimg.cc/SNcWYY2T/figure-2.png" align="center" alt="X"></img>
          <img className="examplee" src="https://i.postimg.cc/sXBWjMCJ/figure-3.png" align="center" alt="X"></img>
          <img className="examplee" src="https://i.postimg.cc/JzPHjN1q/figure-4.png" align="center" alt="X"></img>
        
        </div>



        <h3> Example 4: Neural Network Binary Classification Example - Handwritten Digit Recognition </h3>
          <div className="example2 black">

          <h3>Problem Summary:  </h3>

            <p  className='tiny'> In this exercise, we used a neural network to recognize two handwritten digits, zero and one.
            This is a binary classification task. Automated handwritten digit recognition is widely used today - from recognizing zip codes (postal codes) on mail envelopes to recognizing amounts written on bank checks.  </p>
          
            <p> Dataset: </p>
            <p className="tiny">
            The data set contains 1000 training examples of handwritten digits, here limited to zero and one.  
            Each training example is a 20-pixel x 20-pixel grayscale image of the digit. 
            Each pixel is represented by a floating-point number indicating the grayscale intensity at that location. 
            The 20 by 20 grid of pixels is “unrolled” into a 400-dimensional vector. 
            Each training example becomes a single row in our data matrix `X`. 
            This gives us a 1000 x 400 matrix `X` where every row is a training example of a handwritten digit image.
            </p>

          <p>Tools: NumPy, TensorFlow, matplotlib</p>

          <h3>Results</h3>
          <img className="transparent" src="https://i.postimg.cc/4xQt3C7m/1a1cc802-24eb-4d32-9c81-d0fc023ba1c9.png" align="center" alt="vector"></img>
         </div>
          


        <h3>Example 5: Image Compression Using K-means Clustering</h3>
          <div className=" black">

          <h3>Problem Summary:  </h3>

            <p className="tiny"> 
              In this exercise, we used the K-means algorithm to select the 16 colors that will be used to represent the compressed image by
              inherently treating every pixel in the original image as a data example and use the K-means algorithm to find the 16 colors that best
              group (cluster) the pixels in the 3- dimensional RGB space. By making this reduction, it is possible to represent (compress) the photo in an efficient way. 
              Specifically, you only need to store the RGB values of the 16 selected colors, and for each pixel in the image you now need to only
              store the index of the color at that location (where only 4 bits are necessary to represent 16 possibilities). Once we computed the cluster centroids on the image,
              we then used the 16 colors to replace the pixels in the original image.
            </p>

            <p> Dataset: </p>
            <p className="tiny">
              In a straightforward 24-bit color representation of an image, each pixel is represented as three 8-bit unsigned integers
              (ranging from 0 to 255) that specify the red, green and blue intensity values. This encoding is often refered to as the RGB encoding.
              Our image contains thousands of colors, and in you will reduce the number of
              colors to 16 colors.
          </p>

          <p>Tools: NumPy, matplotlib</p>

          <h3>Visuals</h3>
          <img className="examplee" src="https://i.postimg.cc/HW9K8vPb/figure-1.png" align="center" alt="vector"></img>
          <img className="examplee" src="https://i.postimg.cc/0yRwgZPH/figure-2.png" align="center" alt="vector"></img>
          <img className="examplee" src="https://i.postimg.cc/cJdHc99t/b3bffb1d-74e9-450a-95b4-27b577b99c31.png" align="center" alt="vector"></img>
          <img className="exampleer" src="https://i.postimg.cc/0QBzV0Vn/figure-3.png" align="center" alt="vector"></img>
          </div>

 

          <h3>Example 6: Decision Trees</h3>
          <div className=" black">

          <h3>Problem Summary:  </h3>

            <p className="tiny"> For this problem, the company was a seller of wild mushrooms for consumption.
                Since not all mushrooms are edible, they'd like to be able to tell whether a given mushroom is edible or poisonous based on it's physical attributes
                We have some existing data that you can use for this task that we used to help  identify which mushrooms can be sold safely.
                Note: The dataset that was used was for illustrative purposes only. It is not meant to be a guide on identifying edible mushrooms.  </p>

            <p> Dataset: </p>
                <img src="https://i.postimg.cc/4Nw88fR1/Image-6-21-23-at-1-41-PM.jpg" align="center" alt="vector"></img>
                    <p className="tiny">
                    We had 10 examples of mushrooms. For each example, we had three features.
                    Cap Color (Brown or Red), Stalk Shape (Tapering (as in \/) or Enlarging (as in /\)), and Solitary (Yes or No) Label Edible (1 indicating yes or 0 indicating poisonous)	
                    </p>

                <p className="tiny">
                For ease of implementation, we have one-hot encoded the features (turned them into 0 or 1 valued features)
                </p>

                <img src="https://i.postimg.cc/JhHP4jDT/Image-6-21-23-at-1-41-PM-1.jpg" align="center" alt="vector"></img>

                <p className="tiny">
                Therefore,
                y = 1 indicates edible
                y = 0 indicates poisonous
                </p>

                <p className="tiny">
                  In a straightforward 24-bit color representation of an image, each pixel is represented as three 8-bit unsigned integers
                  (ranging from 0 to 255) that specify the red, green and blue intensity values. This encoding is often refered to as the RGB encoding.
                  Our image contains thousands of colors, and in you will reduce the number of
                  colors to 16 colors. By making this reduction, it is possible to represent (compress) the photo in an efficient way. 
                  Specifically, you only need to store the RGB values of the 16 selected colors, and for each pixel in the image you now need to only
                  store the index of the color at that location (where only 4 bits are necessary to represent 16 possibilities).
              </p>

          <p>Tools: NumPy, matplotlib</p>

          <h3>Results</h3>
          <img className="examplee" src="https://i.postimg.cc/yNqGrSJm/3a01de74-da4f-4b08-9dc8-21a38fc6822a.jpg" align="center" alt="vector"></img>
          <img className="examplee" src="https://i.postimg.cc/zDp4Wymk/Image-6-21-23-at-5-54-AM.jpg" align="center" alt="vector"></img>
          <img className="examplee" src="https://i.postimg.cc/7hLsXNvn/Image-6-21-23-at-5-55-AM.jpg" align="center" alt="vector"></img>
          </div>


        </div>
      )
    }
