The Trivia Quiz app is a quiz in which the user get presented 5 questions. The user has 4 buttons representing 4 different options they can choose from. As soon as they select one the colour of the button will turn green or red based if the answer is correct or not. Once one option is selected, the other buttons get disabled and the next buttons appears on screen. By clicking the next button the questions will progress and at the last one instead of the next button the user will have a finish one which will display the final results.

![Quiz Screenshot 1](public/screenshot1.png?raw=true)
![Quiz Screenshot 2](public/screenshot2.png?raw=true)
![Quiz Screenshot 3](public/screenshot3.png?raw=true)
![Quiz Screenshot 4](public/screenshot4.png?raw=true)
![Quiz Screenshot 5](public/screenshot5.png?raw=true)


Feedback:

For the 
header.test.tsx: The test is clear and easy to understand. You could change the test description to "renders the page title as an h1" instead of "Tests that the page title is on screen". Otherwise, it already makes it easy to create and understand the component.


Question.test.tsx: there is a mismatching data-testid, in the component there is (data-testid="results" ) but in the test (const result = screen.queryByTestId("result");
)

NextButton.test.tsx: The test has a good, simple structure.

OptionButton.test.tsx: in this test you there is not test for the handleClick button.

OptionList.test.tsx: In this test, you only check that one button is disabled after answering. It would be more robust to assert that all buttons are disabled once an answer is chosen, perhaps using a loop.