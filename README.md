# Trey Weathers
## App Developer | Artificial Intelligence Engineer | Robotics and Physics revving up! 🚀 
### On track to become Certified Aerospace Engineer and Theoretical Physicist🪐

### What's in Progress??!
#### MY CAPSTONE - The Virtual Detention Classroom!- check out the repo(s) here: 

## App Dev - Primarily Backeend/Data Science

## AI - Primarily Machine/Deep Learning

## Intersection of App Development and Artificial Intelligence:
#### How to Deploy a Machine Learning Model as RestFul API!
###### Quickly let's discuss what this means and why this is happening: In order for the data from TensorFlow Lite machine learning models to be returned to a user in a full-stack application, it will need to be rendered as API. So do to do this, (as presented in my capstone project), we deploy our TensorFlow models as RESTful API so that it can be returned to users! These are some steps from a very helpful freeCodeCamp article: https://www.freecodecamp.org/news/deploy-an-ml-model-using-fastapi-and-docker/
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


