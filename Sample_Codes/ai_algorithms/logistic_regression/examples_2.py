# <a name="3"></a>
# ## 3 - Regularized Logistic Regression
# 
# In this part of the exercise, you will implement regularized logistic regression to predict whether microchips from a fabrication plant passes quality assurance (QA). During QA, each microchip goes through various tests to ensure it is functioning correctly. 
# 
# <a name="3.1"></a>
# ### 3.1 Problem Statement
# 
# Suppose you are the product manager of the factory and you have the test results for some microchips on two different tests. 
# - From these two tests, you would like to determine whether the microchips should be accepted or rejected. 
# - To help you make the decision, you have a dataset of test results on past microchips, from which you can build a logistic regression model.
# 
# <a name="3.2"></a>
# ### 3.2 Loading and visualizing the data
# 
# Similar to previous parts of this exercise, let's start by loading the dataset for this task and visualizing it. 
# 
# - The `load_dataset()` function shown below loads the data into variables `X_train` and `y_train`
#   - `X_train` contains the test results for the microchips from two tests
#   - `y_train` contains the results of the QA  
#       - `y_train = 1` if the microchip was accepted 
#       - `y_train = 0` if the microchip was rejected 
#   - Both `X_train` and `y_train` are numpy arrays.

# In[72]:


# load dataset
X_train, y_train = load_data("data/ex2data2.txt")


# #### View the variables
# 
# The code below prints the first five values of `X_train` and `y_train` and the type of the variables.
# 

# In[73]:


# print X_train
print("X_train:", X_train[:5])
print("Type of X_train:",type(X_train))

# print y_train
print("y_train:", y_train[:5])
print("Type of y_train:",type(y_train))


# #### Check the dimensions of your variables
# 
# Another useful way to get familiar with your data is to view its dimensions. Let's print the shape of `X_train` and `y_train` and see how many training examples we have in our dataset.

# In[74]:


print ('The shape of X_train is: ' + str(X_train.shape))
print ('The shape of y_train is: ' + str(y_train.shape))
print ('We have m = %d training examples' % (len(y_train)))


# #### Visualize your data
# 
# The helper function `plot_data` (from `utils.py`) is used to generate a figure like Figure 3, where the axes are the two test scores, and the positive (y = 1, accepted) and negative (y = 0, rejected) examples are shown with different markers.
# 
# <img src="images/figure 3.png"  width="450" height="450">

# In[75]:


# Plot examples
plot_data(X_train, y_train[:], pos_label="Accepted", neg_label="Rejected")

# Set the y-axis label
plt.ylabel('Microchip Test 2') 
# Set the x-axis label
plt.xlabel('Microchip Test 1') 
plt.legend(loc="upper right")
plt.show()


# Figure 3 shows that our dataset cannot be separated into positive and negative examples by a straight-line through the plot. Therefore, a straight forward application of logistic regression will not perform well on this dataset since logistic regression will only be able to find a linear decision boundary.
# 

# <a name="3.3"></a>
# ### 3.3 Feature mapping
# 
# One way to fit the data better is to create more features from each data point. In the provided function `map_feature`, we will map the features into all polynomial terms of $x_1$ and $x_2$ up to the sixth power.
# 
# $$\mathrm{map\_feature}(x) = 
# \left[\begin{array}{c}
# x_1\\
# x_2\\
# x_1^2\\
# x_1 x_2\\
# x_2^2\\
# x_1^3\\
# \vdots\\
# x_1 x_2^5\\
# x_2^6\end{array}\right]$$
# 
# As a result of this mapping, our vector of two features (the scores on two QA tests) has been transformed into a 27-dimensional vector. 
# 
# - A logistic regression classifier trained on this higher-dimension feature vector will have a more complex decision boundary and will be nonlinear when drawn in our 2-dimensional plot. 
# - We have provided the `map_feature` function for you in utils.py. 

# In[76]:


print("Original shape of data:", X_train.shape)

mapped_X =  map_feature(X_train[:, 0], X_train[:, 1])
print("Shape after feature mapping:", mapped_X.shape)


# Let's also print the first elements of `X_train` and `mapped_X` to see the tranformation.

# In[77]:


print("X_train[0]:", X_train[0])
print("mapped X_train[0]:", mapped_X[0])


# While the feature mapping allows us to build a more expressive classifier, it is also more susceptible to overfitting. In the next parts of the exercise, you will implement regularized logistic regression to fit the data and also see for yourself how regularization can help combat the overfitting problem.
# 
# <a name="3.4"></a>
# ### 3.4 Cost function for regularized logistic regression
# 
# In this part, you will implement the cost function for regularized logistic regression.
# 
# Recall that for regularized logistic regression, the cost function is of the form
# $$J(\mathbf{w},b) = \frac{1}{m}  \sum_{i=0}^{m-1} \left[ -y^{(i)} \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) - \left( 1 - y^{(i)}\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) \right] + \frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2$$
# 
# Compare this to the cost function without regularization (which you implemented above), which is of the form 
# 
# $$ J(\mathbf{w}.b) = \frac{1}{m}\sum_{i=0}^{m-1} \left[ (-y^{(i)} \log\left(f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right) - \left( 1 - y^{(i)}\right) \log \left( 1 - f_{\mathbf{w},b}\left( \mathbf{x}^{(i)} \right) \right)\right]$$
# 
# The difference is the regularization term, which is $$\frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2$$ 
# Note that the $b$ parameter is not regularized.

# <a name='ex-05'></a>
# ### Exercise 5
# 
# Please complete the `compute_cost_reg` function below to calculate the following term for each element in $w$ 
# $$\frac{\lambda}{2m}  \sum_{j=0}^{n-1} w_j^2$$
# 
# The starter code then adds this to the cost without regularization (which you computed above in `compute_cost`) to calculate the cost with regulatization.
# 
# If you get stuck, you can check out the hints presented after the cell below to help you with the implementation.

# In[78]:


# UNQ_C5
def compute_cost_reg(X, y, w, b, lambda_ = 1):
    """
    Computes the cost over all examples
    Args:
      X : (ndarray Shape (m,n)) data, m examples by n features
      y : (ndarray Shape (m,))  target value 
      w : (ndarray Shape (n,))  values of parameters of the model      
      b : (scalar)              value of bias parameter of the model
      lambda_ : (scalar, float) Controls amount of regularization
    Returns:
      total_cost : (scalar)     cost 
    """

    m, n = X.shape
    
    # Calls the compute_cost function that you implemented above
    cost_without_reg = compute_cost(X, y, w, b) 
    
    # You need to calculate this value
    reg_cost = 0.
    
    ### START CODE HERE ###                                               
    for j in range(n):
        reg_cost += (w[j]**2)                                       
    reg_cost = (lambda_/(2*m)) * reg_cost
        
    
    ### END CODE HERE ### 
    
    # Add the regularization cost to get the total cost
    total_cost = cost_without_reg + reg_cost

    return total_cost


# <details>
#   <summary><font size="3" color="darkgreen"><b>Click for hints</b></font></summary>
#     
#     
# * Here's how you can structure the overall implementation for this function
#     ```python 
#        def compute_cost_reg(X, y, w, b, lambda_ = 1):
#    
#            m, n = X.shape
#     
#             # Calls the compute_cost function that you implemented above
#             cost_without_reg = compute_cost(X, y, w, b) 
#     
#             # You need to calculate this value
#             reg_cost = 0.
#     
#             ### START CODE HERE ###
#             for j in range(n):
#                 reg_cost_j = # Your code here to calculate the cost from w[j]
#                 reg_cost = reg_cost + reg_cost_j
#             reg_cost = (lambda_/(2 * m)) * reg_cost
#             ### END CODE HERE ### 
#     
#             # Add the regularization cost to get the total cost
#             total_cost = cost_without_reg + reg_cost
# 
#         return total_cost
#     ```
#   
#     If you're still stuck, you can check the hints presented below to figure out how to calculate `reg_cost_j` 
#     
#     <details>
#           <summary><font size="2" color="darkblue"><b>Hint to calculate reg_cost_j</b></font></summary>
#            &emsp; &emsp; You can use calculate reg_cost_j as <code>reg_cost_j = w[j]**2 </code> 
#     </details>
#         
#     </details>
# 
# </details>
# 
#     

# Run the cell below to check your implementation of the `compute_cost_reg` function.

# In[79]:


X_mapped = map_feature(X_train[:, 0], X_train[:, 1])
np.random.seed(1)
initial_w = np.random.rand(X_mapped.shape[1]) - 0.5
initial_b = 0.5
lambda_ = 0.5
cost = compute_cost_reg(X_mapped, y_train, initial_w, initial_b, lambda_)

print("Regularized cost :", cost)

# UNIT TEST    
compute_cost_reg_test(compute_cost_reg)


# **Expected Output**:
# <table>
#   <tr>
#     <td> <b>Regularized cost : <b></td>
#     <td> 0.6618252552483948 </td> 
#   </tr>
# </table>

# <a name="3.5"></a>
# ### 3.5 Gradient for regularized logistic regression
# 
# In this section, you will implement the gradient for regularized logistic regression.
# 
# 
# The gradient of the regularized cost function has two components. The first, $\frac{\partial J(\mathbf{w},b)}{\partial b}$ is a scalar, the other is a vector with the same shape as the parameters $\mathbf{w}$, where the $j^\mathrm{th}$ element is defined as follows:
# 
# $$\frac{\partial J(\mathbf{w},b)}{\partial b} = \frac{1}{m}  \sum_{i=0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)})  $$
# 
# $$\frac{\partial J(\mathbf{w},b)}{\partial w_j} = \left( \frac{1}{m}  \sum_{i=0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)}) x_j^{(i)} \right) + \frac{\lambda}{m} w_j  \quad\, \mbox{for $j=0...(n-1)$}$$
# 
# Compare this to the gradient of the cost function without regularization (which you implemented above), which is of the form 
# $$
# \frac{\partial J(\mathbf{w},b)}{\partial b}  = \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - \mathbf{y}^{(i)}) \tag{2}
# $$
# $$
# \frac{\partial J(\mathbf{w},b)}{\partial w_j}  = \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - \mathbf{y}^{(i)})x_{j}^{(i)} \tag{3}
# $$
# 
# 
# As you can see,$\frac{\partial J(\mathbf{w},b)}{\partial b}$ is the same, the difference is the following term in $\frac{\partial J(\mathbf{w},b)}{\partial w}$, which is $$\frac{\lambda}{m} w_j  \quad\, \mbox{for $j=0...(n-1)$}$$ 
# 
# 
# 
# 

# <a name='ex-06'></a>
# ### Exercise 6
# 
# Please complete the `compute_gradient_reg` function below to modify the code below to calculate the following term
# 
# $$\frac{\lambda}{m} w_j  \quad\, \mbox{for $j=0...(n-1)$}$$
# 
# The starter code will add this term to the $\frac{\partial J(\mathbf{w},b)}{\partial w}$ returned from `compute_gradient` above to get the gradient for the regularized cost function.
# 
# 
# If you get stuck, you can check out the hints presented after the cell below to help you with the implementation.

# In[80]:


# UNQ_C6
def compute_gradient_reg(X, y, w, b, lambda_ = 1): 
    """
    Computes the gradient for logistic regression with regularization
 
    Args:
      X : (ndarray Shape (m,n)) data, m examples by n features
      y : (ndarray Shape (m,))  target value 
      w : (ndarray Shape (n,))  values of parameters of the model      
      b : (scalar)              value of bias parameter of the model
      lambda_ : (scalar,float)  regularization constant
    Returns
      dj_db : (scalar)             The gradient of the cost w.r.t. the parameter b. 
      dj_dw : (ndarray Shape (n,)) The gradient of the cost w.r.t. the parameters w. 

    """
    m, n = X.shape
    
    dj_db, dj_dw = compute_gradient(X, y, w, b)

    ### START CODE HERE ###
    for j in range(n):
        dj_dw[j] = dj_dw[j] + (lambda_/m) * w[j]

        
    ### END CODE HERE ###         
        
    return dj_db, dj_dw


# <details>
#   <summary><font size="3" color="darkgreen"><b>Click for hints</b></font></summary>
#     
#     
# * Here's how you can structure the overall implementation for this function
#     ```python 
#     def compute_gradient_reg(X, y, w, b, lambda_ = 1): 
#         m, n = X.shape
#     
#         dj_db, dj_dw = compute_gradient(X, y, w, b)
# 
#         ### START CODE HERE ###     
#         # Loop over the elements of w
#         for j in range(n): 
#             
#             dj_dw_j_reg = # Your code here to calculate the regularization term for dj_dw[j]
#             
#             # Add the regularization term  to the correspoding element of dj_dw
#             dj_dw[j] = dj_dw[j] + dj_dw_j_reg
#         
#         ### END CODE HERE ###         
#         
#         return dj_db, dj_dw
#     ```
#   
#     If you're still stuck, you can check the hints presented below to figure out how to calculate `dj_dw_j_reg` 
#     
#     <details>
#           <summary><font size="2" color="darkblue"><b>Hint to calculate dj_dw_j_reg</b></font></summary>
#            &emsp; &emsp; You can use calculate dj_dw_j_reg as <code>dj_dw_j_reg = (lambda_ / m) * w[j] </code> 
#     </details>
#         
#     </details>
# 
# </details>
# 
#     
# 

# Run the cell below to check your implementation of the `compute_gradient_reg` function.

# In[81]:


X_mapped = map_feature(X_train[:, 0], X_train[:, 1])
np.random.seed(1) 
initial_w  = np.random.rand(X_mapped.shape[1]) - 0.5 
initial_b = 0.5
 
lambda_ = 0.5
dj_db, dj_dw = compute_gradient_reg(X_mapped, y_train, initial_w, initial_b, lambda_)

print(f"dj_db: {dj_db}", )
print(f"First few elements of regularized dj_dw:\n {dj_dw[:4].tolist()}", )

# UNIT TESTS    
compute_gradient_reg_test(compute_gradient_reg)


# **Expected Output**:
# <table>
#   <tr>
#     <td> <b>dj_db:</b>0.07138288792343</td> </tr>
#   <tr>
#       <td> <b> First few elements of regularized dj_dw:</b> </td> </tr>
#    <tr>
#    <td> [[-0.010386028450548], [0.011409852883280], [0.0536273463274], [0.003140278267313]] </td> 
#   </tr>
# </table>

# <a name="3.6"></a>
# ### 3.6 Learning parameters using gradient descent
# 
# Similar to the previous parts, you will use your gradient descent function implemented above to learn the optimal parameters $w$,$b$. 
# - If you have completed the cost and gradient for regularized logistic regression correctly, you should be able to step through the next cell to learn the parameters $w$. 
# - After training our parameters, we will use it to plot the decision boundary. 
# 
# **Note**
# 
# The code block below takes quite a while to run, especially with a non-vectorized version. You can reduce the `iterations` to test your implementation and iterate faster. If you have time later, run for 100,000 iterations to see better results.

# In[82]:


# Initialize fitting parameters
np.random.seed(1)
initial_w = np.random.rand(X_mapped.shape[1])-0.5
initial_b = 1.

# Set regularization parameter lambda_ (you can try varying this)
lambda_ = 0.01    

# Some gradient descent settings
iterations = 10000
alpha = 0.01

w,b, J_history,_ = gradient_descent(X_mapped, y_train, initial_w, initial_b, 
                                    compute_cost_reg, compute_gradient_reg, 
                                    alpha, iterations, lambda_)


# <details>
# <summary>
#     <b>Expected Output: Cost < 0.5  (Click for details)</b>
# </summary>
# 
# ```
# # Using the following settings
# #np.random.seed(1)
# #initial_w = np.random.rand(X_mapped.shape[1])-0.5
# #initial_b = 1.
# #lambda_ = 0.01;                                          
# #iterations = 10000
# #alpha = 0.01
# Iteration    0: Cost     0.72   
# Iteration 1000: Cost     0.59   
# Iteration 2000: Cost     0.56   
# Iteration 3000: Cost     0.53   
# Iteration 4000: Cost     0.51   
# Iteration 5000: Cost     0.50   
# Iteration 6000: Cost     0.48   
# Iteration 7000: Cost     0.47   
# Iteration 8000: Cost     0.46   
# Iteration 9000: Cost     0.45   
# Iteration 9999: Cost     0.45       
#     
# ```

# <a name="3.7"></a>
# ### 3.7 Plotting the decision boundary
# To help you visualize the model learned by this classifier, we will use our `plot_decision_boundary` function which plots the (non-linear) decision boundary that separates the positive and negative examples. 
# 
# - In the function, we plotted the non-linear decision boundary by computing the classifier’s predictions on an evenly spaced grid and then drew a contour plot of where the predictions change from y = 0 to y = 1.
# 
# - After learning the parameters $w$,$b$, the next step is to plot a decision boundary similar to Figure 4.
# 
# <img src="images/figure 4.png"  width="450" height="450">

# In[83]:


plot_decision_boundary(w, b, X_mapped, y_train)
# Set the y-axis label
plt.ylabel('Microchip Test 2') 
# Set the x-axis label
plt.xlabel('Microchip Test 1') 
plt.legend(loc="upper right")
plt.show()


# <a name="3.8"></a>
# ### 3.8 Evaluating regularized logistic regression model
# 
# You will use the `predict` function that you implemented above to calculate the accuracy of the regularized logistic regression model on the training set

# In[84]:


#Compute accuracy on the training set
p = predict(X_mapped, w, b)

print('Train Accuracy: %f'%(np.mean(p == y_train) * 100))


# **Expected Output**:
# <table>
#   <tr>
#     <td> <b>Train Accuracy:</b>~ 80%</td> </tr>
# </table>

# **Congratulations on completing the final lab of this course! We hope to see you in Course 2 where you will use more advanced learning algorithms such as neural networks and decision trees. Keep learning!**

# <details>
#   <summary><font size="2" color="darkgreen"><b>Please click here if you want to experiment with any of the non-graded code.</b></font></summary>
#     <p><i><b>Important Note: Please only do this when you've already passed the assignment to avoid problems with the autograder.</b></i>
#     <ol>
#         <li> On the notebook’s menu, click “View” > “Cell Toolbar” > “Edit Metadata”</li>
#         <li> Hit the “Edit Metadata” button next to the code cell which you want to lock/unlock</li>
#         <li> Set the attribute value for “editable” to:
#             <ul>
#                 <li> “true” if you want to unlock it </li>
#                 <li> “false” if you want to lock it </li>
#             </ul>
#         </li>
#         <li> On the notebook’s menu, click “View” > “Cell Toolbar” > “None” </li>
#     </ol>
#     <p> Here's a short demo of how to do the steps above: 
#         <br>
#         <img src="https://drive.google.com/uc?export=view&id=14Xy_Mb17CZVgzVAgq7NCjMVBvSae3xO1" align="center" alt="unlock_cells.gif">
# </details>
