# dynamic-form
This is simple dynamic form written using React. It renders different fields in the form based on the json input. .

This was a take home assignment from Sparrow.

## Setup
Install packages using this command
```sh
npm i
```

Run the app locally using this command
```sh
npm run start
```

## Design document
I like to use a design document before working on any project. This gives me a good picture of the requirements and helps me in designing a better system. Please check it out here.
https://docs.google.com/document/d/1RHPTLwVZlkK_amCBwdBLxza2NqE1ugf3tIHJMoQr4tk/edit?usp=sharing

## Demo
Watch the demo in the youtube link below
[https://youtu.be/kniJPvgXhB4](https://youtu.be/kniJPvgXhB4)

## Future enhacements
- Option to make a field required and show custom field helper text
- Option to render custom input type using a renderInput method
- Support wide range of input fields like select, radio button, multi select dropdown etc
- Add custom form validation to each element like email field validation
- Add min character limit for text fields.
- Support for custom input field like custom date-pickers, custom textbox etc
- Support accessibility using aria-labels and keyboard navigation
- Add unit testcases for all the components
- Optimize the performance of the input field by using virtualization which can help us show more than 100 form fields.
- Extensibility using css like custom class names for css theming.
- Ability to make the form work with custom css components like Bootstrap.
- Passing input ref variables for easier DOM re-render and update.
- Support different tags like <textarea> etc
- Debounce function to control submit multiple times.
- Custom placeholder for each input field
- Custom helper text for each input field.
