# Trey Weathers (aka - The Ethical Mad Scientist🤓)
## App Developer | Artificial Intelligence Engineer | Robotics and Physics revving up! 🚀 
### On track to become Certified Aerospace Engineer and Theoretical Physicist🪐

# SECTION 1: What's in Progress??!
## 1. General Assembly Capstone - The Virtual Detention Classroom!- check out the repo(s) here: 
1. https://github.com/TREYCSE/Virtual_Detention_Backend
2. https://github.com/TREYCSE/Virtual_Detention_Frontend

## 2. App Development Work
### Backend => Data Science

## 3. Artificial Intelligence Work
### Machine Learning => Deep Learning => Natural Language Question Answering

# SECTION 2: How To's!
## 1. Intersection of App Development and Artificial Intelligence:
#### How to Deploy a Machine Learning Model as RestFul API!
###### Quickly let's discuss what this means and why this is happening: In order for the data from TensorFlow Lite machine learning models to be returned to a user in a full-stack application, it will need to be rendered as API. So do to do this, (as presented in my capstone project), we deploy our TensorFlow models as RESTful API so that it can be returned to users! These are some condensed steps from a very helpful freeCodeCamp article: https://www.freecodecamp.org/news/deploy-an-ml-model-using-fastapi-and-docker/
1.  In the root directory, create a main.py file. In that file, add the following lines of code:
        
        from fastapi import FastAPI
        from fastapi.middleware.cors import CORSMiddleware
        from uvicorn import run
        import os
        
        app = FastAPI()

        origins = ["*"]
        methods = ["*"]
        headers = ["*"]

        app.add_middleware(
            CORSMiddleware, 
            allow_origins = origins,
            allow_credentials = True,
            allow_methods = methods,
            allow_headers = headers    
        )

        @app.get("/")
        async def root():
            return {"message": "Welcome to the Food Vision API!"}

        if __name == "__main__":
          port = int(os.environ.get('PORT', 5000))
          run(app, host="0.0.0.0", port=port)
We also added the CORSMiddleware which essentially allows us to access the API in a different host. That is, we can extend the app further by creating a front-end interface for it. We won't cover that in this article but I put it here just in case you want to create a front-end to interact with the API as well.
@app is needed for FastAPI commands. The get is an HTTP method, while the "/" is the URL path of that specific API request. Below that we call a function that will return something. Here we just return a simple json message. That is, we have a template for writing API endpoints with FastAPI.

        @app.http_method("url_path")
        async def functionName():
            return something
2. Running the command python -m uvicorn main:app --reload will run the app, and will listen to changes we make on the server. Alternatively, you can use python main.py and it will run the app on port 5000, courtesy of the last 3 lines of code. However, this won't let the app listen to changes we make, so you'll have to re-run the app every time you want to see your changes.
3. let's extend the code that we wrote earlier, import all the required functions that we'll use, and load the model itself.

        from fastapi import FastAPI
        from tensorflow.keras.models import load_model
        from tensorflow.keras.utils import get_file 
        from tensorflow.keras.utils import load_img 
        from tensorflow.keras.utils import img_to_array
        from tensorflow import expand_dims
        from tensorflow.nn import softmax
        from numpy import argmax
        from numpy import max
        from numpy import array
        from json import dumps
        from uvicorn import run
        import os

        app = FastAPI()
        model_dir = "food-vision-model.h5"
        model = load_model(model_dir)

        ...
        ...
        ...

        if __name == "__main__":
                port = int(os.environ.get('PORT', 5000))
                run(app, host="0.0.0.0", port=port)
4. 
