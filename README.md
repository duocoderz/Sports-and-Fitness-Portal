# Sports and Fitness Portal Website

- A sports and portal website (created for competition by [@arnavnagpurkar](https://github.com/arnavnagpurkar/) and [@AryanSarode18](https://github.com/aryansarode18/)

## Technologies Used

- **HTML:** Used for structuring the page and content.
- **CSS:** Used for styling and layout.
- **JavaScript (JS):** Used for adding interactivity and dynamic features to the website.
- **Python:** Used for the backend server using Flask framework.

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
      ```bash
      $env:FLASK_APP = "Sports_and_Fitness_Portal"
      $env:FLASK_ENV = "development"
      python -m flask run
      ```
  - In Windows (CMD)
      ```bash
      set FLASK_APP=Sports_and_Fitness_Portal
      set FLASK_ENV=development
      python -m flask run
      ```
  - For Linux/Mac
      ```bash
      export FLASK_APP=Sports_and_Fitness_Portal
      export FLASK_ENV=development
      python3 -m flask run
      ```

- Enable Debugging in Development server <b>(MORE RECOMMENDED THAN THE NORMAL ONE)</b><br>
  - Windows (Powershell) - <b>Recommended</b>
    ```bash
    $env:FLASK_APP = "Sports_and_Fitness_Portal"
    $env:FLASK_ENV = "development"
    $env:FLASK_DEBUG = "1"  # Enable debugging
    python -m flask run
    ```
  - Windows (CMD)
    ```bash
    set FLASK_APP=Sports_and_Fitness_Portal
    set FLASK_ENV=development
    set FLASK_DEBUG=1  # Enable debugging
    python -m flask run
    ```
  - Mac/Linux
    ```bash
    export FLASK_APP=Sports_and_Fitness_Portal
    export FLASK_ENV=development
    export FLASK_DEBUG=1  # Enable debugging
    python -m flask run
    ```

- You should receive outputs similar to these:
  - Debugging On:
    ```bash
    * Serving Flask app "Sports_and_Fitness_Portal"
    * Environment: development
    * Debug mode: on
    * Running on http://127.0.0.1:5000/ (Press CTRL+C to  quit)
    * Restarting with stat
    * Debugger is active!
    * Debugger PIN: 855-212-761
    ```
  - Debugging off
    ```bash
    * Serving Flask app "Sports_and_Fitness_Portal"
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

## Author

This Project Page was created by [@AryanSarode18](https://github.com/aryansarode18/) and [@arnavnagpurkar](https://github.com/arnavnagpurkar/) in [2023].
