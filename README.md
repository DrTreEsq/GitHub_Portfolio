<h1 align="center">
About Me: Trey Weathers
</h1>
<hr> </hr>

<h2 align="center">
The Ethical Mad Scientist🤓
</h2>

<h3 align="center">
Computer Scientist README.md Portfolio
</h3>

###### link to deployed portfolio website: https://brave-glacier-00e751b0f.3.azurestaticapps.net/

<img src="https://i.postimg.cc/FRWr6HHD/funny-urkey.webp" align="center"> 
</img>

<h3 align="center">
Currently Enhancing IT, Cloud, and Mathematic Skills in pursuit of PhD of Technology
</h3>

<h4 align="center">
Side project: also working towards PhD of Physics (focused on Quantum physics and Relativity).
</h4>

<h5 align="center">
Fun fact: Everything I do is tied back to Ethics!
</h5>

###### Welcome, Earthling! My name is Trey and I am an educator and forever student with a goal of learning each valuable skill necessary to pioneer the change that I wish to see in the world. I have a wide range of abilities stemming from my diverse work background, education, and additional academic interests ranging from neuroscience, programming, to the history of mankind and more. I hope to continually gain experience to grow myself professionally and offer the same to the organizations that I work with as I work towards a greater goal of personal development and global change.

<h3 align="center">
1. TOOLS & TECHNOLOGIES
</h3>

###### My Go-tos: TensorFlow, Numpy, Node.js, React.js, MongoDB, Express, etc.
1. Programming: Python, Javascript, React, Node, MongoDB
2. Data Science & Machine Learning | AI: NumPy, TensorFlow, etc.
3. Cloud and Big Data tools: Heroku, Azure, AWS and more. 


<h3 align="center">
2. EDUCATION
</h3>
<h4 align="center">
  General Assembly Software Engineering Immersive
</h4>
<img src="https://i.postimg.cc/rwQZ3rN5/Image-6-29-23-at-6-41-PM.jpg" align="center"> 
<h4 align="center">
  Stanford Online Machine Learning Specialization
</h4>
<img src="https://i.postimg.cc/3Jrk9k3k/Image-6-20-23-at-7-27-AM.jpg" align="center"> </img>

1. B.S. in Healthcare Management & attended Fordham Law school for one year before being consumed by my passion for S.T.E.M.
2. General Assembly: Full Stack Software Engineering, May 2023
3. Stanford & DeepLearning.AI: Machine Learning Specialization Certificate, June 2023
###### repo: https://github.com/TREYCSE/Stanford_Learning_Algorithms
5. DeepLearning.AI: Mathematics for Machine Learning and Data Science. July 2023
###### repo: https://github.com/TREYCSE/DeepLearning_Math/tree/main
6. IBM: Information Technology (IT) and Cloud Fundamentals Specialization, August 2023

<h3 align="center">
3. PROJECTS
</h3>

1. Software Engineering Capstone - SITE LINK: https://proud-plant-0981ce810.3.azurestaticapps.net/, GITHUB: https://github.com/TREYCSE/Virtual_Classroom
![image](https://i.imgur.com/9qRZRqA.jpg)
![image](https://i.imgur.com/QDDD5Vu.jpg)
###### these are screenshots from my Full Stack Capstone.
<h4>Code Sample</h4>

      const answerQuestion = async() => {
        if(model !==null) {
        const passage = passageRef.current.value
        const question = questionRef.current.value
        console.log('params have been begotten?👽')

        const answers = await model.findAnswers(question, passage)
        setAnswer(answers)
        console.log(answers)
    }
  }


2. Stanford Machine Learning Specialization Algorithms

###### repo: https://github.com/TREYCSE/Stanford_Learning_Algorithms

<h3> Example 1: Linear Regression Example - Market Analysis for Profit Prediction </h3>

<h3>Problem Summary:  </h3>

In this problem, a restaurant franchise was considering different cities for opening a new outlet.
The data is utilized to identify which cities may potentially give your business higher profits.
They would like to expand their business to cities that may give your restaurant higher profits.
The chain already has restaurants in various cities and you have data for profits and populations from the cities.. 
There is also data on cities that are candidates for a new restaurant. 
For these cities, we were given the city population.


<p> Dataset: </p>
<p>
A function loads the data into variables `x_train` and `y_train`. x_train` is the population of a city.
`y_train` is the profit of a restaurant in that city. A negative value for profit indicates a loss. Both `X_train` and `y_train` are numpy arrays.
</p>

<p>Tools: NumPy, matplotlib</p>

<h4>Code Sample </h4>

    def compute_gradient(x, y, w, b): 
      """
      Computes the gradient for linear regression 
      Args:
        x (ndarray): Shape (m,) Input to the model (Population of cities) 
        y (ndarray): Shape (m,) Label (Actual profits for the cities)
        w, b (scalar): Parameters of the model  
      Returns
        dj_dw (scalar): The gradient of the cost w.r.t. the parameters w
        dj_db (scalar): The gradient of the cost w.r.t. the parameter b     
       """
      
     # Number of training examples
      m = x.shape[0]
      
      # You need to return the following variables correctly
      dj_dw = 0
      dj_db = 0
      
      for i in range(m):  
          f_wb = w * x[i] + b 
          dj_dw_i = (f_wb - y[i]) * x[i] 
          dj_db_i = f_wb - y[i] 
          dj_db += dj_db_i
          dj_dw += dj_dw_i 
      dj_dw = dj_dw / m 
      dj_db = dj_db / m
  
          
      return dj_dw, dj_db

    
      
<hr></hr>



<h3>Example 2: Collaborative Recommender System for Movie Recommendations</h3>

<h3>Problem Summary:  </h3>

<p> The goal was to implement the collaborative filtering learning algorithm and apply it to a dataset of movie ratings. </p>
            
<p> Dataset: </p>
<p >
The data set was derived from the MovieLens "ml-latest-small" dataset.
The original dataset has  9000 movies rated by 600 users. The dataset has been reduced in size to focus on movies from the years since 2000.
This dataset consists of ratings on a scale of 0.5 to 5 in 0.5 step increments.
              
The reduced dataset has 443 users and 4778 movies.. A function loads the data into variables `x_train` and `y_train`. x_train` is the population of a city.
`y_train` is the profit of a restaurant in that city. A negative value for profit indicates a loss. Both `X_train` and `y_train` are numpy arrays.
</p>


<p >[F. Maxwell Harper and Joseph A. Konstan. 2015. The MovieLens Datasets: History and Context. ACM Transactions on Interactive Intelligent Systems (TiiS) 5, 4: 19:1–19:19. https://doi.org/10.1145/2827872]</p>
          
<p>Tools: NumPy, TensorFlow, matplotlib</p>

<h4>Code Sample </h4>
    
    #  Useful Values
    num_movies, num_users = Y.shape
    num_features = 100
    
    # Set Initial Parameters (W, X), use tf.Variable to track these variables
    tf.random.set_seed(1234) # for consistent results
    W = tf.Variable(tf.random.normal((num_users,  num_features),dtype=tf.float64),  name='W')
    X = tf.Variable(tf.random.normal((num_movies, num_features),dtype=tf.float64),  name='X')
    b = tf.Variable(tf.random.normal((1,          num_users),   dtype=tf.float64),  name='b')
    
    # Instantiate an optimizer.
    optimizer = keras.optimizers.Adam(learning_rate=1e-1)


        

<hr></hr>


<h3>Example 3: Logistic Regression with Gradient Descent - Probability of Admission </h3>

<h3>Problem Summary: </h3>
  
<p >  For this exercise, an administrator of a university department wants to determine each applicant’s chance of admission based on their results on two exams by building a classification model that estimates an applicant’s probability of admission based on the scores from those two exams.
We were provided historical data from previous applicants that was used as a training set for logistic regression.
For each training example, we have the applicant’s scores on two exams and the admissions decision. </p> 

<p> Dataset: </p>
<p >
            A function loads the data into variables `X_train` and `y_train`.
            `X_train` contains exam scores on two exams for a student.
            `y_train` is the admission decision.
            `y_train = 1` if the student was admitted.
            `y_train = 0` if the student was not admitted. 
            Both `X_train` and `y_train` are numpy arrays.
</p>

<p>Tools: NumPy, matplotlib</p>

<h4>Code Sample </h4>
    
      def sigmoid(z):
        """
        Compute the sigmoid of z
    
        Args:
            z (ndarray): A scalar, numpy array of any size.
    
        Returns:
            g (ndarray): sigmoid(z), with the same shape as z
             
        """
              
        g = 1/(1+np.exp(-z))
 
        
        return g

    def compute_cost(X, y, w, b, *argv):
    """
      Computes the cost over all examples
      Args:
        X : (ndarray Shape (m,n)) data, m examples by n features
        y : (ndarray Shape (m,))  target value 
        w : (ndarray Shape (n,))  values of parameters of the model      
        b : (scalar)              value of bias parameter of the model
        *argv : unused, for compatibility with regularized version below
      Returns:
        total_cost : (scalar) cost 
      """
  
      m, n = X.shape
      
      cost = 0.0
      for i in range(m):
          z_i = np.dot(X[i],w) + b
          f_wb_i = sigmoid(z_i)
          cost +=  -y[i]*np.log(f_wb_i) - (1-y[i])*np.log(1-f_wb_i)
               
      total_cost = cost / m 

    return total_cost
   

    
      
<hr></hr>


<h3> Example 4: Neural Network Binary Classification Example - Handwritten Digit Recognition </h3>

<h3>Problem Summary:  </h3>
<p > In this exercise, we used a neural network to recognize two handwritten digits, zero and one.
This is a binary classification task. Automated handwritten digit recognition is widely used today - from recognizing zip codes (postal codes) on mail envelopes to recognizing amounts written on bank checks.  </p>
          
<p> Dataset: </p>
<p >
The data set contains 1000 training examples of handwritten digits, here limited to zero and one.  
Each training example is a 20-pixel x 20-pixel grayscale image of the digit. 
Each pixel is represented by a floating-point number indicating the grayscale intensity at that location. 
            The 20 by 20 grid of pixels is “unrolled” into a 400-dimensional vector. 
            Each training example becomes a single row in our data matrix `X`. 
            This gives us a 1000 x 400 matrix `X` where every row is a training example of a handwritten digit image.
</p>

<p>Tools: NumPy, TensorFlow, matplotlib</p>

<h4>Code Sample </h4>


      model = Sequential(
      [               
          tf.keras.Input(shape=(400,)),    #specify input size
          
          Dense(25, activation='sigmoid', name = 'layer1'),
          Dense(15, activation='sigmoid', name = 'layer2'),
          Dense(1, activation='sigmoid', name = 'layer3')
          
          
      ], name = "my_model" 
    )                            
    model.summary()

    def my_dense(a_in, W, b, g):
      """
      Computes dense layer
      Args:
        a_in (ndarray (n, )) : Data, 1 example 
        W    (ndarray (n,j)) : Weight matrix, n features per unit, j units
        b    (ndarray (j, )) : bias vector, j units  
        g    activation function (e.g. sigmoid, relu..)
      Returns
        a_out (ndarray (j,))  : j units
      """
      units = W.shape[1]
      a_out = np.zeros(units)
  
      for j in range(units):               
          w = W[:,j]                                    
          z = np.dot(w, a_in) + b[j]         
          a_out[j] = g(z)               
      return(a_out)
          
      return(a_out)
      
<hr></hr>



<h3>Example 5: Image Compression Using K-means Clustering</h3>

<h3>Problem Summary:  </h3>

<p> 
              In this exercise, we used the K-means algorithm to select the 16 colors that will be used to represent the compressed image by
              inherently treating every pixel in the original image as a data example and use the K-means algorithm to find the 16 colors that best
              group (cluster) the pixels in the 3- dimensional RGB space. By making this reduction, it is possible to represent (compress) the photo in an efficient way. 
              Specifically, you only need to store the RGB values of the 16 selected colors, and for each pixel in the image you now need to only
              store the index of the color at that location (where only 4 bits are necessary to represent 16 possibilities). Once we computed the cluster centroids on the image,
              we then used the 16 colors to replace the pixels in the original image.
            </p>

<p> Dataset: </p>
            <p >
              In a straightforward 24-bit color representation of an image, each pixel is represented as three 8-bit unsigned integers
              (ranging from 0 to 255) that specify the red, green and blue intensity values. This encoding is often refered to as the RGB encoding.
              Our image contains thousands of colors, and in you will reduce the number of
              colors to 16 colors.
          </p>

<p>Tools: NumPy, matplotlib</p>

<h4>Code Sample </h4>

    def compute_centroids(X, idx, K):
      """
      Returns the new centroids by computing the means of the 
      data points assigned to each centroid.
      
      Args:
          X (ndarray):   (m, n) Data points
          idx (ndarray): (m,) Array containing index of closest centroid for each 
                         example in X. Concretely, idx[i] contains the index of 
                         the centroid closest to example i
          K (int):       number of centroids
      
      Returns:
          centroids (ndarray): (K, n) New centroids computed
      """
      
      m, n = X.shape
      
      centroids = np.zeros((K, n))
  
      for k in range(K):   
          points = X[idx == k]
          centroids[k] = np.mean(points, axis = 0)
   
      return centroids
        
      
<hr></hr>


<h3>Example 6: Decision Trees</h3>

<h3>Problem Summary:  </h3>

<p > For this problem, the company was a seller of wild mushrooms for consumption.
                Since not all mushrooms are edible, they'd like to be able to tell whether a given mushroom is edible or poisonous based on it's physical attributes
                We have some existing data that you can use for this task that we used to help  identify which mushrooms can be sold safely.
                Note: The dataset that was used was for illustrative purposes only. It is not meant to be a guide on identifying edible mushrooms.  </p>

 <p> Dataset: </p>
<img src="https://i.postimg.cc/4Nw88fR1/Image-6-21-23-at-1-41-PM.jpg" align="center" alt="vector"></img>
<p >
                    We had 10 examples of mushrooms. For each example, we had three features.
                    Cap Color (Brown or Red), Stalk Shape (Tapering (as in \/) or Enlarging (as in /\)), and Solitary (Yes or No) Label Edible (1 indicating yes or 0 indicating poisonous)	
                    </p>

<p >
For ease of implementation, we have one-hot encoded the features (turned them into 0 or 1 valued features)
  </p>

<img src="https://i.postimg.cc/JhHP4jDT/Image-6-21-23-at-1-41-PM-1.jpg" align="center" alt="vector"></img>

<p >
                Therefore,
                y = 1 indicates edible
                y = 0 indicates poisonous
                </p>

<p >
                  In a straightforward 24-bit color representation of an image, each pixel is represented as three 8-bit unsigned integers
                  (ranging from 0 to 255) that specify the red, green and blue intensity values. This encoding is often refered to as the RGB encoding.
                  Our image contains thousands of colors, and in you will reduce the number of
                  colors to 16 colors. By making this reduction, it is possible to represent (compress) the photo in an efficient way. 
                  Specifically, you only need to store the RGB values of the 16 selected colors, and for each pixel in the image you now need to only
                  store the index of the color at that location (where only 4 bits are necessary to represent 16 possibilities).
</p>

<p>Tools: NumPy, matplotlib</p>

<h4>Code Sample </h4>


     def compute_entropy(y):
        """
        Computes the entropy for 
        
        Args:
           y (ndarray): Numpy array indicating whether each example at a node is
               edible (`1`) or poisonous (`0`)
           
        Returns:
            entropy (float): Entropy at that node
            
        """
        # You need to return the following variables correctly
        entropy = 0.
        
        if len(y) != 0:
            p1 = len(y[y == 1]) / len(y)
                                  
            if p1 != 0 and p1 != 1:
                entropy = -p1 * np.log2(p1) - (1 - p1) * np.log2(1 - p1)
            else:
                entropy = 0.      
        
        return entropy
    
    
      def get_best_split(X, y, node_indices):   
          """
          Returns the optimal feature and threshold value
          to split the node data 
          
          Args:
              X (ndarray):            Data matrix of shape(n_samples, n_features)
              y (array like):         list or ndarray with n_samples containing the target variable
              node_indices (ndarray): List containing the active indices. I.e, the samples being considered in this step.
      
          Returns:
              best_feature (int):     The index of the best feature to split
          """    
          
          # Some useful variables
          num_features = X.shape[1]
          
          # You need to return the following variables correctly
          best_feature = -1
          
          
          max_info_gain = 0
      
          for feature in range(num_features): 
      
             info_gain = compute_information_gain(X, y, node_indices, feature)
      
             if info_gain > max_info_gain:  
                 max_info_gain = info_gain
                 best_feature = feature
              
         
          return best_feature
  
<hr></hr>
        
