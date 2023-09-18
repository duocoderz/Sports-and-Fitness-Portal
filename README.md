# Sports and Fitness Portal Website

- A sports and portal website (created for competition by [@arnavnagpurkar](https://github.com/arnavnagpurkar/) and [@AryanSarode18](https://github.com/arnavnagpurkar/)

## Features (To be Written)

- Feature 1
- Feature 2
- Feature 3
- Feature 4

## Requirements (If cloning the project)

- Python 3
- Flask
- Flask-SQLAlchemy
- A Web Browser

## Python Commands

- To download flask and SQLAlchemy:<br>
  - Windows
  ```shell
    pip install flask
    pip install Flask-SQLAlchemy
  ```
  - Mac/Linux
  ```shell
    pip3 install flask
    pip3 install Flask-SQLAlchemy
  ```
- To run the development server (WITHOUT DEBUGGING)
  - In Windows (Powershell) - <b>Recommended</b>
    - If in the Project Directory:
      ```bash
      cd ../
      $env:FLASK_APP = "Sports-and-Fitness-Portal"
      $env:FLASK_ENV = "development"
      python -m flask run
      ```
    - If in the Previous Directory:
      ```bash
      $env:FLASK_APP = "Sports-and-Fitness-Portal"
      $env:FLASK_ENV = "development"
      python -m flask run
      ```
  - In Windows (CMD)
    - If in the Project Directory:
      ```bash
      cd ../
      set FLASK_APP=Sports-and-Fitness-Portal
      set FLASK_ENV=development
      python -m flask run
      ```
    - If in the Previous Directory:
      ```bash
      set FLASK_APP=Sports-and-Fitness-Portal
      set FLASK_ENV=development
      python -m flask run
      ```
  - For Linux/Mac
    - If in Project Directory:
      ```bash
      cd ../
      export FLASK_APP=Sports-and-Fitness-Portal
      export FLASK_ENV=development
      python3 -m flask run
      ```
    - If in the Previous Directory:
      ```bash
      export FLASK_APP=Sports-and-Fitness-Portal
      export FLASK_ENV=development
      python3 -m flask run
      ```

- Enable Debugging in Development server <b>(MORE RECOMMENDED THAN THE NORMAL ONE)</b><br>The below commands only work on previous directory if you are not in the previous make sure that you run this command first:
  ```bash
  cd ../
  ```
  - Windows (Powershell) - <b>Recommended</b>
    ```bash
    $env:FLASK_APP = "Sports-and-Fitness-Portal"
    $env:FLASK_ENV = "development"
    $env:FLASK_DEBUG = "1"  # Enable debugging
    python -m flask run
    ```
  - Windows (CMD)
    ```bash
    set FLASK_APP=Sports-and-Fitness-Portal
    set FLASK_ENV=development
    set FLASK_DEBUG=1  # Enable debugging
    python -m flask run
    ```
  - Mac/Linux
    ```bash
    export FLASK_APP=Sports-and-Fitness-Portal
    export FLASK_ENV=development
    export FLASK_DEBUG=1  # Enable debugging
    python -m flask run
    ```

- You should receive outputs similar to these:
  - Debugging On:
    ```bash
    * Serving Flask app "Sports-and-Fitness-Portal"
    * Environment: development
    * Debug mode: on
    * Running on http://127.0.0.1:5000/ (Press CTRL+C to  quit)
    * Restarting with stat
    * Debugger is active!
    * Debugger PIN: 855-212-761
    ```
  - Debugging off
    ```bash
    * Serving Flask app "Sports-and-Fitness-Portal"
    * Environment: development
    * Running on http://127.0.0.1:5000/ (Press CTRL+C to  quit)
    ```
## Clone
Use this command to clone the project in your device.<br>
(You must have git installed on your computer)

```shell
git clone https://github.com/arnavnagpurkar/Sports-and-Fitness-Portal.git
```

## Contribution and Pull Requests 
- Feel free to post issues on this project we'll try to solve them
- As this is project for competition no one can contribute in the project except [@arnavnagpurkar](https://github.com/arnavnagpurkar/) and [@AryanSarode18](https://github.com/arnavnagpurkar/) so sorry PR can't be accepted 

