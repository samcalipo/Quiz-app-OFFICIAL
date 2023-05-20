# Quizzical Website App

This is the README file for the Quizzical website app. Quizzical is a trivia game where users can test their knowledge by answering multiple-choice questions. The app is built using React and utilizes an external API to fetch the questions.

## Installation

To run the Quizzical app locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the command line.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to access the app.

## Usage

Upon opening the Quizzical app, users will be presented with an introductory screen that displays the app name and a "Start Quiz" button. Clicking the "Start Quiz" button will hide the introductory screen and display the quiz questions.

The quiz questions are fetched from an external API (`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`) using the `fetch` function in React's `useEffect` hook. The API provides 5 multiple-choice questions with varying difficulty levels. The questions are decoded using the `he` library to handle any HTML entities present in the API response.

Each question is displayed along with its options. Users can select a single option for each question by clicking on the corresponding radio button. As the user selects an option, the app keeps track of the selected answers and provides visual feedback indicating whether the selected answer is correct or not.

Once the user has answered all the questions, they can click the "Check Answers" button to submit their answers. The app then calculates the number of correct answers and displays the final score. Users have the option to play the quiz again by clicking the "Play again!" button.

## Components

The Quizzical app consists of the following components:

### App

The main component that serves as the entry point for the application. It manages the state of the app, including the visibility of the introductory screen, the list of questions, whether answers have been submitted, whether a new game is requested, and the count of correct answers. It also contains functions to toggle the visibility of the introductory screen, handle user input changes, check the correctness of answers, and show the final results.

### Intro

A component responsible for displaying the introductory screen. It receives the `introIsShown` and `toggleIntro` props from the App component to determine its visibility. When the "Start Quiz" button is clicked, it calls the `toggleIntro` function to hide the introductory screen.

### Form

A component that renders the quiz questions and handles user input. It receives props including the list of questions, the visibility of the introductory screen, the handleChange function to handle user input changes, the showResults function to display the final results, whether answers have been submitted, and the count of correct answers. It maps over the list of questions and renders each question along with its options. It also dynamically applies styles to provide visual feedback on the correctness of the selected answers. Finally, it renders the final score count and a button to check answers or play the quiz again.

## Contributing

Contributions to the Quizzical app are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the GitHub repository.

## License

The Quizzical app is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code according to the terms of the license.
