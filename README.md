# TREY WEATHERS (aka The Ethical Mad Scientist🤓)
  ![image](https://i.imgur.com/MLKKooE.jpg)

### App Developer | Artificial Intelligence Engineer | Robotics and Physics revving up! 🚀 
#### On track to become Certified Aerospace Engineer and Theoretical Physicist🪐

# SECTION 1: What's in Progress??!
## 1. General Assembly Capstone - The Virtual Detention Classroom!- check out the repo(s) here: 
1. https://github.com/TREYCSE/Virtual_Detention_Backend
2. https://github.com/TREYCSE/Virtual_Detention_Frontend

## 2. App Development Work
### Backend => Data Science (troubleshooting before deployment)
1. React.js Frontend application: https://github.com/TREYCSE/ReactUI
2. Monngoose, Node, & Express RESTful API: https://github.com/TREYCSE/REST_API
3. Django RESTful API: 

## 3. Artificial Intelligence Work
### Machine Learning => Deep Learning => Natural Language Question Answering (in testing or fine tuning)
1. Linear Regression Models:
2. Logistic Regression/Classification Models:

# SECTION 2: How To's!
## 1. Intersection of App Development and Artificial Intelligence:
#### How to Deploy a Machine Learning Model as RestFul API!
###### Quickly let's discuss what this means and why this is happening: In order for the data from TensorFlow Lite machine learning models to be returned to a user in a full-stack application, it will need to be rendered as API. So do to do this, (as presented in my capstone project), we deploy our TensorFlow models as RESTful API so that it can be returned to users! These are some condensed steps from a very helpful freeCodeCamp tutorial: https://www.freecodecamp.org/news/deploy-an-ml-model-using-fastapi-and-docker/

1.  PYTHON
In the root directory, create a main.py file. In that file, add the following lines of code:
        
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
Running the command python -m uvicorn main:app --reload will run the app, and will listen to changes we make on the server. Alternatively, you can use python main.py and it will run the app on port 5000, courtesy of the last 3 lines of code. However, this won't let the app listen to changes we make, so you'll have to re-run the app every time you want to see your changes.
let's extend the code that we wrote earlier, import all the required functions that we'll use, and load the model itself.

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
After loading in the model, let's add in the classes that we have (what is inside the array), which are based on the dataset that you have available in your directory.

        great_example = array([
            'apple pie',
            'baby back ribs',
            'baklava',
            'beef carpaccio',
            'beef tartare',
            'beet salad',
            'beignets',
            'bibimbap',
            'bread pudding',
            'waffles'
        ])
Now that we have the classes, let's write the main API functionality. (in main.py after root function)

        @app.post("/net/image/prediction/")
        async def get_net_image_prediction(image_link: str = ""):

            if image_link == "":
                return {"message": "No image link provided"}

            img_path = get_file(
                origin = image_link
            )
            img = load_img(
                img_path, 
                target_size = (224, 224)
            )

            img_array = img_to_array(img)
            img_array = expand_dims(img_array, 0)

            pred = model.predict(img_array)
            score = softmax(pred[0])

            class_prediction = class_predictions[argmax(score)]
            model_score = round(max(score) * 100, 2)

            return {
                "model-prediction": class_prediction,
                "model-prediction-confidence-score": model_score
            }
Here, we make a post request to the endpoint /net/image/prediction/ and provide the image_url as a query parameter. That is, the full endpoint when posting an image URL link would be /net/image/prediction/image_url=image-url. For simplicity's sake, we give the image_link a default value of "" and when there's no link passed to the endpoint, we simply return a message saying that there's no image link provided. get_file() downloads the image through the provided URL link, while load_img() loads the image in PIL format, and turns it into the appropriate image size that the model wants. img_to_array() converts the loaded image to a NumPy array. expand_dims() expands the dimensions of the array by one at the zero'th index. We then use model.predict() to get the model prediction on the loaded image, and get the model's confidence score on said prediction using softmax(). I used softmax here as that's the activation function used in creating the model. We finally then get the food type by using argmax() on the model's confidence score. We'll use that as the index that we'll use in searching through the class_predictions array which contains the various food classes we have. Lastly, we multiply the model's confidence score by 100 so that the range of the score would be from 1 to 100. We then return the model's prediction, and the model's confidence score.

2. HEROKU
You can actually deploy this app as is on Heroku, using the usual method of defining a Procfile. But when I tried this method, I kept on getting a ValueError: Out of range float values are not JSON compliant error. I also get this error when running the app on Windows Subsystem for Linux (WSL). When I run on Windows, however, the error disappears.

You can actually avoid this error by adding this line of code, after the initial assignment of the model_score variable:

    model_score = dumps(model_score.tolist())
    In main.py, below model_score = round(max(score) * 100, 2)

This lets the app run on both Heroku and WSL, but it will only return these values when making the POST request.

    {
        "model-prediction": "apple pie",
        "model-prediction-confidence-score": NaN,
    }
So, it works on Windows, but not on Heroku (using Procfile), nor on WSL. This is the kind of problem that Docker solves!

3. DOCKER
Let's start dockerizing the application. Create a Dockerfile in the project's root directory and put in the following content:

    FROM python:3.7.3-stretch

    # Maintainer info
    LABEL maintainer="your-email-address"

    # Make working directories
    RUN  mkdir -p  /food-vision-api
    WORKDIR  /food-vision-api

    # Upgrade pip with no cache
    RUN pip install --no-cache-dir -U pip

    # Copy application requirements file to the created working directory
    COPY requirements.txt .

    # Install application dependencies from the requirements file
    RUN pip install -r requirements.txt

    # Copy every file in the source folder to the created working directory
    COPY  . .

    # Run the python application
    CMD ["python", "main.py"]

