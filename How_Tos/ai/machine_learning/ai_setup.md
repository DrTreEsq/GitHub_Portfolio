## Making Your Machine Learn!
#### 1. How Can Machine Learning be used for your Appplication?
Well, this is a question that I decided to tackle for my Capstone project at General Assembly. Because I had already broadened my knowledge of AI, i thought it'd be a shame to not find how they intersect!
So there are several ways in which you can integrate Machine Learning AI into your application as it is a pretty large process.
1. write code for model: math and programming skills needed
2. train & fine-tool model: data skills needed
3. deploy the model: programming skills needed
but you can add machine learning models to your app without writing the code in a process we call "inferencing" based off of someone else's model we train and fine-tune it to make better predictions, or even use a completely pre-trained model! Once the model is good to go, use your programming skills to deploy it as API!

#### 2. Creating a Machine Learning - friendly developer environment
###### Do you know your computer personally? Always check it's compatability before taking it out for a spin!
###### EXAMPLE: Virtual Detention Environment (GA Capstone) 
        
        Hardware Type | Machine Learning Requirement | Alternative | Purpose
        
        Apple M1 chip | CPU, GPU, neural network, etc. | not mac | Information Processing, Memory, and Speed
        
  
        Software Type | Machine Learning Requirement | Alternative | Purpose
        
        programming language | Python | Java, Javascript, TypeScript | writing the model (BERT for Virtual Detention was made and trained, but inferences made)
        ? | SQuAD - The Stanford Question Answering Dataset | [link](https://github.com/ad-freiburg/large-qa-datasets) | Training & Fine-tune the Model/Getting data
        programming language | C++ | writing metadata
        Cloud Service | Heroku | NA | Deploy model and application
        Containerizer - Docker | CPU with visualization | Containerizer for application
        
        File Type | How to Open | Purpose
        
        .tflite | not meant to be opened but meant to be read: harware CPU requirements - Coral | metadata
        .ckpt file | not meant to be opened but to be read in Python | pretrained TensorFlow model data to deploy as API

hint:  sysctl -a | grep machdep.cpu (paste in terminal to get hardware information)

#### 3. Here's a couple of helpful resources:
1. choosing hardware to run ML models: https://www.cherryservers.com/blog/how-to-choose-hardware-for-your-machine-learning-project#:~:text=Let%27s%20look%20at%20the%20three%20core%20hardware%20options,for%20machine%20learning%3A%20processing%20units%2C%20memory%2C%20and%20storage.
https://beebom.com/check-cpu-configuration-mac/
2. https://www.howtogeek.com/689986/how-to-check-which-cpu-your-mac-uses/ & https://www.howtogeek.com/689986/how-to-check-which-cpu-your-mac-uses/#:~:text=To%20get%20even%20more%20information%20on,you%E2%80%99re%20done%2C%20just%20close%20%E2%80%9CSystem%20Report.%E2%80%9D.&text=To%20get%20even%20more,just%20close%20%E2%80%9CSystem%20Report.%E2%80%9D.&text=even%20more%20information%20on,you%E2%80%99re%20done%2C%20just%20close
3. https://www.cherryservers.com/blog/how-to-choose-hardware-for-your-machine-learning-project#:~:text=Let%27s%20look%20at%20the%20three%20core%20hardware%20options,for%20machine%20learning%3A%20processing%20units%2C%20memory%2C%20and%20storage.
5. https://www.apple.com/in/macbook-air-m1/
6. [how to read model in python]: (file can not be opened in text editor)
7. ^^https://github.com/tensorflow/tensorflow/blob/fbad4e056e45a9743f10cec44b2e3c73674fe8ca/tensorflow/python/tools/freeze_graph.py#L117
7. ^^ stack overflow: https://stackoverflow.com/questions/42894104/used-pretraing-model-in-tensorflow-ckpt-file#:~:text=You%20have%20%28at%20least%29%20two%20options%20for%20solving,graph%20structure%20to%20the%20variables%20in%20the%20checkpoint.